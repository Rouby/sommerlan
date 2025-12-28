import type { VoteResolvers } from "./../../types.generated";

export const Vote: VoteResolvers = {
  purchase: (parent, _args, ctx) => {
    return ctx.data.Purchase.findByIdOrThrow(parent.purchaseId);
  },
  
  user: (parent, _args, ctx) => {
    return ctx.data.User.findByIdOrThrow(parent.userId);
  },
  
  vote: ({ vote }) => {
    return vote.toUpperCase() as Uppercase<typeof vote>;
  },
};
