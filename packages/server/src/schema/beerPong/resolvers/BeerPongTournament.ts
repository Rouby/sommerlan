import type { BeerPongTournamentResolvers } from "./../../types.generated";
import {
  getBeerPongStandings,
  getKnockoutRounds,
  getTournamentMatches,
} from "../tournament";

export const BeerPongTournament: BeerPongTournamentResolvers = {
  matches: async (parent, _, ctx) =>
    getTournamentMatches(await ctx.data.BeerPongMatch.all(), parent.id),
  groups: async (parent, _, ctx) => {
    const users = await ctx.data.User.all();
    const usersById = new Map<string, (typeof users)[number]>(
      users.map((user) => [String(user.id), user]),
    );
    const teamsById = new Map(
      parent.teams.map((team) => [
        team.id,
        {
          ...team,
          players: team.playerIds.flatMap((playerId) => {
            const user = usersById.get(playerId);
            return user ? [user] : [];
          }),
        },
      ]),
    );

    return getBeerPongStandings(parent, await ctx.data.BeerPongMatch.all()).map(
      (group) => ({
        ...group,
        teams: group.teams.map((standing) => ({
          ...standing,
          team: teamsById.get(standing.team.id) ?? {
            ...standing.team,
            players: [],
          },
        })),
      }),
    );
  },
  knockout: async (parent, _, ctx) =>
    getKnockoutRounds(parent, await ctx.data.BeerPongMatch.all()),
  teams: async ({ teams }, _arg, ctx) => {
    const users = await ctx.data.User.all();
    const usersById = new Map<string, (typeof users)[number]>(
      users.map((user) => [String(user.id), user]),
    );
    return teams.map((team) => ({
      ...team,
      players: team.playerIds.flatMap((playerId) => {
        const user = usersById.get(playerId);
        return user ? [user] : [];
      }),
    }));
  },
};
