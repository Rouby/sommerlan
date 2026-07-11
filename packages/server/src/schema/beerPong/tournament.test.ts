import { describe, expect, it } from "vitest";
import { BeerPongTournament } from "../../data";
import {
  createBeerPongKnockoutMatches,
  getBeerPongTournamentGroups,
  getKnockoutRounds,
} from "./tournament";

function createTournament() {
  return new BeerPongTournament({
    id: "tournament-1-1-1-1",
    groupCount: 3,
    knockoutSize: 4,
    teams: [
      { id: "team-1", name: "Team 1", playerIds: ["a", "b"], seed: 1 },
      { id: "team-2", name: "Team 2", playerIds: ["c", "d"], seed: 2 },
      { id: "team-3", name: "Team 3", playerIds: ["e", "f"], seed: 3 },
      { id: "team-4", name: "Team 4", playerIds: ["g", "h"], seed: 4 },
      { id: "team-5", name: "Team 5", playerIds: ["i", "j"], seed: 5 },
      { id: "team-6", name: "Team 6", playerIds: ["k", "l"], seed: 6 },
    ],
  });
}

describe("createBeerPongKnockoutMatches", () => {
  it("pairs first-round matches from different groups when possible", () => {
    const tournament = createTournament();
    const groupsByTeamId = new Map(
      getBeerPongTournamentGroups(tournament).flatMap((group) =>
        group.teams.map((team) => [team.id, group.name] as const),
      ),
    );

    const matches = createBeerPongKnockoutMatches(tournament, []);
    const firstRoundMatches = matches.filter((match) => match.round === 1);

    expect(firstRoundMatches).toHaveLength(2);
    for (const match of firstRoundMatches) {
      const [homeId, awayId] = match.teamIds;
      expect(groupsByTeamId.get(homeId)).not.toBe(groupsByTeamId.get(awayId));
    }
  });

  it("creates a third-place match for semifinal losers", () => {
    const tournament = createTournament();

    const matches = createBeerPongKnockoutMatches(tournament, []);
    const thirdPlaceMatches = matches.filter((match) => match.isThirdPlaceMatch);

    expect(thirdPlaceMatches).toHaveLength(1);
    expect(thirdPlaceMatches[0]?.slotLabels).toEqual([
      "Verlierer Halbfinale 1",
      "Verlierer Halbfinale 2",
    ]);

    const semifinalMatches = matches.filter((match) => match.round === 1);
    expect(semifinalMatches).toHaveLength(2);
    semifinalMatches.forEach((match, index) => {
      expect(match.thirdPlaceMatchId).toBe(thirdPlaceMatches[0]?.id);
      expect(match.thirdPlaceMatchSlot).toBe(index);
    });

    const rounds = getKnockoutRounds(tournament, matches);
    expect(rounds).toHaveLength(3);
    expect(rounds[2]?.name).toBe("Spiel um Platz 3");
    expect(rounds[2]?.matches).toHaveLength(1);
  });
});
