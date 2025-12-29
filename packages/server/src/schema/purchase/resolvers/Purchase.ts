import type { PurchaseResolvers } from "./../../types.generated";
import type { Purchase as PurchaseModel } from "../../../data";

export const Purchase: PurchaseResolvers = {
  proposer: (parent, _args, ctx) => {
    // Check if this is a raw database model with proposerId
    const purchaseModel = parent as unknown as PurchaseModel;
    if (purchaseModel.proposerId) {
      return ctx.data.User.findByIdOrThrow(purchaseModel.proposerId) as any;
    }
    // Otherwise, proposer is already resolved
    return parent.proposer as any;
  },
  
  status: ({ status }) => {
    return status.toUpperCase() as Uppercase<typeof status>;
  },
  
  votes: async (parent) => {
    const purchaseModel = parent as unknown as PurchaseModel;
    return (purchaseModel.votes || []) as any;
  },
  
  voteCount: async (parent) => {
    const purchaseModel = parent as unknown as PurchaseModel;
    return purchaseModel.getVoteCount();
  },
  
  userVote: async (parent, _args, ctx) => {
    if (!ctx.jwt?.user?.id) return null;
    const purchaseModel = parent as unknown as PurchaseModel;
    return (purchaseModel.getUserVote(ctx.jwt.user.id) || null) as any;
  },
};
