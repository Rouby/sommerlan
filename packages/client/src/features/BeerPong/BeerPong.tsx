import {
  Avatar,
  Badge,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Table,
  Tabs,
  Text,
  Title,
} from "@mantine/core";
import { IconMedal, IconTable } from "@tabler/icons-react";
import { useQuery } from "urql";
import { graphql } from "../../gql";

const BeerPongMatchesQuery = graphql(`
  query beerPongMatchesPublic {
    beerPongMatches {
      id
      startedAt
      endedAt
      players {
        user {
          id
          displayName
          avatar
        }
        hits
        edges
        blocks
        throws
        bounceHits
      }
    }
  }
`);

type MatchPlayer = {
  user: { id: string; displayName: string; avatar: string };
  hits: number;
  edges: number;
  blocks: number;
  throws: number;
  bounceHits: number;
};

type Match = {
  id: string;
  startedAt: string;
  endedAt?: string | null;
  players: MatchPlayer[];
};

type PlayerStats = {
  userId: string;
  displayName: string;
  avatar: string;
  matches: number;
  hits: number;
  throws: number;
  bounceHits: number;
  edges: number;
  blocks: number;
};

function buildLeaderboard(matches: Match[]): PlayerStats[] {
  const map = new Map<string, PlayerStats>();

  for (const match of matches) {
    if (!match.endedAt) continue;
    for (const p of match.players) {
      const existing = map.get(p.user.id) ?? {
        userId: p.user.id,
        displayName: p.user.displayName,
        avatar: p.user.avatar,
        matches: 0,
        hits: 0,
        throws: 0,
        bounceHits: 0,
        edges: 0,
        blocks: 0,
      };
      map.set(p.user.id, {
        ...existing,
        matches: existing.matches + 1,
        hits: existing.hits + p.hits,
        throws: existing.throws + p.throws,
        bounceHits: existing.bounceHits + p.bounceHits,
        edges: existing.edges + p.edges,
        blocks: existing.blocks + p.blocks,
      });
    }
  }

  return Array.from(map.values()).sort((a, b) => {
    const rateA = a.throws > 0 ? a.hits / a.throws : 0;
    const rateB = b.throws > 0 ? b.hits / b.throws : 0;
    return rateB - rateA;
  });
}

function formatRate(hits: number, throws: number) {
  if (throws === 0) return "–";
  return `${((hits / throws) * 100).toFixed(1)}%`;
}

