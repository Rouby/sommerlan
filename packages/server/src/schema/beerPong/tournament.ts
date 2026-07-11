import { randomUUID } from "crypto";
import {
  BeerPongMatch,
  BeerPongTournament,
  type BeerPongTournamentTeam,
} from "../../data";
import { BeerPongMatchPhase } from "../../data/beerPongMatches";

export type BeerPongGroupStandingRow = {
  groupName: string;
  team: BeerPongTournamentTeam;
  matches: number;
  wins: number;
  losses: number;
  remainingBeers: number;
  remainingBeerDiff: number;
  rank: number;
};

export function normalizeBeerPongTeams(
  teams: Array<{
    id?: string | null;
    name: string;
    playerIds: string[];
  }>,
) {
  return teams.map((team, index) => ({
    id: team.id?.trim() || randomUUID(),
    name: team.name.trim(),
    playerIds: [...new Set(team.playerIds)],
    seed: index + 1,
  }));
}

export function getBeerPongTournamentGroups(
  tournament: Pick<BeerPongTournament, "teams" | "groupCount">,
) {
  const teams = [...tournament.teams].sort((a, b) => a.seed - b.seed);
  const groups = Array.from({ length: tournament.groupCount }, (_, index) => ({
    name: String.fromCharCode(65 + index),
    teams: [] as BeerPongTournamentTeam[],
  }));

  teams.forEach((team, index) => {
    const offset = index % tournament.groupCount;
    const row = Math.floor(index / tournament.groupCount);
    const groupIndex =
      row % 2 === 0 ? offset : tournament.groupCount - offset - 1;
    groups[groupIndex]?.teams.push(team);
  });

  return groups;
}

export function createBeerPongGroupMatches(
  tournament: BeerPongTournament,
) {
  const groups = getBeerPongTournamentGroups(tournament);
  let matchNumber = 1;

  return groups.flatMap((group) =>
    group.teams.flatMap((team, index) =>
      group.teams.slice(index + 1).map(
        (opponent) =>
          new BeerPongMatch({
            tournamentId: tournament.id,
            phase: BeerPongMatchPhase.Group,
            groupName: group.name,
            round: 1,
            matchNumber: matchNumber++,
            teamIds: [team.id, opponent.id],
            slotLabels: [team.name, opponent.name],
            remainingBeers: {
              [team.id]: 0,
              [opponent.id]: 0,
            },
          }),
      ),
    ),
  );
}

export function getTournamentMatches(
  matches: BeerPongMatch[],
  tournamentId: string,
) {
  return matches
    .filter((match) => match.tournamentId === tournamentId)
    .sort((a, b) => {
      const phaseOrder =
        a.phase === b.phase
          ? 0
          : a.phase === BeerPongMatchPhase.Group
            ? -1
            : 1;

      return (
        phaseOrder ||
        (a.groupName ?? "").localeCompare(b.groupName ?? "") ||
        a.round - b.round ||
        a.matchNumber - b.matchNumber
      );
    });
}

