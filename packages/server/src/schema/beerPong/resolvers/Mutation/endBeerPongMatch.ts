import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";

export const endBeerPongMatch: NonNullable<MutationResolvers['endBeerPongMatch']> = async (_parent, { matchId }, ctx) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("update", "BeerPongMatch");

  const match = await ctx.data.BeerPongMatch.findById(matchId);
  if (!match) {
    throw createGraphQLError(`No BeerPongMatch found with id ${matchId}`);
  }

  match.endedAt = new Date().toISOString();

  await match.save();

  return match;
};
