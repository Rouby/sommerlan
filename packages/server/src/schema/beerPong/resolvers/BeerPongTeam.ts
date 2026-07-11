import type { BeerPongTeamResolvers } from "./../../types.generated";

export const BeerPongTeam: BeerPongTeamResolvers = {
  players: async (parent, _, ctx) => ctx.data.User.filterByIds(parent.playerIds),
};
