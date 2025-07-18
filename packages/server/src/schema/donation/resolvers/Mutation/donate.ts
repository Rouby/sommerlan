import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";
export const donate: NonNullable<MutationResolvers["donate"]> = async (
  _parent,
  { amount, incognito, dedication },
  ctx,
) => {
  const party =
    (await ctx.data.Party.findCurrentParty()) ||
    (await ctx.data.Party.findLatestParty());

  if (!party) {
    throw createGraphQLError("Party not found");
  }

  const donation = new ctx.data.Donation({
    userId: ctx.jwt.user.id,
    incognito: incognito ?? false,
    amount,
    dedication: (dedication ?? "RENT").toLowerCase() as Lowercase<
      NonNullable<typeof dedication>
    >,
    partyId: party.id,
  });

  await donation.save();

  return donation;
};
