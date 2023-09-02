import { User } from "../../../data";
import type { GameResolvers } from "./../../types.generated";

export const Game: GameResolvers = {
  image: (parent) => {
    return parent.imageUrl;
  },
  players: (parent) => {
    return User.filterByIds(
      Object.values(parent.partyPeople)
        .flatMap((ids) => ids ?? [])
        .map((id) => id)
    );
  }
};
