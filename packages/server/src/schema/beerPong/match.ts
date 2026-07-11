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
  const losingTeamId = match.teamIds.find(
    (teamId) => teamId && teamId !== match.winnerTeamId,
  );
  const losingTeam = tournament?.teams.find(
    (team) => team.id === losingTeamId,
  );

  if (!nextMatch) {
    if (!match.thirdPlaceMatchId || match.thirdPlaceMatchSlot === null) {
      return match;
    }

    const thirdPlaceMatch = await ctx.data.BeerPongMatch.findById(
      match.thirdPlaceMatchId,
    );
    if (!thirdPlaceMatch) {
      return match;
    }

    const previousTeamId = thirdPlaceMatch.teamIds[match.thirdPlaceMatchSlot];
    thirdPlaceMatch.teamIds = [...thirdPlaceMatch.teamIds];
    thirdPlaceMatch.teamIds[match.thirdPlaceMatchSlot] = losingTeamId ?? "";
    thirdPlaceMatch.slotLabels = [...thirdPlaceMatch.slotLabels];
    thirdPlaceMatch.slotLabels[match.thirdPlaceMatchSlot] =
      losingTeam?.name ?? thirdPlaceMatch.slotLabels[match.thirdPlaceMatchSlot] ?? "";
    if (previousTeamId && previousTeamId !== losingTeamId) {
      delete thirdPlaceMatch.remainingBeers[previousTeamId];
    }
    if (losingTeamId) {
      thirdPlaceMatch.remainingBeers = {
        ...thirdPlaceMatch.remainingBeers,
        [losingTeamId]: thirdPlaceMatch.remainingBeers[losingTeamId] ?? 0,
      };
    }

    await thirdPlaceMatch.save();

    return match;
  }

  const nextPreviousTeamId = nextMatch.teamIds[match.nextMatchSlot];
  nextMatch.teamIds = [...nextMatch.teamIds];
  nextMatch.teamIds[match.nextMatchSlot] = match.winnerTeamId;
  nextMatch.slotLabels = [...nextMatch.slotLabels];
  nextMatch.slotLabels[match.nextMatchSlot] =
    winningTeam?.name ?? nextMatch.slotLabels[match.nextMatchSlot] ?? "";
  if (nextPreviousTeamId && nextPreviousTeamId !== match.winnerTeamId) {
    delete nextMatch.remainingBeers[nextPreviousTeamId];
  }
  nextMatch.remainingBeers = {
    ...nextMatch.remainingBeers,
    [match.winnerTeamId]: nextMatch.remainingBeers[match.winnerTeamId] ?? 0,
  };

  await nextMatch.save();

  if (!match.thirdPlaceMatchId || match.thirdPlaceMatchSlot === null) {
    return match;
  }

  const thirdPlaceMatch = await ctx.data.BeerPongMatch.findById(
    match.thirdPlaceMatchId,
  );
  if (!thirdPlaceMatch) {
    return match;
  }

  const thirdPlacePreviousTeamId =
    thirdPlaceMatch.teamIds[match.thirdPlaceMatchSlot];
  thirdPlaceMatch.teamIds = [...thirdPlaceMatch.teamIds];
  thirdPlaceMatch.teamIds[match.thirdPlaceMatchSlot] = losingTeamId ?? "";
  thirdPlaceMatch.slotLabels = [...thirdPlaceMatch.slotLabels];
  thirdPlaceMatch.slotLabels[match.thirdPlaceMatchSlot] =
    losingTeam?.name ?? thirdPlaceMatch.slotLabels[match.thirdPlaceMatchSlot] ?? "";
  if (
    thirdPlacePreviousTeamId &&
    thirdPlacePreviousTeamId !== losingTeamId
  ) {
    delete thirdPlaceMatch.remainingBeers[thirdPlacePreviousTeamId];
  }
  if (losingTeamId) {
    thirdPlaceMatch.remainingBeers = {
      ...thirdPlaceMatch.remainingBeers,
      [losingTeamId]: thirdPlaceMatch.remainingBeers[losingTeamId] ?? 0,
    };
  }

  await thirdPlaceMatch.save();

  return match;
}
