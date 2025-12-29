import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import { storeFile } from "../../../../storeFile";
import type { MutationResolvers } from "./../../../types.generated";
export const updateGame: NonNullable<MutationResolvers['updateGame']> = async (
  _parent,
  { input: { id, image } },
  ctx,
) => {
  const game = await ctx.data.Game.findById(id);

  if (!game) {
    throw createGraphQLError("Game not found");
  }

  ForbiddenError.from(ctx.ability).throwUnlessCan("update", game);

  const { url } = await storeFile(image);
  game.imageUrl = url;

  await game.save();

  return game;
};
