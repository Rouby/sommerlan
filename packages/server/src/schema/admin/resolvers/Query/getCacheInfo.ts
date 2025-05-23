import type { QueryResolvers } from "./../../../types.generated";
export const getCacheInfo: NonNullable<QueryResolvers["getCacheInfo"]> = async (
  _parent,
  _arg,
  ctx,
) => {
  return ctx.data.getCacheInfo();
};
