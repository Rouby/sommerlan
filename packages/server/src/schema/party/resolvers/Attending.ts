import type { AttendingResolvers } from "./../../types.generated";
export const Attending: Pick<
  AttendingResolvers,
  "applicationDate" | "dates" | "id" | "paidDues" | "party" | "room"
> = {
  /* Implement Attending resolver logic here */
  party: async (parent, _arg, ctx) => {
    const party = await ctx.data.Party.findById(parent.partyId);
    return party!;
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
  paidDues: (parent, _, ctx) => {
    if (!ctx.ability.can("read", parent, "paidDues")) {
      return 0;
    }
    return parent.paidDues;
  },
};
