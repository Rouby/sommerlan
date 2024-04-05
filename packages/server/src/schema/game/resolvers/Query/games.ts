import { ForbiddenError } from "@casl/ability";
import type { QueryResolvers } from "./../../../types.generated";

export const games: NonNullable<QueryResolvers["games"]> = async (
  _parent,
  _arg,
  ctx,
) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("read", "Game");

  return ctx.data.Game.filter((game) => ctx.ability.can("read", game));
};
