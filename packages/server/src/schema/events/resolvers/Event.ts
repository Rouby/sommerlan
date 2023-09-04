import { Party, User } from "../../../data";
import type { EventResolvers } from "./../../types.generated";

export const Event: EventResolvers = {
  date: (parent) => {
    return parent.date || null;
  },
  image: (parent) => {
    return parent.imageUrl;
  },
  organizer: (parent) => {
    return User.findByIdOrThrow(parent.organizerId);
  },
  participants: (parent) => {
    return User.filterByIds(parent.participantIds);
  },
  party: (parent) => {
    return Party.findByIdOrThrow(parent.partyId);
  }
};
