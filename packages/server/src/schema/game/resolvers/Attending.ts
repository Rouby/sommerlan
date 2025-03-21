import type { AttendingResolvers } from "./../../types.generated";
export const Attending: Pick<AttendingResolvers, "gamesPlayed" | "__isTypeOf"> =
  {
    gamesPlayed: (parent, _, ctx) => {
      return ctx.data.Game.filter(
        (game) => !!game.partyPeople[parent.partyId]?.includes(parent.userId),
      );
    },
  };
