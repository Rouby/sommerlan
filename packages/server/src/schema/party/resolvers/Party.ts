import { Attending } from "../../../data";
import type { PartyResolvers } from "./../../types.generated";
export const Party: PartyResolvers = {
  attendings: async (parent, _arg, _ctx) => {
    return Attending.filterByPartyId(parent.id);
  }
};
