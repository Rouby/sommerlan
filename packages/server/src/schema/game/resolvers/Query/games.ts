import { ForbiddenError } from "@casl/ability";
import { Game } from "../../../../data";
import type { QueryResolvers } from "./../../../types.generated";

export const games: NonNullable<QueryResolvers["games"]> = async (
  _parent,
  _arg,
  ctx
) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("read", "Game");

  return Game.filter((game) => ctx.ability.can("read", game));
};
