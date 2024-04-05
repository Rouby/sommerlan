import type { GameResolvers } from "./../../types.generated";

export const Game: GameResolvers = {
  image: (parent) => {
    return parent.imageUrl;
  },
  players: (parent, _, ctx) => {
    return ctx.data.User.filterByIds(
      Object.values(parent.partyPeople)
        .flatMap((ids) => ids ?? [])
        .map((id) => id)
    );
  },
};
