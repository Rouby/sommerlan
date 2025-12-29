import { ForbiddenError } from "@casl/ability";
import type { QueryResolvers } from "./../../../types.generated";
// @ts-ignore
import dayjs = require("dayjs");

export const nextParty: NonNullable<QueryResolvers['nextParty']> = async (
  _parent,
  _arg,
  ctx,
) => {
  const party =
    (await ctx.data.Party.findCurrentParty()) ||
    (await ctx.data.Party.findLatestParty());

  if (!party) return null;

  ForbiddenError.from(ctx.ability).throwUnlessCan("read", party);

  if (dayjs().isAfter(party.endDate, "day")) return null;

  return party;
};
