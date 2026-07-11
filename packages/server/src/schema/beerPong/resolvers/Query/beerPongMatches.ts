import { ForbiddenError } from "@casl/ability";
import type { QueryResolvers } from "./../../../types.generated";

export const beerPongMatches: NonNullable<QueryResolvers['beerPongMatches']> = async (_parent, _args, ctx) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("read", "BeerPongMatch");

  return ctx.data.BeerPongMatch.all();
};
