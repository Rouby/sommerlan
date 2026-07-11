import {
  Avatar,
  Badge,
  Group,
  Paper,
  ScrollArea,
  SimpleGrid,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";

export type BeerPongTournamentPlayer = {
  id: string;
  displayName: string;
  avatar: string;
};

export type BeerPongTournamentTeam = {
  id: string;
  name: string;
  seed: number;
  players: BeerPongTournamentPlayer[];
};

export type BeerPongTournamentMatchPlayer = {
  user: BeerPongTournamentPlayer;
  hits: number;
  edges: number;
  blocks: number;
  throws: number;
  bounceHits: number;
};

export type BeerPongTournamentMatchTeam = {
  team?: BeerPongTournamentTeam | null;
  slotLabel: string;
  remainingBeers: number;
  isWinner: boolean;
};

export type BeerPongTournamentMatch = {
  id: string;
  startedAt: string;
  endedAt?: string | null;
  phase: "GROUP" | "KNOCKOUT" | "EXHIBITION";
  groupName?: string | null;
  round: number;
  matchNumber: number;
  teams: BeerPongTournamentMatchTeam[];
  players: BeerPongTournamentMatchPlayer[];
};

export type BeerPongTournamentStanding = {
  team: BeerPongTournamentTeam;
  rank: number;
  matches: number;
  wins: number;
  losses: number;
  remainingBeers: number;
  remainingBeerDiff: number;
};

export type BeerPongTournamentGroup = {
  name: string;
  teams: BeerPongTournamentStanding[];
  matches: BeerPongTournamentMatch[];
};

export type BeerPongTournamentRound = {
  round: number;
  name: string;
  matches: BeerPongTournamentMatch[];
};

function formatDuration(startedAt: string, endedAt?: string | null) {
  const start = new Date(startedAt).getTime();
  const end = endedAt ? new Date(endedAt).getTime() : Date.now();
  const diffMs = Math.max(0, end - start);
  const minutes = Math.floor(diffMs / 60000);
  const seconds = Math.floor((diffMs % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function MatchSummaryCard({
  match,
}: {
  match: BeerPongTournamentMatch;
}) {
  return (
    <Paper withBorder p="md" radius="md">
      <Stack gap="sm">
        <Group justify="space-between" wrap="wrap">
          <Group gap="xs">
            <Badge size="sm" color={match.endedAt ? "gray" : "green"}>
              {match.endedAt ? "Beendet" : "Läuft"}
            </Badge>
            {match.groupName && (
              <Badge variant="light">Gruppe {match.groupName}</Badge>
            )}
            <Text size="sm" c="dimmed">
              Match #{match.matchNumber}
            </Text>
          </Group>
          <Text size="sm" c="dimmed">
            {formatDuration(match.startedAt, match.endedAt)}
          </Text>
        </Group>
        <Stack gap="xs">
          {match.teams.map((team, index) => (
            <Group
              key={`${match.id}-${index}`}
              justify="space-between"
              wrap="nowrap"
            >
              <Stack gap={2}>
                <Text fw={team.isWinner ? 700 : 500}>{team.slotLabel}</Text>
                {team.team?.players?.length ? (
                  <Group gap="xs">
                    {team.team.players.map((player) => (
                      <Group key={player.id} gap={4} wrap="nowrap">
                        <Avatar src={player.avatar} size="xs" radius="xl" />
                        <Text size="xs" c="dimmed">
                          {player.displayName}
                        </Text>
                      </Group>
                    ))}
                  </Group>
                ) : null}
              </Stack>
              <Group gap="md" wrap="nowrap">
                <Stack gap={0} align="center">
                  <Text size="xs" c="dimmed">
                    Restbiere
                  </Text>
                  <Text fw={700}>{team.remainingBeers}</Text>
                </Stack>
                {team.isWinner && <Badge color="yellow">Sieger</Badge>}
              </Group>
            </Group>
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
}

export function BeerPongGroupsOverview({
  groups,
}: {
  groups: BeerPongTournamentGroup[];
}) {
  if (groups.length === 0) {
    return <Text c="dimmed">Noch keine Gruppen angelegt.</Text>;
  }

  return (
    <SimpleGrid cols={{ base: 1, xl: 2 }} spacing="md">
      {groups.map((group) => (
        <Paper key={group.name} withBorder p="md" radius="md">
          <Stack gap="md">
            <Title order={4}>Gruppe {group.name}</Title>
            <Table striped withTableBorder>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>#</Table.Th>
                  <Table.Th>Team</Table.Th>
                  <Table.Th>Siege</Table.Th>
                  <Table.Th>Niederlagen</Table.Th>
                  <Table.Th>Restbiere</Table.Th>
                  <Table.Th>Differenz</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {group.teams.map((standing) => (
                  <Table.Tr key={standing.team.id}>
                    <Table.Td>{standing.rank}</Table.Td>
                    <Table.Td>
                      <Stack gap={2}>
                        <Text fw={600}>{standing.team.name}</Text>
                        <Group gap="xs">
                          {standing.team.players.map((player) => (
                            <Group key={player.id} gap={4} wrap="nowrap">
                              <Avatar src={player.avatar} size="xs" radius="xl" />
                              <Text size="xs" c="dimmed">
                                {player.displayName}
                              </Text>
                            </Group>
                          ))}
                        </Group>
                      </Stack>
                    </Table.Td>
                    <Table.Td>{standing.wins}</Table.Td>
                    <Table.Td>{standing.losses}</Table.Td>
                    <Table.Td>{standing.remainingBeers}</Table.Td>
                    <Table.Td>{standing.remainingBeerDiff}</Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
            {group.matches.length > 0 ? (
              <Stack gap="sm">
                {group.matches.map((match) => (
                  <MatchSummaryCard key={match.id} match={match} />
                ))}
              </Stack>
            ) : (
              <Text size="sm" c="dimmed">
                Noch keine Gruppenspiele erstellt.
              </Text>
            )}
          </Stack>
        </Paper>
      ))}
    </SimpleGrid>
  );
}

export function BeerPongMatchesOverview({
  matches,
}: {
  matches: BeerPongTournamentMatch[];
}) {
  if (matches.length === 0) {
    return <Text c="dimmed">Noch keine Partien vorhanden.</Text>;
  }

  return (
    <Stack gap="sm">
      {matches.map((match) => (
        <MatchSummaryCard key={match.id} match={match} />
      ))}
    </Stack>
  );
}

export function BeerPongKnockoutOverview({
  rounds,
}: {
  rounds: BeerPongTournamentRound[];
}) {
  if (rounds.length === 0) {
    return <Text c="dimmed">Die K.-o.-Phase wurde noch nicht erzeugt.</Text>;
  }

  return (
    <ScrollArea>
      <Group align="flex-start" wrap="nowrap" gap="lg" pb="sm">
        {rounds.map((round) => (
          <Stack key={round.round} gap="sm" miw={280}>
            <Title order={4}>{round.name}</Title>
            {round.matches.map((match) => (
              <MatchSummaryCard key={match.id} match={match} />
            ))}
          </Stack>
        ))}
      </Group>
    </ScrollArea>
  );
}
