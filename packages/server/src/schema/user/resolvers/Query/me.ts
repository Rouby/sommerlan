import type { QueryResolvers } from "./../../../types.generated";
export const me: NonNullable<QueryResolvers["me"]> = async (
  _parent,
  _arg,
  ctx
) => {
  if (!ctx.jwt) return null;

  return ctx.data.User.findById(ctx.jwt.user.id);
};
