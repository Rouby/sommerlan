import { createGraphQLError } from "graphql-yoga";
import { Donation, Party } from "../../../../data";
import type { MutationResolvers } from "./../../../types.generated";
export const donate: NonNullable<MutationResolvers["donate"]> = async (
  _parent,
  { amount, incognito, dedication },
  ctx
) => {
  const party = await Party.findLatest();

  if (!party) {
    throw createGraphQLError("Party not found");
  }

  const donation = new Donation({
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
