package keeper

import (
	"fmt"
	"github.com/bluzelle/curium/app/filteredLogger"
	"github.com/bluzelle/curium/x/curium"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	authkeeper "github.com/cosmos/cosmos-sdk/x/auth/keeper"
	stakingkeeper "github.com/cosmos/cosmos-sdk/x/staking/keeper"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	"github.com/gogo/protobuf/sortkeys"
	"github.com/tendermint/tendermint/privval"
	"strings"
	"time"

	"github.com/tendermint/tendermint/libs/log"

	"github.com/bluzelle/curium/x/voting/types"
	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	// this line is used by starport scaffolding # ibc/keeper/import
)

type (
	Keeper struct {
		cdc            codec.Marshaler
		storeKey       sdk.StoreKey
		memKey         sdk.StoreKey
		stakingKeeper  stakingkeeper.Keeper
		msgBroadcaster curium.MsgBroadcaster
		homeDir        string
		accKeeper      authkeeper.AccountKeeper
		voteQueue      []*types.MsgVote
		proofQueue     []*types.MsgVoteProof
		voteHandlers   map[string]types.VoteHandler

		// this line is used by starport scaffolding # ibc/keeper/attribute
	}
)

func NewKeeper(
	cdc codec.Marshaler,
	storeKey,
	memKey sdk.StoreKey,
	stakingKeeper stakingkeeper.Keeper,
	msgBroadcaster curium.MsgBroadcaster,
	homeDir string,

	// this line is used by starport scaffolding # ibc/keeper/parameter
) *Keeper {
	return &Keeper{
		cdc:            cdc,
		storeKey:       storeKey,
		memKey:         memKey,
		stakingKeeper:  stakingKeeper,
		msgBroadcaster: msgBroadcaster,
		homeDir:        homeDir,
		voteHandlers:   map[string]types.VoteHandler{},
		// this line is used by starport scaffolding # ibc/keeper/return
	}
}

func (k *Keeper) Logger(ctx sdk.Context) log.Logger {
	return ctx.Logger().With("module", fmt.Sprintf("x/%s", types.ModuleName))
}

func (k *Keeper) RegisterVoteHandler(handler types.VoteHandler) {
	k.voteHandlers[handler.VoteType()] = handler
}

// Vote this is the function that other modules will call to send a vote
func (k *Keeper) Vote(ctx sdk.Context, votingReq types.VotingRequest) {
	k.Logger(ctx).Info("Voting request received", "id", votingReq.Id, "value", string(votingReq.Value))
	valcons := k.GetValconsAddress()
	proof := types.MsgVoteProof{
		Creator:   votingReq.Creator,
		Valcons:   valcons,
		Signature: k.SignProofSig(votingReq.Value),
		VoteType:  votingReq.VoteType,
		Id:        votingReq.Id,
		From:      votingReq.From,
		Batch:     GenerateBatchNow(),
	}

	k.proofQueue = append(k.proofQueue, &proof)

	vote := types.MsgVote{
		Creator:  proof.Creator,
		Valcons:  proof.Valcons,
		VoteType: proof.VoteType,
		Id:       proof.Id,
		From:     proof.From,
		Batch:    proof.Batch,
		Value:    votingReq.Value,
		Block:    ctx.BlockHeight() + 3,
	}

	k.voteQueue = append(k.voteQueue, &vote)
}

func MakeProofStoreKey(valcons string, voteType string, voteId string) []byte {
	return append([]byte(valcons+voteType), []byte(voteId)...)
}

func MakeVoteStoreKey(block int64, voteType string, voteId string, valcons string) []byte {
	s := fmt.Sprintf("%s\x00%s\x00%s\x00%s", Pad20Int64(block), voteType, voteId, valcons)
	return []byte(s)
}

func Pad20Int64(n int64) string {
	return fmt.Sprintf("%020d", n)
}

func (k *Keeper) GetProofStore(ctx sdk.Context) prefix.Store {
	return prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProofPrefix))
}

func (k *Keeper) GetVoteStore(ctx sdk.Context) prefix.Store {
	return prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.VotePrefix))
}

func (k *Keeper) TransmitProofQueue(ctx sdk.Context) {
	if len(k.proofQueue) == 0 {
		k.Logger(ctx).Info("Skipping empty proof queue")
		return
	}
	if len(k.proofQueue) > 0 {
		var msgs []sdk.Msg
		for i := 0; i < len(k.proofQueue); i++ {
			msgs = append(msgs, k.proofQueue[i])
		}
		result, err := k.msgBroadcaster(ctx, msgs, k.proofQueue[0].From)
		k.Logger(ctx).Info("Sending vote proofs", "count", len(msgs))
		if err != nil {
			k.Logger(ctx).Error("Error broadcasting proofs", "err", err)
			return
		}
		k.Logger(ctx).Info("Broadcast proofs successful", "txhash", result)
		k.proofQueue = []*types.MsgVoteProof{}
	}
}

func (k *Keeper) TransmitVoteQueue(ctx sdk.Context) {
	if len(k.voteQueue) == 0 {
		k.Logger(ctx).Info("skipping empty vote queue")
		return
	}
	var msgs []sdk.Msg
	for _, voteQueueItem := range k.voteQueue {
		msgs = append(msgs, voteQueueItem)
	}
	k.Logger(ctx).Info("broadcasting votes", "vote count", len(msgs))
	res, err := k.msgBroadcaster(ctx, msgs, k.voteQueue[0].From)
	if err != nil {
		k.Logger(ctx).Error("Error broadcasting votes", "err", err)
		return
	}
	k.Logger(ctx).Info("Broadcast votes successful", "result", res)
	k.voteQueue = []*types.MsgVote{}
}

