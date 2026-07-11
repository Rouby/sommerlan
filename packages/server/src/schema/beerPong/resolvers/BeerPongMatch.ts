import type { BeerPongMatchResolvers } from "./../../types.generated";

export const BeerPongMatch: BeerPongMatchResolvers = {
  players: async (parent, _, ctx) => {
    const tournament = parent.tournamentId
      ? await ctx.data.BeerPongTournament.findById(parent.tournamentId)
      : null;
    const teamPlayerIds =
      tournament?.teams
        .filter((team) => parent.teamIds.includes(team.id))
        .flatMap((team) => team.playerIds) ?? [];
    const userIds = [...new Set([...Object.keys(parent.playerStats), ...teamPlayerIds])];
    const users = await ctx.data.User.filterByIds(userIds);

    return users.map((user) => ({
      user,
      hits: parent.playerStats[user.id]?.hits ?? 0,
      edges: parent.playerStats[user.id]?.edges ?? 0,
      blocks: parent.playerStats[user.id]?.blocks ?? 0,
      throws: parent.playerStats[user.id]?.throws ?? 0,
      bounceHits: parent.playerStats[user.id]?.bounceHits ?? 0,
    }));
  },
  teams: async (parent, _, ctx) => {
    const tournament = parent.tournamentId
      ? await ctx.data.BeerPongTournament.findById(parent.tournamentId)
      : null;
    const users = await ctx.data.User.all();
    const usersById = new Map<string, (typeof users)[number]>(
      users.map((user) => [String(user.id), user]),
    );
    const teamsById = new Map(
      tournament?.teams.map((team) => [
        team.id,
        {
          ...team,
          players: team.playerIds.flatMap((playerId) => {
            const user = usersById.get(playerId);
            return user ? [user] : [];
          }),
        },
      ]),
    );
    const slotCount = Math.max(parent.slotLabels.length, parent.teamIds.length, 2);

    return Array.from({ length: slotCount }, (_, index) => {
      const teamId = parent.teamIds[index];
      const team = teamId ? teamsById.get(teamId) ?? null : null;

      return {
        team,
        slotLabel: parent.slotLabels[index] ?? team?.name ?? `Team ${index + 1}`,
        remainingBeers: teamId ? parent.remainingBeers[teamId] ?? 0 : 0,
        isWinner: teamId ? parent.winnerTeamId === teamId : false,
      };
    }).filter((team) => team.team || team.slotLabel.length > 0);
  },
  winner: async (parent, _, ctx) => {
    if (!parent.tournamentId || !parent.winnerTeamId) {
      return null;
    }

    const tournament = await ctx.data.BeerPongTournament.findById(parent.tournamentId);
    const team = tournament?.teams.find((entry) => entry.id === parent.winnerTeamId);
    if (!team) {
      return null;
    }

    const users = await ctx.data.User.filterByIds(team.playerIds);
    return {
      ...team,
      players: users,
    };
  },
};
