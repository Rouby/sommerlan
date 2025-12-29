import type { PurchaseVoteResolvers } from "./../../types.generated";
import type { PurchaseVote as PurchaseVoteModel } from "../../../data/purchases";

export const PurchaseVote: PurchaseVoteResolvers = {
  user: (parent, _args, ctx) => {
    const voteModel = parent as unknown as PurchaseVoteModel;
    return ctx.data.User.findByIdOrThrow(voteModel.userId) as any;
  },
  
  vote: ({ vote }) => {
    return vote.toUpperCase() as Uppercase<typeof vote>;
  },
};

