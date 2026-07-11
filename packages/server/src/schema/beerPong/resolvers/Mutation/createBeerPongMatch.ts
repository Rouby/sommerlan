import { ForbiddenError } from "@casl/ability";
import type { MutationResolvers } from "./../../../types.generated";

export const createBeerPongMatch: NonNullable<MutationResolvers['createBeerPongMatch']> = async (_parent, { playerIds }, ctx) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("create", "BeerPongMatch");

  const match = new ctx.data.BeerPongMatch({
    startedAt: new Date().toISOString(),
    playerStats: Object.fromEntries(
      playerIds.map((id) => [id, { hits: 0, edges: 0, blocks: 0, throws: 0, bounceHits: 0 }]),
    ),
  });

  await match.save();

  return match;
};
