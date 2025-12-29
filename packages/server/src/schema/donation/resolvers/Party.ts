import type { PartyResolvers } from "./../../types.generated";
export const Party: Pick<PartyResolvers, 'donations'|'__isTypeOf'> = {
  /* Implement Party resolver logic here */
  donations: (parent, _, ctx) => {
    return ctx.data.Donation.filterByPartyId(parent.id);
  },
};
