import { ForbiddenError } from "@casl/ability";
import type { QueryResolvers } from "./../../../types.generated";

export const party: NonNullable<QueryResolvers['party']> = async (
  _parent,
  { id },
  ctx,
) => {
  const party = await ctx.data.Party.findById(id);

  if (!party) return null;

  ForbiddenError.from(ctx.ability).throwUnlessCan("read", party);

  return party;
};
