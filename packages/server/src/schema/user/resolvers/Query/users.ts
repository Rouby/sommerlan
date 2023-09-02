import { ForbiddenError } from "@casl/ability";
import { User } from "../../../../data";
import type { QueryResolvers } from "./../../../types.generated";

export const users: NonNullable<QueryResolvers["users"]> = async (
  _parent,
  _arg,
  ctx
) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("read", "User");

  return User.filter((user) => ctx.ability.can("read", user));
};
