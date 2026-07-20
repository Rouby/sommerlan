import * as dayjs from "dayjs";
import type { AttendingResolvers } from "./../../types.generated";
import { calculatePartyCosts } from "../partyCosts";
export const Attending: Pick<
  AttendingResolvers,
  | "applicationDate"
  | "checkIn"
  | "checkOut"
  | "dates"
  | "feedingDues"
  | "id"
  | "notificationSent"
  | "paidDues"
  | "party"
  | "rentDues"
  | "room"
  | "seatNumber"
  | "totalDues"
  | "withPc"
  | "__isTypeOf"
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
    if (!party) return null;
    const attendings = await ctx.data.Attending.filterByPartyId(party.id);
    const donations = await ctx.data.Donation.filterByPartyId(party.id);
    const costs = calculatePartyCosts(party, attendings, donations);
    return costs.duesByAttendingId[parent.id]?.rentDues ?? 0;
  },
  withPc: (parent) => {
    return parent.withPc ?? null;
  },
  seatNumber: (parent) => {
    return parent.seatNumber || null;
  },
  feedingDues: async (parent, _arg, ctx) => {
    const party = await ctx.data.Party.findById(parent.partyId);
    if (!party) return null;
    const attendings = await ctx.data.Attending.filterByPartyId(party.id);
    const donations = await ctx.data.Donation.filterByPartyId(party.id);
    const costs = calculatePartyCosts(party, attendings, donations);
    return costs.duesByAttendingId[parent.id]?.feedingDues ?? 0;
  },
  totalDues: async (parent, _arg, ctx) => {
    const party = await ctx.data.Party.findById(parent.partyId);
    if (!party) return null;
    const attendings = await ctx.data.Attending.filterByPartyId(party.id);
    const donations = await ctx.data.Donation.filterByPartyId(party.id);
    const costs = calculatePartyCosts(party, attendings, donations);
    return costs.duesByAttendingId[parent.id]?.totalDues ?? 0;
  },
};
