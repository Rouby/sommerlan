import type { PurchaseResolvers } from "./../../types.generated";

export const Purchase: PurchaseResolvers = {
  proposer: (parent, _args, ctx) => {
    // If proposer is already resolved (from GraphQL), return it
    if ('proposer' in parent && parent.proposer) {
      return parent.proposer as any;
    }
    // Otherwise resolve from proposerId (from database model)
    return ctx.data.User.findByIdOrThrow((parent as any).proposerId) as any;
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
