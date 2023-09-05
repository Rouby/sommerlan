import { ForbiddenError } from "@casl/ability";
import { randomUUID } from "crypto";
import { existsSync } from "fs";
import { mkdir, writeFile } from "fs/promises";
import { createGraphQLError } from "graphql-yoga";
import { join } from "path";
import { Party, Picture } from "../../../../data";
import { uploadDir } from "../../../../env";
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

  const id = randomUUID();
  const uploadName = `${id}.${file.name.split(".").pop()}`;

  if (!existsSync(uploadDir)) {
    await mkdir(uploadDir, { recursive: true });
  }
  await writeFile(
    join(uploadDir, uploadName),
    Buffer.from(await file.arrayBuffer())
  );

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
