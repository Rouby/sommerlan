import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import { Party, Picture } from "../../../../data";
import { storeFile } from "../../../../storeFile";
import type { MutationResolvers } from "./../../../types.generated";

export const addPicture: NonNullable<MutationResolvers["addPicture"]> = async (
  _parent,
  { input: { partyId, name, file, tags } },
  ctx
) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("create", "Picture");

  const party = await Party.findById(partyId);

  if (!party) {
    throw createGraphQLError("Party not found");
  }

  const { id, uploadName } = await storeFile(file);

  const picture = new Picture({
    id,
    name,
    uploadName,
    partyId,
    uploaderId: ctx.jwt.user.id,
    tags: tags ?? [],
  });

  await picture.save();

  return picture;
};
