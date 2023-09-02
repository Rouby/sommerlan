import { Game } from "../../../../data";
import type { QueryResolvers } from "./../../../types.generated";

export const games: NonNullable<QueryResolvers["games"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  return Game.all();
};
