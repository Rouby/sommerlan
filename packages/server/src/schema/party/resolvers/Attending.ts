import * as dayjs from "dayjs";
import type { AttendingResolvers } from "./../../types.generated";
export const Attending: Pick<AttendingResolvers, 'applicationDate'|'checkIn'|'checkOut'|'dates'|'id'|'notificationSent'|'paidDues'|'party'|'rentDues'|'room'|'__isTypeOf'> = {
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
  dates: (parent) => {
    return parent.dates.sort((a, b) => dayjs(a).diff(dayjs(b)));
  },
  notificationSent: (parent, _arg, ctx) => {
    if (!ctx.ability.can("read", parent, "paidDues")) {
      return null;
    }
    return parent.notificationSent;
  },
  rentDues: async (parent, _arg, ctx) => {
    const party = await ctx.data.Party.findById(parent.partyId);

    if (!party?.finalCostPerDay) {
      return null;
    }

    return parent.rentDues(party.finalCostPerDay);
  }
};
