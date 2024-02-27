import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import { Attending, Party } from "../../../../data";
import type { MutationResolvers } from "./../../../types.generated";

export const removeAttendance: NonNullable<
  MutationResolvers["removeAttendance"]
> = async (_parent, { partyId, userId }, ctx) => {
  const party = await Party.findById(partyId);

  if (!party) {
    throw createGraphQLError("Party not found");
  }

  const attending =
    (await Attending.findByPartyIdAndUserId(
      partyId,
      userId ?? ctx.jwt.user.id
    )) ?? new Attending({ partyId, userId: userId ?? ctx.jwt.user.id });

  ForbiddenError.from(ctx.ability).throwUnlessCan("update", attending, "dates");

  await attending.delete();

  return party;
};
