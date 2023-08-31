import { ForbiddenError } from "@casl/ability";
import dayjs from "dayjs";
import { Party } from "../../../../data";
import type { QueryResolvers } from "./../../../types.generated";

export const nextParty: NonNullable<QueryResolvers["nextParty"]> = async (
  _parent,
  _arg,
  ctx
) => {
  const party = await Party.findLatest();

  if (!party) return null;

  ForbiddenError.from(ctx.ability).throwUnlessCan("read", party);

  if (dayjs().isAfter(party.endDate, "day")) return null;

  return party;
};
