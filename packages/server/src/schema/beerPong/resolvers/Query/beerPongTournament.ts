import { ForbiddenError } from "@casl/ability";
import type { QueryResolvers } from "./../../../types.generated";

export const beerPongTournament: NonNullable<QueryResolvers["beerPongTournament"]> =
  async (_parent, _args, ctx) => {
    ForbiddenError.from(ctx.ability).throwUnlessCan("read", "BeerPongTournament");

    return ctx.data.BeerPongTournament.getCurrent();
  };
