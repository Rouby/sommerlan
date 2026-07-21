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
  eventType: (parent) => parent.eventType ?? "STANDARD",
  pricingMode: (parent) => parent.pricingMode ?? null,
  price: (parent) => (parent.price != null ? Number(parent.price) : null),
  servingsUnit: (parent) => parent.servingsUnit ?? "Portionen",
  participantServings: async (parent, _, ctx) => {
    const users = await ctx.data.User.filterByIds(parent.participantIds);
    return users.map((user) => ({
      user,
      servings: parent.participantServings?.[user.id] ?? 1,
    }));
  },
  totalServings: (parent) => {
    return parent.participantIds.reduce((sum, userId) => {
      return sum + (parent.participantServings?.[userId] ?? 1);
    }, 0);
  },
};
