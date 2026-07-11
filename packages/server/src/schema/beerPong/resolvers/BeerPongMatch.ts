import type { BeerPongMatchResolvers } from "./../../types.generated";

export const BeerPongMatch: BeerPongMatchResolvers = {
  players: async (parent, _, ctx) => {
    const userIds = Object.keys(parent.playerStats);
    const users = await ctx.data.User.filterByIds(userIds);

    return users.map((user) => ({
      user,
      hits: parent.playerStats[user.id]?.hits ?? 0,
      edges: parent.playerStats[user.id]?.edges ?? 0,
      blocks: parent.playerStats[user.id]?.blocks ?? 0,
    }));
  },
};
