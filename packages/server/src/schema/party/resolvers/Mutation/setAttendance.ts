import { Attending } from "../../../../data";
import type { MutationResolvers } from "./../../../types.generated";

export const setAttendance: NonNullable<
  MutationResolvers["setAttendance"]
> = async (_parent, { partyId, dates }, ctx) => {
  const attending =
    (await Attending.findByPartyIdAndUserId(partyId, ctx.jwt.sub)) ??
    new Attending({ partyId, userId: ctx.jwt.sub });

  attending.dates = dates.map((date) =>
    typeof date === "string" ? date : date.toISOString().substring(0, 10)
  );

  await attending.save();

  return attending;
};
