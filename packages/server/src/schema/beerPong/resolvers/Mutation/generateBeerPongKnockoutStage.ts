import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";
import {
  createBeerPongKnockoutMatches,
  getBeerPongStandings,
  getQualifiedBeerPongTeams,
  getTournamentMatches,
} from "../../tournament";

export const generateBeerPongKnockoutStage: NonNullable<
  MutationResolvers["generateBeerPongKnockoutStage"]
> = async (_parent, { tournamentId }, ctx) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan(
    "update",
    "BeerPongTournament",
  );

  const tournament = await ctx.data.BeerPongTournament.findById(tournamentId);
  if (!tournament) {
    throw createGraphQLError(
      `No BeerPongTournament found with id ${tournamentId}`,
    );
  }

  const matches = await ctx.data.BeerPongMatch.all();
  const tournamentMatches = getTournamentMatches(matches, tournament.id);
  const openGroupMatches = tournamentMatches.filter(
    (match) => match.phase === "GROUP" && !match.endedAt,
  );

  if (openGroupMatches.length > 0) {
    throw createGraphQLError("Die Gruppenphase muss abgeschlossen sein.");
  }

  const qualifiedTeams = getQualifiedBeerPongTeams(tournament, matches);
  if (qualifiedTeams.length < tournament.knockoutSize) {
    throw createGraphQLError(
      "Es konnten nicht genug Teams für die K.-o.-Phase ermittelt werden.",
    );
  }

  if (
    getBeerPongStandings(tournament, matches).every(
      (group) => group.matches.length === 0,
    )
  ) {
    throw createGraphQLError(
      "Für die K.-o.-Phase werden erst Gruppenspiele benötigt.",
    );
  }

  for (const match of tournamentMatches.filter(
    (match) => match.phase === "KNOCKOUT",
  )) {
    await match.delete();
  }

  for (const match of createBeerPongKnockoutMatches(tournament, matches)) {
    await match.save();
  }

  return tournament;
};
