import { ForbiddenError } from "@casl/ability";
import { Party } from "../../../../data";
import type { QueryResolvers } from "./../../../types.generated";

export const parties: NonNullable<QueryResolvers["parties"]> = async (
  _parent,
  _arg,
  ctx
) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("read", "Party");

  return Party.filter((party) => ctx.ability.can("read", party));
};
