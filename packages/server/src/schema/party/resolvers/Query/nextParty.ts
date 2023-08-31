import dayjs from "dayjs";
import { Party } from "../../../../data";
import type { QueryResolvers } from "./../../../types.generated";
export const nextParty: NonNullable<QueryResolvers["nextParty"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  const party = await Party.findLatest();

  if (!party) return null;

  if (dayjs().isAfter(party.endDate, "day")) return null;

  return party;
};
