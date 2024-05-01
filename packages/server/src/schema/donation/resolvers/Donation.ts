import type { DonationResolvers } from "./../../types.generated";
export const Donation: DonationResolvers = {
  /* Implement Donation resolver logic here */
  dedication: ({ dedication }) => {
    return dedication.toUpperCase() as Uppercase<typeof dedication>;
  },
  donator: (parent, _args, ctx) => {
    if (!ctx.ability.can("read", parent, "userId")) {
      return null;
    }

    return ctx.data.User.findById(parent.userId);
  },
  party: (parent, _, ctx) => {
    return ctx.data.Party.findByIdOrThrow(parent.partyId);
  },
};