func GenerateBatchNow() string {
	return GenerateBatch(time.Now())
}

func GenerateBatch(t time.Time) string {
	out := time.Date(
		t.Year(),
		t.Month(),
		t.Day(),
		t.Hour(),
		t.Minute(),
		0,
		0,
		time.UTC,
	).String()
	out = strings.Replace(out, ":00 +0000 UTC", "", 1)
	out = strings.Replace(out, " ", "-", -1)
	return out

}

func (k *Keeper) StoreVote(ctx sdk.Context, vote *types.Vote) {
	store := k.GetVoteStore(ctx)
	key := MakeVoteStoreKey(ctx.BlockHeight(), vote.VoteType, vote.Id, vote.Valcons)
	val := k.cdc.MustMarshalBinaryBare(vote)
	store.Set(key, val)
}

func (k *Keeper) getVoteStoreKeys(ctx sdk.Context) []string {
	store := k.GetVoteStore(ctx)
	var keys []string
	iterator := store.Iterator(nil, nil)
	for ; iterator.Valid(); iterator.Next() {
		keys = append(keys, string(iterator.Key()))
	}
	return keys
}

func (k *Keeper) CheckDeliverVotes(ctx sdk.Context) {
	k.Logger(ctx).Info("Check deliver votes")
	if filteredLogger.IsDebug("x/voting") {
		k.Logger(ctx).Debug("vote store keys", "keys", k.getVoteStoreKeys(ctx))
	}

	store := k.GetVoteStore(ctx)

	var votes = map[string]map[string][]*types.Vote{}
	iterator := store.Iterator(nil, nil)
	for ; iterator.Valid(); iterator.Next() {
		var vote types.Vote
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &vote)
		k.Logger(ctx).Debug("prepare vote for delivery", "id", vote.Id)
		if votes[vote.VoteType] == nil {
			votes[vote.VoteType] = map[string][]*types.Vote{}
		}
		votes[vote.VoteType][vote.Id] = append(votes[vote.VoteType][vote.Id], &vote)
		defer store.Delete(iterator.Key())
	}

	for voteType := range votes {
		if k.voteHandlers[voteType] == nil {
			k.Logger(ctx).Error("No vote handler registered", "type", voteType)
			continue
		}

		var ids []string
		for id := range votes[voteType] {
			ids = append(ids, id)
		}
		sortkeys.Strings(ids)
		for _, id := range ids {
			k.Logger(ctx).Info("Sending vote to vote handler", "id", id, "count", len(votes[voteType][id]))
			k.voteHandlers[voteType].VotesReceived(ctx, id, votes[voteType][id])
		}
	}
}

func (k *Keeper) GetPrivateValidator() *privval.FilePV {
	return privval.LoadFilePV(k.homeDir+"/config/priv_validator_key.json", k.homeDir+"/data/priv_validator_state.json")
}

func (k *Keeper) GetValconsAddress() string {
	validator := k.GetPrivateValidator()
	address := validator.GetAddress()
	consAddress := (sdk.ConsAddress)(address)
	addressString := consAddress.String()
	return addressString
}

func (k *Keeper) SignProofSig(value []byte) []byte {
	v := k.GetPrivateValidator()
	s, _ := v.Key.PrivKey.Sign([]byte(value))
	return s
}

func (k *Keeper) GetValidator(ctx sdk.Context, valcons string) (validator stakingtypes.Validator, found bool) {
	consAddr, _ := sdk.ConsAddressFromBech32(valcons)
	return k.stakingKeeper.GetValidatorByConsAddr(ctx, consAddr)
}

func (k *Keeper) GetValidatorWeight(ctx sdk.Context, valcons string) int64 {
	validator, validatorFound := k.GetValidator(ctx, valcons)
	if !validatorFound {
		return 0
	}
	return validator.ConsensusPower()
}

func (k *Keeper) IsVoteValid(ctx sdk.Context, msg *types.MsgVote) bool {
	validator, validatorFound := k.GetValidator(ctx, msg.Valcons)

	if validator.Jailed {
		k.Logger(ctx).Info("Vote received from jailed validator", "name", msg.Id, "valcons", msg.Valcons)
		return false
	}

	if !validatorFound {
		k.Logger(ctx).Info("Vote received from unknown validator", "name", msg.Id, "valcons", msg.Valcons)
		return false
	}

	proofSignature := k.GetVoteProof(ctx, msg).Signature

	pubKey, _ := validator.ConsPubKey()

	isGood := pubKey.VerifySignature(msg.Value, proofSignature)

	if !isGood {
		k.Logger(ctx).Info("vote/proof mismatch", "name", msg.Id, "valcons", msg.Valcons)
	}

	return isGood
}

func (k *Keeper) GetVoteProof(ctx sdk.Context, vote *types.MsgVote) types.MsgVoteProof {
	var msg types.MsgVoteProof
	proofStore := k.GetProofStore(ctx)

	var keys []string
	iterator := proofStore.Iterator(nil, nil)
	for ; iterator.Valid(); iterator.Next() {
		keys = append(keys, string(iterator.Key()))
	}

	proof := proofStore.Get(MakeProofStoreKey(vote.Valcons, vote.VoteType, vote.Id))
	k.cdc.MustUnmarshalBinaryBare(proof, &msg)
	return msg
}
