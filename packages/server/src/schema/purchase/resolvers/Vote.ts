import type { VoteResolvers } from "./../../types.generated";

export const Vote: VoteResolvers = {
  purchase: (parent) => {
    return parent.purchase;
  },
  
  user: (parent) => {
    return parent.user;
  },
  
  vote: ({ vote }) => {
    return vote.toUpperCase() as Uppercase<typeof vote>;
  },
};
