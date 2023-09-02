import { createGraphQLError } from "graphql-yoga";
import { Attending, Game } from "../../../../data";
import type { MutationResolvers } from "./../../../types.generated";

export const addGameToParty: NonNullable<
  MutationResolvers["addGameToParty"]
> = async (_parent, { name, partyId }, ctx) => {
  const attending = await Attending.findByPartyIdAndUserId(
    partyId,
    ctx.jwt.user.id
  );

  if (!attending) {
    throw createGraphQLError("You are not attending this party");
  }

  const game = new Game({
    name,
    partyPeople: { [partyId]: [ctx.jwt.user.id] },
  });

  await game.save();

  return {
    game,
    attending,
  };
};
