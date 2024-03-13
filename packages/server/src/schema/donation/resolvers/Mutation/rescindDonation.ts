import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import { Donation } from "../../../../data";
import type { MutationResolvers } from "./../../../types.generated";

export const rescindDonation: NonNullable<
  MutationResolvers["rescindDonation"]
> = async (_parent, { id }, ctx) => {
  const donation = await Donation.findById(id);

  if (!donation) {
    throw createGraphQLError("Donation not found");
  }

  ForbiddenError.from(ctx.ability).throwUnlessCan("rescind", donation);

  await donation.delete();

  return donation;
};
