import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";
import { getBeerPongMatchOrThrow, propagateBeerPongWinner } from "../../match";

export const updateBeerPongMatch: NonNullable<MutationResolvers['updateBeerPongMatch']> = async (_parent, { input }, ctx) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("update", "BeerPongMatch");

  const match = await getBeerPongMatchOrThrow(ctx, input.matchId);

  if (typeof input.startedAt === "string") {
    match.startedAt = input.startedAt;
  }

  if (input.playerStats) {
    match.playerStats = Object.fromEntries(
      input.playerStats.map((playerStats) => [
        playerStats.userId,
        {
          hits: playerStats.hits,
          edges: playerStats.edges,
          blocks: playerStats.blocks,
          throws: playerStats.throws,
          bounceHits: playerStats.bounceHits,
        },
      ]),
    );
  }

  if (input.teamResults) {
    match.remainingBeers = {
      ...match.remainingBeers,
      ...Object.fromEntries(
        input.teamResults.map((teamResult) => [
          teamResult.teamId,
          Math.max(0, teamResult.remainingBeers),
        ]),
      ),
    };
  }

  if (typeof input.winnerTeamId === "string") {
    match.winnerTeamId = input.winnerTeamId;
  }

  if (input.isFinished) {
    if (!match.winnerTeamId) {
      throw createGraphQLError(
        "Zum Abschließen muss ein Sieger ausgewählt werden.",
      );
    }
    match.endedAt = new Date().toISOString();
  }

  if (!match.startedAt) {
    match.startedAt = new Date().toISOString();
  }

  await match.save();
  await propagateBeerPongWinner(ctx, match.id);

  return getBeerPongMatchOrThrow(ctx, match.id);
};