function formatDuration(startedAt: string, endedAt?: string | null) {
  const start = new Date(startedAt).getTime();
  const end = endedAt ? new Date(endedAt).getTime() : Date.now();
  const diffMs = end - start;
  const minutes = Math.floor(diffMs / 60000);
  const seconds = Math.floor((diffMs % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

const MEDAL_COLORS = ["gold", "silver", "#cd7f32"];

function Leaderboard({ matches }: { matches: Match[] }) {
  const players = buildLeaderboard(matches);

  if (players.length === 0) {
    return <Text c="dimmed">Noch keine abgeschlossenen Partien.</Text>;
  }

  return (
    <Stack>
      <Table striped highlightOnHover withTableBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>Spieler</Table.Th>
            <Table.Th>Partien</Table.Th>
            <Table.Th>Würfe</Table.Th>
            <Table.Th>Treffer</Table.Th>
            <Table.Th>Quote</Table.Th>
            <Table.Th>Bounce</Table.Th>
            <Table.Th>Kanten</Table.Th>
            <Table.Th>Abwehr</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {players.map((p, i) => (
            <Table.Tr key={p.userId}>
              <Table.Td>
                {i < 3 ? (
                  <Text fw={700} c={MEDAL_COLORS[i]}>
                    {i + 1}.
                  </Text>
                ) : (
                  <Text c="dimmed">{i + 1}.</Text>
                )}
              </Table.Td>
              <Table.Td>
                <Group gap="xs" wrap="nowrap">
                  <Avatar src={p.avatar} size="sm" radius="xl" />
                  <Text fw={i < 3 ? 700 : undefined}>{p.displayName}</Text>
                </Group>
              </Table.Td>
              <Table.Td>{p.matches}</Table.Td>
              <Table.Td>{p.throws}</Table.Td>
              <Table.Td>{p.hits}</Table.Td>
              <Table.Td>
                <Text fw={600}>{formatRate(p.hits, p.throws)}</Text>
              </Table.Td>
              <Table.Td>{p.bounceHits}</Table.Td>
              <Table.Td>{p.edges}</Table.Td>
              <Table.Td>{p.blocks}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Stack>
  );
}

function MatchList({ matches }: { matches: Match[] }) {
  const finished = matches.filter((m) => m.endedAt);
  const active = matches.filter((m) => !m.endedAt);

  if (matches.length === 0) {
    return <Text c="dimmed">Noch keine Partien gespielt.</Text>;
  }

  return (
    <Stack>
      {active.length > 0 && (
        <Stack gap="xs">
          <Title order={5}>Laufende Partien</Title>
          {active.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </Stack>
      )}
      {finished.length > 0 && (
        <Stack gap="xs">
          <Title order={5}>Abgeschlossene Partien</Title>
          {finished.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </Stack>
      )}
    </Stack>
  );
}

function MatchCard({ match }: { match: Match }) {
  const isActive = !match.endedAt;

  return (
    <Paper withBorder p="md">
      <Stack gap="sm">
        <Group justify="space-between" wrap="wrap">
          <Group gap="xs">
            <Text size="sm" c="dimmed">
              {new Date(match.startedAt).toLocaleString("de-DE")}
            </Text>
            <Badge color={isActive ? "green" : "gray"} size="sm">
              {isActive ? "Läuft" : "Beendet"}
            </Badge>
            <Text size="sm" c="dimmed">
              {formatDuration(match.startedAt, match.endedAt)}
            </Text>
          </Group>
        </Group>
        <SimpleGrid
          cols={{ base: 1, xs: match.players.length > 1 ? 2 : 1 }}
          spacing="sm"
        >
          {match.players.map((p) => (
            <Paper key={p.user.id} withBorder p="sm" radius="md">
              <Stack gap={4}>
                <Group gap="xs">
                  <Avatar src={p.user.avatar} size="sm" radius="xl" />
                  <Text fw={600} size="sm">
                    {p.user.displayName}
                  </Text>
                </Group>
                <Group gap="xl">
                  <Stack gap={0} align="center">
                    <Text size="xs" c="dimmed">
                      Würfe
                    </Text>
                    <Text fw={700}>{p.throws}</Text>
                  </Stack>
                  <Stack gap={0} align="center">
                    <Text size="xs" c="dimmed">
                      Treffer
                    </Text>
                    <Text fw={700}>{p.hits}</Text>
                  </Stack>
                  <Stack gap={0} align="center">
                    <Text size="xs" c="dimmed">
                      Quote
                    </Text>
                    <Text fw={700}>{formatRate(p.hits, p.throws)}</Text>
                  </Stack>
                  <Stack gap={0} align="center">
                    <Text size="xs" c="dimmed">
                      Bounce
                    </Text>
                    <Text fw={700}>{p.bounceHits}</Text>
                  </Stack>
                  <Stack gap={0} align="center">
                    <Text size="xs" c="dimmed">
                      Kanten
                    </Text>
                    <Text fw={700}>{p.edges}</Text>
                  </Stack>
                  <Stack gap={0} align="center">
                    <Text size="xs" c="dimmed">
                      Abwehr
                    </Text>
                    <Text fw={700}>{p.blocks}</Text>
                  </Stack>
                </Group>
              </Stack>
            </Paper>
          ))}
        </SimpleGrid>
      </Stack>
    </Paper>
  );
}

export function BeerPong() {
  const [{ data }] = useQuery({ query: BeerPongMatchesQuery });
  const matches = data?.beerPongMatches ?? [];

  return (
    <Stack>
      <Title order={3}>🍺 Bierpong</Title>
      <Tabs defaultValue="leaderboard">
        <Tabs.List>
          <Tabs.Tab value="leaderboard" leftSection={<IconMedal size={16} />}>
            Rangliste
          </Tabs.Tab>
          <Tabs.Tab value="matches" leftSection={<IconTable size={16} />}>
            Partien
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="leaderboard" pt="md">
          <Leaderboard matches={matches} />
        </Tabs.Panel>
        <Tabs.Panel value="matches" pt="md">
          <MatchList matches={matches} />
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}
