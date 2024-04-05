import type { EventResolvers } from "./../../types.generated";

export const Event: EventResolvers = {
  date: (parent) => {
    return parent.date || null;
  },
  image: (parent) => {
    return parent.imageUrl;
  },
  organizer: (parent, _, ctx) => {
    return ctx.data.User.findByIdOrThrow(parent.organizerId);
  },
  participants: (parent, _, ctx) => {
    return ctx.data.User.filterByIds(parent.participantIds);
  },
  party: (parent, _, ctx) => {
    return ctx.data.Party.findByIdOrThrow(parent.partyId);
  },
};
