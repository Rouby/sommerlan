import { ForbiddenError } from "@casl/ability";
import { syncCache as syncDataCache } from "../../../../data";
import type { MutationResolvers } from "./../../../types.generated";

export const syncCache: NonNullable<MutationResolvers["syncCache"]> = async (
  _parent,
  { clear },
  ctx
) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("update", "Cache");

  await syncDataCache(clear ?? false);

  return true;
};
