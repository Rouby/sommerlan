import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";
import { createBeerPongGroupMatches } from "../../tournament";

export const generateBeerPongGroupStage: NonNullable<
  MutationResolvers["generateBeerPongGroupStage"]
> = async (_parent, { tournamentId }, ctx) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("update", "BeerPongTournament");

  const tournament = await ctx.data.BeerPongTournament.findById(tournamentId);
  if (!tournament) {
    throw createGraphQLError(`No BeerPongTournament found with id ${tournamentId}`);
  }

  const matches = (await ctx.data.BeerPongMatch.all()).filter(
    (match) => match.tournamentId === tournament.id,
  );
  for (const match of matches) {
    await match.delete();
  }

  for (const match of createBeerPongGroupMatches(tournament)) {
    await match.save();
  }

  return tournament;
};
