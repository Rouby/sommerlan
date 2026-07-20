import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";

export const updateAttending: NonNullable<MutationResolvers['updateAttending']> = async (_parent, { partyId, input }, ctx) => {
  const attending = await ctx.data.Attending.findByPartyIdAndUserId(
    partyId,
    ctx.jwt.user.id,
  );

  if (!attending) {
    throw createGraphQLError("Attending not found");
  }

  ForbiddenError.from(ctx.ability).throwUnlessCan("update", attending);

  if (input.withPc !== undefined) {
    attending.withPc = input.withPc ?? null;
    if (attending.withPc !== true) {
      attending.seatNumber = "";
    }
  }

  if (input.seatNumber !== undefined) {
    attending.seatNumber = input.seatNumber ?? "";
  }

  await attending.save();

  return attending;
};
