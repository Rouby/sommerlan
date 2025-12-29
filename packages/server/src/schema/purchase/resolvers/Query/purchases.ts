import { ForbiddenError } from "@casl/ability";
import type { QueryResolvers } from "./../../../types.generated";

export const purchases: NonNullable<QueryResolvers['purchases']> = async (
  _parent,
  _arg,
  ctx,
) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("read", "Purchase");

  return ctx.data.Purchase.filter((purchase) =>
    ctx.ability.can("read", purchase),
  ) as any;
};
