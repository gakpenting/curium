package keeper

import (
	"context"
	"fmt"
	"github.com/bluzelle/curium/x/crud/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) RenewLease(goCtx context.Context, msg *types.MsgRenewLease) (*types.MsgRenewLeaseResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasCrudValue(&ctx, msg.Uuid, msg.Key) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %s doesn't exist", msg.Key))
	}

	ownsUuid, err := k.OwnsUuid(&ctx, msg.Uuid, msg.Creator)

	if err != nil {
		return nil, err
	}

	if !ownsUuid {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	curCrudValue := k.GetCrudValue(&ctx, msg.Uuid, msg.Key)

	newCrudValue := k.NewCrudValue(
		curCrudValue.Creator,
		curCrudValue.Uuid,
		curCrudValue.Key,
		curCrudValue.Value,
		msg.Lease,
		ctx.BlockHeight())


	k.UpdateLease(&ctx, newCrudValue)
	k.SetCrudValue(&ctx, *newCrudValue)

	return &types.MsgRenewLeaseResponse{}, nil
}
