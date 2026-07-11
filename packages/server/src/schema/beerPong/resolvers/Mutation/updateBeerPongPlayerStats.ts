import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";

export const updateBeerPongPlayerStats: NonNullable<MutationResolvers['updateBeerPongPlayerStats']> = async (_parent, { matchId, input }, ctx) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("update", "BeerPongMatch");

  const match = await ctx.data.BeerPongMatch.findById(matchId);
  if (!match) {
    throw createGraphQLError(`No BeerPongMatch found with id ${matchId}`);
  }

  match.playerStats = {
    ...match.playerStats,
    [input.userId]: {
      hits: input.hits,
      edges: input.edges,
      blocks: input.blocks,
    },
  };

  await match.save();

  return match;
};
