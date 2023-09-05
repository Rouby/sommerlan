import exifr from "exifr";
import { readFile } from "fs/promises";
import { createGraphQLError } from "graphql-yoga";
import { join } from "path";
import { Party } from "../../../data";
import { expectedOrigin, uploadDir } from "../../../env";
import type { PictureResolvers } from "./../../types.generated";

export const Picture: PictureResolvers = {
  party: async (parent) => {
    const party = await Party.findById(parent.partyId);
    if (!party) {
      throw createGraphQLError("Party not found");
    }
    return party;
  },
  tags: (parent) => {
    return parent.tags.map((tag) => ({
      ...tag,
      id: `${parent.partyId}-${tag.userId}`,
      picture: parent,
    }));
  },
  url: (parent) => {
    return `${expectedOrigin}/uploads/${parent.uploadName}`;
  },
  meta: async (parent) => {
    const data = await exifr.parse(
      await readFile(join(uploadDir, parent.uploadName))
    );

    return {
      width: data?.ImageWidth ?? 0,
      height: data?.ImageHeight ?? 0,
      latitude: data?.latitude,
      longitude: data?.longitude,
      altitude: data?.GPSAltitude,
      takeAt: data?.DateTimeOriginal,
    };
  },
};
