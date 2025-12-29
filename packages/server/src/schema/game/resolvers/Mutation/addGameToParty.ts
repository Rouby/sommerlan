import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";

export const addGameToParty: NonNullable<MutationResolvers['addGameToParty']> = async (_parent, { name, partyId }, ctx) => {
  const attending = await ctx.data.Attending.findByPartyIdAndUserId(
    partyId,
    ctx.jwt.user.id,
  );

  if (!attending) {
    throw createGraphQLError("You are not attending this party");
  }

  const game = new ctx.data.Game({
    name,
    partyPeople: { [partyId]: [ctx.jwt.user.id] },
  });

  ForbiddenError.from(ctx.ability).throwUnlessCan("create", game);

  await game.save();

  return {
    game,
    attending,
  };
};
