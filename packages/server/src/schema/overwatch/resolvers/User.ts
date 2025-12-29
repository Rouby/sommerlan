import { getUserLocations } from "../../../services";
import type { UserResolvers } from "./../../types.generated";
export const User: Pick<UserResolvers, 'lastKnownLocation'|'locations'|'__isTypeOf'> = {
  /* Implement User resolver logic here */
  lastKnownLocation: async (parent, _arg, ctx) => {
    if (!ctx.ability.can("read", parent, "location")) {
      return null;
    }
    return getUserLocations(parent.id).at(-1);
  },
  locations: async (parent, _arg, ctx) => {
    if (!ctx.ability.can("read", parent, "location")) {
      return [];
    }
    return getUserLocations(parent.id);
  },
};
