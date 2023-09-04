import { Attending, Event, Game, User } from "../../../data";
import type { PartyResolvers } from "./../../types.generated";
export const Party: PartyResolvers = {
  attendings: async (parent, _arg, _ctx) => {
    return Attending.filterByPartyId(parent.id);
  },
  gamesPlayed: async (parent) => {
    const games = await Game.filterByPartyId(parent.id);

    return Promise.all(
      games.map(async (game) => ({
        id: `${game.id}-${parent.id}`,
        game,
        party: parent,
        players: await User.filterByIds(game.partyPeople[parent.id] ?? []),
      }))
    );
  },
  locationWidgetSrc: (parent) => {
    return parent.iframeSrc;
  },
  events: (parent) => {
    return Event.filterByPartyId(parent.id);
  }
};
