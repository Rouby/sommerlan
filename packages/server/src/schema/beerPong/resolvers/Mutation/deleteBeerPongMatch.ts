import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";

export const deleteBeerPongMatch: NonNullable<MutationResolvers['deleteBeerPongMatch']> = async (_parent, { matchId }, ctx) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("delete", "BeerPongMatch");

  const match = await ctx.data.BeerPongMatch.findById(matchId);
  if (!match) {
    throw createGraphQLError(`No BeerPongMatch found with id ${matchId}`);
  }

  await match.delete();

  return true;
};
