import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import { Attending, Party } from "../../../../data";
import type { MutationResolvers } from "./../../../types.generated";

export const setAttendance: NonNullable<
  MutationResolvers["setAttendance"]
> = async (_parent, { partyId, userId, dates }, ctx) => {
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

  attending.dates = dates.map((date) =>
    typeof date === "string" ? date : date.toISOString().substring(0, 10)
  );

  await attending.save();

  return party;
};