export function getBeerPongStandings(
  tournament: BeerPongTournament,
  matches: BeerPongMatch[],
) {
  const tournamentMatches = getTournamentMatches(matches, tournament.id).filter(
    (match) => match.phase === BeerPongMatchPhase.Group,
  );
  const groups = getBeerPongTournamentGroups(tournament);

  return groups.map((group) => {
    const standings = group.teams.map((team) => ({
      groupName: group.name,
      team,
      matches: 0,
      wins: 0,
      losses: 0,
      remainingBeers: 0,
      remainingBeerDiff: 0,
      rank: 0,
    }));
    const standingsByTeamId = new Map(standings.map((row) => [row.team.id, row]));
    const groupMatches = tournamentMatches.filter(
      (match) => match.groupName === group.name,
    );

    for (const match of groupMatches) {
      if (!match.winnerTeamId || !match.endedAt || match.teamIds.length !== 2) {
        continue;
      }

      const [teamAId, teamBId] = match.teamIds;
      const teamARow = standingsByTeamId.get(teamAId);
      const teamBRow = standingsByTeamId.get(teamBId);
      if (!teamARow || !teamBRow) {
        continue;
      }

      const teamABeers = match.remainingBeers[teamAId] ?? 0;
      const teamBBeers = match.remainingBeers[teamBId] ?? 0;

      teamARow.matches += 1;
      teamBRow.matches += 1;
      teamARow.remainingBeers += teamABeers;
      teamBRow.remainingBeers += teamBBeers;
      teamARow.remainingBeerDiff += teamABeers - teamBBeers;
      teamBRow.remainingBeerDiff += teamBBeers - teamABeers;

      if (match.winnerTeamId === teamAId) {
        teamARow.wins += 1;
        teamBRow.losses += 1;
      } else if (match.winnerTeamId === teamBId) {
        teamBRow.wins += 1;
        teamARow.losses += 1;
      }
    }

    standings.sort((a, b) => {
      return (
        b.wins - a.wins ||
        b.remainingBeers - a.remainingBeers ||
        b.remainingBeerDiff - a.remainingBeerDiff ||
        a.team.seed - b.team.seed
      );
    });
    standings.forEach((standing, index) => {
      standing.rank = index + 1;
    });

    return {
      name: group.name,
      teams: standings,
      matches: groupMatches,
    };
  });
}

export function getQualifiedBeerPongTeams(
  tournament: BeerPongTournament,
  matches: BeerPongMatch[],
) {
  const standings = getBeerPongStandings(tournament, matches);
  const qualified: BeerPongGroupStandingRow[] = [];
  let rank = 1;

  while (qualified.length < tournament.knockoutSize) {
    const round = standings
      .map((group) => group.teams.find((team) => team.rank === rank))
      .filter((team): team is BeerPongGroupStandingRow => Boolean(team))
      .sort((a, b) => {
        return (
          b.wins - a.wins ||
          b.remainingBeers - a.remainingBeers ||
          b.remainingBeerDiff - a.remainingBeerDiff ||
          a.team.seed - b.team.seed
        );
      });

    if (round.length === 0) {
      break;
    }

    qualified.push(...round);
    rank += 1;
  }

  return qualified.slice(0, tournament.knockoutSize);
}

function buildFirstRoundPairings(
  qualified: BeerPongGroupStandingRow[],
) {
  const buckets = new Map<string, BeerPongGroupStandingRow[]>();

  for (const team of qualified) {
    const groupTeams = buckets.get(team.groupName) ?? [];
    groupTeams.push(team);
    buckets.set(team.groupName, groupTeams);
  }

  const pairings: Array<[BeerPongGroupStandingRow, BeerPongGroupStandingRow]> = [];

  while (pairings.length * 2 < qualified.length) {
    const groups = [...buckets.entries()]
      .filter(([, teams]) => teams.length > 0)
      .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

    if (groups.length === 0) {
      break;
    }

    const [homeGroupName, homeGroupTeams] = groups[0]!;
    const awayGroup = groups.find(([groupName]) => groupName !== homeGroupName);

    if (!awayGroup) {
      const home = homeGroupTeams.shift();
      const away = homeGroupTeams.shift();
      if (!home || !away) {
        break;
      }

      pairings.push([home, away]);
      continue;
    }

    const home = homeGroupTeams.shift();
    const away = awayGroup[1].shift();
    if (!home || !away) {
      break;
    }

    pairings.push([home, away]);
  }

  return pairings;
}

function getKnockoutRoundName(round: number, totalRounds: number) {
  const roundsRemaining = totalRounds - round + 1;

  if (roundsRemaining === 1) return "Finale";
  if (roundsRemaining === 2) return "Halbfinale";
  if (roundsRemaining === 3) return "Viertelfinale";
  return `Runde ${round}`;
}

