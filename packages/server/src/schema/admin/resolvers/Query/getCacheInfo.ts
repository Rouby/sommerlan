import { ForbiddenError } from "@casl/ability";
import type { QueryResolvers } from "./../../../types.generated";
export const getCacheInfo: NonNullable<QueryResolvers['getCacheInfo']> = async (
  _parent,
  _arg,
  ctx,
) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("read", "Cache");

  return ctx.data.getCacheInfo();
};
