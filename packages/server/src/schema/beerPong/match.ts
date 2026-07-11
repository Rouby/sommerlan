import { createGraphQLError } from "graphql-yoga";
import { type Context } from "../context";
import { BeerPongMatchPhase } from "../../data/beerPongMatches";

export async function getBeerPongMatchOrThrow(ctx: Context, matchId: string) {
  const match = await ctx.data.BeerPongMatch.findById(matchId);
  if (!match) {
    throw createGraphQLError(`No BeerPongMatch found with id ${matchId}`);
  }

  return match;
}

export async function propagateBeerPongWinner(ctx: Context, matchId: string) {
  const match = await getBeerPongMatchOrThrow(ctx, matchId);

  if (
    match.phase !== BeerPongMatchPhase.Knockout ||
    !match.winnerTeamId ||
    !match.nextMatchId ||
    match.nextMatchSlot === null
  ) {
    return match;
  }

  const nextMatch = await ctx.data.BeerPongMatch.findById(match.nextMatchId);
  const tournament = match.tournamentId
    ? await ctx.data.BeerPongTournament.findById(match.tournamentId)
    : null;
  const winningTeam = tournament?.teams.find(
    (team) => team.id === match.winnerTeamId,
  );

  if (!nextMatch) {
    return match;
  }

  const previousTeamId = nextMatch.teamIds[match.nextMatchSlot];
  nextMatch.teamIds = [...nextMatch.teamIds];
  nextMatch.teamIds[match.nextMatchSlot] = match.winnerTeamId;
  nextMatch.slotLabels = [...nextMatch.slotLabels];
  nextMatch.slotLabels[match.nextMatchSlot] =
    winningTeam?.name ?? nextMatch.slotLabels[match.nextMatchSlot] ?? "";
  if (previousTeamId && previousTeamId !== match.winnerTeamId) {
    delete nextMatch.remainingBeers[previousTeamId];
  }
  nextMatch.remainingBeers = {
    ...nextMatch.remainingBeers,
    [match.winnerTeamId]: nextMatch.remainingBeers[match.winnerTeamId] ?? 0,
  };

  await nextMatch.save();

  return match;
}
