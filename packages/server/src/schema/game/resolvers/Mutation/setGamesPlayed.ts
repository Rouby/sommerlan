import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";

export const setGamesPlayed: NonNullable<
  MutationResolvers["setGamesPlayed"]
> = async (_parent, { partyId, gameIds }, ctx) => {
  const attending = await ctx.data.Attending.findByPartyIdAndUserId(
    partyId,
    ctx.jwt.user.id,
  );

  if (!attending) {
    throw createGraphQLError("You are not attending this party");
  }

  ForbiddenError.from(ctx.ability).throwUnlessCan("update", attending);

  const games = await ctx.data.Game.filter(
    (game) => partyId in game.partyPeople || gameIds.includes(game.id),
  );

  for (const game of games) {
    game.partyPeople[partyId] = game.partyPeople[partyId] ?? [];
    const gamePlayed = gameIds.includes(game.id);
    if (gamePlayed && !game.partyPeople[partyId]?.includes(ctx.jwt.user.id)) {
      game.partyPeople[partyId]?.push(ctx.jwt.user.id);
    }
    if (!gamePlayed && game.partyPeople[partyId]?.includes(ctx.jwt.user.id)) {
      game.partyPeople[partyId] = game.partyPeople[partyId]?.filter(
        (id) => id !== ctx.jwt.user.id,
      );
    }

    await game.save();
  }

  return attending;
};
