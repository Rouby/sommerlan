import { User } from "../../../../data";
import type { QueryResolvers } from "./../../../types.generated";
export const me: NonNullable<QueryResolvers["me"]> = async (
  _parent,
  _arg,
  ctx
) => {
  if (!ctx.jwt) return null;

  return User.findById(ctx.jwt.user.id);
};
