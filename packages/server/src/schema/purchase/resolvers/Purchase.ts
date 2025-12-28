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
  
  votes: async (parent, _args, ctx) => {
    return ctx.data.Vote.filterByPurchaseId(String(parent.id)) as any;
  },
  
  voteCount: async (parent, _args, ctx) => {
    const votes = await ctx.data.Vote.filterByPurchaseId(String(parent.id));
    return {
      yes: votes.filter((v) => v.vote === "yes").length,
      no: votes.filter((v) => v.vote === "no").length,
      abstain: votes.filter((v) => v.vote === "abstain").length,
    };
  },
  
  userVote: async (parent, _args, ctx) => {
    if (!ctx.jwt?.user?.id) return null;
    return (await ctx.data.Vote.findByUserAndPurchase(
      ctx.jwt.user.id,
      String(parent.id),
    )) as any;
  },
};
