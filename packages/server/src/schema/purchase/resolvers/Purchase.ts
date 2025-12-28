import type { PurchaseResolvers } from "./../../types.generated";

export const Purchase: PurchaseResolvers = {
  proposer: (parent, _args, ctx) => {
    return ctx.data.User.findByIdOrThrow(parent.proposerId);
  },
  
  status: ({ status }) => {
    return status.toUpperCase() as Uppercase<typeof status>;
  },
  
  votes: async (parent, _args, ctx) => {
    return ctx.data.Vote.filterByPurchaseId(parent.id);
  },
  
  voteCount: async (parent, _args, ctx) => {
    const votes = await ctx.data.Vote.filterByPurchaseId(parent.id);
    return {
      yes: votes.filter((v) => v.vote === "yes").length,
      no: votes.filter((v) => v.vote === "no").length,
      abstain: votes.filter((v) => v.vote === "abstain").length,
    };
  },
  
  userVote: async (parent, _args, ctx) => {
    if (!ctx.jwt?.user?.id) return null;
    return ctx.data.Vote.findByUserAndPurchase(ctx.jwt.user.id, parent.id);
  },
};
