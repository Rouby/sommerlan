import type { AttendingResolvers } from "./../../types.generated";
export const Attending: AttendingResolvers = {
  party: async (parent, _arg, ctx) => {
    const party = await ctx.data.Party.findById(parent.partyId);
    return party!;
  },
  user: async (parent, _arg, ctx) => {
    const user = await ctx.data.User.findById(parent.userId);
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
  gamesPlayed: (parent, _, ctx) => {
    return ctx.data.Game.filter(
      (game) => !!game.partyPeople[parent.partyId]?.includes(parent.userId),
    );
  },
};