export function createBeerPongKnockoutMatches(
  tournament: BeerPongTournament,
  matches: BeerPongMatch[],
) {
  const qualified = getQualifiedBeerPongTeams(tournament, matches);
  const totalRounds = Math.log2(qualified.length);
  const rounds = Array.from({ length: totalRounds }, () => [] as BeerPongMatch[]);
  const firstRoundPairings = buildFirstRoundPairings(qualified);
  let matchNumber =
    getTournamentMatches(matches, tournament.id).reduce(
      (current, match) => Math.max(current, match.matchNumber),
      0,
    ) + 1;

  for (let round = 1; round <= totalRounds; round += 1) {
    const matchCount = qualified.length / 2 ** round;

    for (let matchIndex = 0; matchIndex < matchCount; matchIndex += 1) {
      const match = new BeerPongMatch({
        tournamentId: tournament.id,
        phase: BeerPongMatchPhase.Knockout,
        round,
        matchNumber: matchNumber++,
        teamIds: ["", ""],
        slotLabels: ["", ""],
        remainingBeers: {},
      });

      if (round === 1) {
        const [home, away] = firstRoundPairings[matchIndex] ?? [];
        if (!home || !away) {
          throw new Error("Ungültige Paarung für die erste K.-o.-Runde.");
        }

        match.teamIds = [home.team.id, away.team.id];
        match.slotLabels = [home.team.name, away.team.name];
        match.remainingBeers = {
          [home.team.id]: 0,
          [away.team.id]: 0,
        };
      } else {
        const previousRound = rounds[round - 2]!;
        const sourceA = previousRound[matchIndex * 2]!;
        const sourceB = previousRound[matchIndex * 2 + 1]!;
        match.slotLabels = [
          `Sieger ${getKnockoutRoundName(sourceA.round, totalRounds)} ${matchIndex * 2 + 1}`,
          `Sieger ${getKnockoutRoundName(sourceB.round, totalRounds)} ${matchIndex * 2 + 2}`,
        ];
      }

      rounds[round - 1]!.push(match);
    }
  }

  rounds.forEach((roundMatches, roundIndex) => {
    const nextRound = rounds[roundIndex + 1];
    if (!nextRound) return;

    roundMatches.forEach((match, matchIndex) => {
      match.nextMatchId = nextRound[Math.floor(matchIndex / 2)]?.id ?? null;
      match.nextMatchSlot = matchIndex % 2;
    });
  });

  return rounds.flat();
}

export function getKnockoutRounds(
  tournament: BeerPongTournament,
  matches: BeerPongMatch[],
) {
  const knockoutMatches = getTournamentMatches(matches, tournament.id).filter(
    (match) => match.phase === BeerPongMatchPhase.Knockout,
  );

  const maxRound = knockoutMatches.reduce(
    (current, match) => Math.max(current, match.round),
    0,
  );

  return Array.from({ length: maxRound }, (_, index) => ({
    round: index + 1,
    name: getKnockoutRoundName(index + 1, maxRound),
    matches: knockoutMatches.filter((match) => match.round === index + 1),
  }));
}

export function validateBeerPongTournament(
  teams: BeerPongTournamentTeam[],
  groupCount: number,
  knockoutSize: number,
) {
  if (teams.length < 2) {
    throw new Error("Mindestens zwei Teams werden benötigt.");
  }

  if (teams.some((team) => team.name.length === 0)) {
    throw new Error("Jedes Team braucht einen Namen.");
  }

  if (
    teams.some(
      (team) =>
        team.playerIds.length !== 2 || new Set(team.playerIds).size !== 2,
    )
  ) {
    throw new Error("Jedes Team muss aus genau zwei verschiedenen Spielern bestehen.");
  }

  const allPlayers = teams.flatMap((team) => team.playerIds);
  if (new Set(allPlayers).size !== allPlayers.length) {
    throw new Error("Ein Spieler darf nur in einem Team eingetragen sein.");
  }

  if (groupCount < 1 || groupCount > Math.floor(teams.length / 2)) {
    throw new Error("Die Anzahl der Gruppen passt nicht zur Teamanzahl.");
  }

  if (
    knockoutSize < 2 ||
    knockoutSize > teams.length ||
    knockoutSize < groupCount ||
    Math.log2(knockoutSize) % 1 !== 0
  ) {
    throw new Error("Die K.-o.-Phase muss eine Zweierpotenz sein und zu den Gruppen passen.");
  }
}
