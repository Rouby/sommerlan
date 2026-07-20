import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";
import {
  normalizeBeerPongTeams,
  validateBeerPongTournament,
} from "../../tournament";

export const upsertBeerPongTournament: NonNullable<MutationResolvers['upsertBeerPongTournament']> = async (_parent, { input }, ctx) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan(
    "update",
    "BeerPongTournament",
  );

  const teams = normalizeBeerPongTeams(input.teams);

  try {
    validateBeerPongTournament(teams, input.groupCount, input.knockoutSize);
  } catch (err) {
    throw createGraphQLError(
      err instanceof Error ? err.message : "Ungültiges Bierpong-Turnier.",
    );
  }

  const tournament = input.id
    ? await ctx.data.BeerPongTournament.findById(input.id)
    : null;

  const nextTournament =
    tournament ??
    new ctx.data.BeerPongTournament({
      createdAt: new Date().toISOString(),
    });

  nextTournament.name = input.name.trim();
  nextTournament.groupCount = input.groupCount;
  nextTournament.knockoutSize = input.knockoutSize;
  nextTournament.teams = teams;

  await nextTournament.save();

  return nextTournament;
};
