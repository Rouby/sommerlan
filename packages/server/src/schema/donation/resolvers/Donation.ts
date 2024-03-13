import { Party, User } from "../../../data";
import type { DonationResolvers } from "./../../types.generated";
export const Donation: DonationResolvers = {
  /* Implement Donation resolver logic here */
  dedication: ({ dedication }) => {
    return dedication.toUpperCase() as Uppercase<typeof dedication>;
  },
  donator: (parent, _args, ctx) => {
    if (parent.incognito && ctx.jwt.user.id !== parent.userId) {
      return null;
    }
    return User.findById(parent.userId);
  },
  party: (parent) => {
    return Party.findByIdOrThrow(parent.partyId);
  }
};
