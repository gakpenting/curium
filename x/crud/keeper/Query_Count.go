package keeper

import (
	"context"
	"github.com/bluzelle/curium/x/crud/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) Count(goCtx context.Context, req *types.QueryCountRequest) (*types.QueryCountResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	count, _ := k.GetNumKeysOwned(&ctx, req.Uuid)

	return &types.QueryCountResponse{Uuid: req.Uuid, Count: uint32(count)}, nil

}
