import { ForbiddenError } from "@casl/ability";
import type { QueryResolvers } from "./../../../types.generated";

export const users: NonNullable<QueryResolvers['users']> = async (
  _parent,
  _arg,
  ctx,
) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("read", "User");

  return ctx.data.User.filter((user) => ctx.ability.can("read", user));
};
