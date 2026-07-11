import type { BeerPongTournamentResolvers } from "./../../types.generated";
import { getBeerPongStandings, getKnockoutRounds, getTournamentMatches } from "../tournament";

export const BeerPongTournament: BeerPongTournamentResolvers = {
  matches: async (parent, _, ctx) =>
    getTournamentMatches(await ctx.data.BeerPongMatch.all(), parent.id),
  groups: async (parent, _, ctx) =>
    getBeerPongStandings(parent, await ctx.data.BeerPongMatch.all()),
  knockout: async (parent, _, ctx) =>
    getKnockoutRounds(parent, await ctx.data.BeerPongMatch.all()),
};
