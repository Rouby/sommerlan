import { ForbiddenError } from "@casl/ability";
import type { QueryResolvers } from "./../../../types.generated";

export const parties: NonNullable<QueryResolvers['parties']> = async (
  _parent,
  _arg,
  ctx,
) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("read", "Party");

  const visibleParties = await ctx.data.Party.filter((party) =>
    ctx.ability.can("read", party),
  );

  return visibleParties.sort((a, b) => (a.startDate < b.startDate ? 1 : -1));
};
