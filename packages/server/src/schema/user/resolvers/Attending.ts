import { Game, Party, User } from "../../../data";
import type { AttendingResolvers } from "./../../types.generated";
export const Attending: AttendingResolvers = {
  party: async (parent, _arg, _ctx) => {
    const party = await Party.findById(parent.partyId);
    return party!;
  },
  user: async (parent, _arg, _ctx) => {
    const user = await User.findById(parent.userId);
    return user!;
  },
  room: ({ room }) => {
    switch (room) {
      case "granted":
        return "GRANTED";
      case "requested":
        return "REQUESTED";
      default:
        return null;
    }
  },
  gamesPlayed: (parent) => {
    return Game.filter(
      (game) => !!game.partyPeople[parent.partyId]?.includes(parent.userId)
    );
  }
};
