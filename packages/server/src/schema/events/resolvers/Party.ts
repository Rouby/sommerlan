import type { PartyResolvers } from "./../../types.generated";
export const Party: Pick<PartyResolvers, "events"> = {
  /* Implement Party resolver logic here */
  events: (parent, _, ctx) => {
    return ctx.data.Event.filterByPartyId(parent.id);
  },
};