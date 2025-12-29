import { ForbiddenError } from "@casl/ability";
import type { MutationResolvers } from "./../../../types.generated";

export const syncCache: NonNullable<MutationResolvers['syncCache']> = async (
  _parent,
  { clear },
  ctx,
) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("update", "Cache");

  await ctx.data.syncCache(clear ?? false);

  return true;
};
