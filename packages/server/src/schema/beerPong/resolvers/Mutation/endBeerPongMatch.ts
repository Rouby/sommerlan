import { ForbiddenError } from "@casl/ability";
import type { MutationResolvers } from "./../../../types.generated";
import { getBeerPongMatchOrThrow, propagateBeerPongWinner } from "../../match";

export const endBeerPongMatch: NonNullable<MutationResolvers["endBeerPongMatch"]> =
  async (_parent, { matchId, winnerTeamId }, ctx) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("update", "BeerPongMatch");

  const match = await getBeerPongMatchOrThrow(ctx, matchId);

  match.winnerTeamId = winnerTeamId;
  match.endedAt = new Date().toISOString();

  await match.save();
  await propagateBeerPongWinner(ctx, match.id);

  return match;
};
