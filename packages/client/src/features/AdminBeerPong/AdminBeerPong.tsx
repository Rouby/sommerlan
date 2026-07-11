import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Group,
  MultiSelect,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconMinus, IconPlus, IconPlayerStop, IconTrash } from "@tabler/icons-react";
import { useState } from "react";
import { useMutation, useQuery } from "urql";
import { graphql } from "../../gql";

const BeerPongMatchesQuery = graphql(`
  query beerPongMatchesAdmin {
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
    users {
      id
      displayName
      avatar
    }
  }
`);

const CreateBeerPongMatchMutation = graphql(`
  mutation createBeerPongMatch($playerIds: [ID!]!) {
    createBeerPongMatch(playerIds: $playerIds) {
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

const UpdateBeerPongPlayerStatsMutation = graphql(`
  mutation updateBeerPongPlayerStats(
    $matchId: ID!
    $input: BeerPongPlayerStatsInput!
  ) {
    updateBeerPongPlayerStats(matchId: $matchId, input: $input) {
      id
      players {
        user {
          id
          displayName
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

const EndBeerPongMatchMutation = graphql(`
  mutation endBeerPongMatch($matchId: ID!) {
    endBeerPongMatch(matchId: $matchId) {
      id
      endedAt
    }
  }
`);

const DeleteBeerPongMatchMutation = graphql(`
  mutation deleteBeerPongMatch($matchId: ID!) {
    deleteBeerPongMatch(matchId: $matchId)
  }
`);

function formatDuration(startedAt: string, endedAt?: string | null) {
  const start = new Date(startedAt).getTime();
  const end = endedAt ? new Date(endedAt).getTime() : Date.now();
  const diffMs = end - start;
  const minutes = Math.floor(diffMs / 60000);
  const seconds = Math.floor((diffMs % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function AdminBeerPong() {
  const [{ data }, refetch] = useQuery({ query: BeerPongMatchesQuery });
  const [selectedPlayerIds, setSelectedPlayerIds] = useState<string[]>([]);
  const [showNewMatchForm, setShowNewMatchForm] = useState(false);

  const [, createMatch] = useMutation(CreateBeerPongMatchMutation);
  const [, updateStats] = useMutation(UpdateBeerPongPlayerStatsMutation);
  const [, endMatch] = useMutation(EndBeerPongMatchMutation);
  const [, deleteMatch] = useMutation(DeleteBeerPongMatchMutation);

  const users = data?.users ?? [];
  const matches = data?.beerPongMatches ?? [];

  const activeMatches = matches.filter((m) => !m.endedAt);
  const finishedMatches = matches.filter((m) => m.endedAt);

  async function handleCreateMatch() {
    if (selectedPlayerIds.length === 0) return;
    await createMatch({ playerIds: selectedPlayerIds });
    setSelectedPlayerIds([]);
    setShowNewMatchForm(false);
    refetch({ requestPolicy: "network-only" });
  }

  async function handleUpdateStats(
    matchId: string,
    userId: string,
    hits: number,
    edges: number,
    blocks: number,
    throws: number,
    bounceHits: number,
  ) {
    await updateStats({
      matchId,
      input: { userId, hits, edges, blocks, throws, bounceHits },
    });
  }

  async function handleEndMatch(matchId: string) {
    await endMatch({ matchId });
    refetch({ requestPolicy: "network-only" });
  }

  async function handleDeleteMatch(matchId: string) {
    await deleteMatch({ matchId });
    refetch({ requestPolicy: "network-only" });
  }

  return (
    <Stack p="md">
      {showNewMatchForm ? (
          <Stack>
            <Title order={4}>Neue Partie</Title>
            <MultiSelect
              label="Spieler auswählen"
              placeholder="Spieler suchen..."
              data={users.map((u) => ({
                value: u.id,
                label: u.displayName,
              }))}
              value={selectedPlayerIds}
              onChange={setSelectedPlayerIds}
              searchable
            />
            <Group>
              <Button
                onClick={handleCreateMatch}
                disabled={selectedPlayerIds.length === 0}
              >
                Partie starten
              </Button>
              <Button
                variant="subtle"
                onClick={() => {
                  setShowNewMatchForm(false);
                  setSelectedPlayerIds([]);
                }}
              >
                Abbrechen
              </Button>
            </Group>
          </Stack>
      ) : (
        <Button
          leftSection={<IconPlus size={16} />}
          onClick={() => setShowNewMatchForm(true)}
        >
          Neue Partie
        </Button>
      )}

      {activeMatches.length > 0 && (
        <Stack>
          <Title order={4}>Laufende Partien</Title>
          {activeMatches.map((match) => (
            <MatchCard
              key={match.id}
              match={match}
              onUpdateStats={handleUpdateStats}
              onEndMatch={handleEndMatch}
              onDeleteMatch={handleDeleteMatch}
            />
          ))}
        </Stack>
      )}

      {finishedMatches.length > 0 && (
        <Stack>
          <Title order={4}>Abgeschlossene Partien</Title>
          {finishedMatches.map((match) => (
            <MatchCard
              key={match.id}
              match={match}
              onUpdateStats={handleUpdateStats}
              onEndMatch={handleEndMatch}
              onDeleteMatch={handleDeleteMatch}
            />
          ))}
        </Stack>
      )}

      {matches.length === 0 && !showNewMatchForm && (
        <Text c="dimmed">Noch keine Partien gespielt.</Text>
      )}
    </Stack>
  );
}

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

type StatKey = "hits" | "edges" | "blocks" | "throws" | "bounceHits";

const STAT_LABELS: Record<StatKey, string> = {
  throws: "Würfe",
  hits: "Treffer",
  bounceHits: "Bounce",
  edges: "Kanten",
  blocks: "Abwehr",
};

const STAT_ORDER: StatKey[] = ["throws", "hits", "bounceHits", "edges", "blocks"];

function StatCounter({
  label,
  value,
  onIncrement,
  onDecrement,
  disabled,
}: {
  label: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  disabled: boolean;
}) {
  return (
    <Group justify="space-between" wrap="nowrap" gap="xs">
      <Text size="sm" c="dimmed" style={{ minWidth: 60 }}>
        {label}
      </Text>
      <Group gap="xs" wrap="nowrap">
        <ActionIcon
          variant="light"
          color="gray"
          size="lg"
          onClick={onDecrement}
          disabled={disabled || value <= 0}
          aria-label={`${label} verringern`}
        >
          <IconMinus size={16} />
        </ActionIcon>
        <Text fw={700} size="lg" style={{ minWidth: 32, textAlign: "center" }}>
          {value}
        </Text>
        <ActionIcon
          variant="filled"
          size="lg"
          onClick={onIncrement}
          disabled={disabled}
          aria-label={`${label} erhöhen`}
        >
          <IconPlus size={16} />
        </ActionIcon>
      </Group>
    </Group>
  );
}

function MatchCard({
  match,
  onUpdateStats,
  onEndMatch,
  onDeleteMatch,
}: {
  match: Match;
  onUpdateStats: (
    matchId: string,
    userId: string,
    hits: number,
    edges: number,
    blocks: number,
    throws: number,
    bounceHits: number,
  ) => Promise<void>;
  onEndMatch: (matchId: string) => Promise<void>;
  onDeleteMatch: (matchId: string) => Promise<void>;
}) {
  const isActive = !match.endedAt;
  const [localStats, setLocalStats] = useState<
    Record<string, { hits: number; edges: number; blocks: number; throws: number; bounceHits: number }>
  >(
    Object.fromEntries(
      match.players.map((p) => [
        p.user.id,
        { hits: p.hits, edges: p.edges, blocks: p.blocks, throws: p.throws, bounceHits: p.bounceHits },
      ]),
    ),
  );

  function handleStatChange(userId: string, field: StatKey, delta: number) {
    const current = localStats[userId] ?? { hits: 0, edges: 0, blocks: 0, throws: 0, bounceHits: 0 };
    const newValue = Math.max(0, current[field] + delta);
    const updated = { ...current, [field]: newValue };
    setLocalStats((prev) => ({ ...prev, [userId]: updated }));
    onUpdateStats(
      match.id,
      userId,
      updated.hits,
      updated.edges,
      updated.blocks,
      updated.throws,
      updated.bounceHits,
    );
  }

  return (
    <Paper withBorder p="md">
      <Stack gap="md">
        <Group justify="space-between" wrap="wrap">
          <Group>
            <Text fw={500}>
              {new Date(match.startedAt).toLocaleString("de-DE")}
            </Text>
            <Badge color={isActive ? "green" : "gray"}>
              {isActive ? "Läuft" : "Beendet"}
            </Badge>
            <Text c="dimmed" size="sm">
              Dauer: {formatDuration(match.startedAt, match.endedAt)}
            </Text>
          </Group>
          <Group>
            {isActive && (
              <Button
                size="sm"
                color="orange"
                leftSection={<IconPlayerStop size={14} />}
                onClick={() => onEndMatch(match.id)}
              >
                Beenden
              </Button>
            )}
            <ActionIcon
              color="red"
              variant="subtle"
              onClick={() => onDeleteMatch(match.id)}
            >
              <IconTrash size={16} />
            </ActionIcon>
          </Group>
        </Group>

        <SimpleGrid cols={{ base: 1, sm: match.players.length > 1 ? 2 : 1 }} spacing="md">
          {match.players.map((player) => {
            const stats = localStats[player.user.id] ?? {
              hits: player.hits,
              edges: player.edges,
              blocks: player.blocks,
              throws: player.throws,
              bounceHits: player.bounceHits,
            };
            return (
              <Paper key={player.user.id} withBorder p="sm" radius="md">
                <Stack gap="sm">
                  <Group gap="xs">
                    <Avatar src={player.user.avatar} size="sm" radius="xl" />
                    <Text fw={600}>{player.user.displayName}</Text>
                  </Group>
                  {STAT_ORDER.map((stat) => (
                    <StatCounter
                      key={stat}
                      label={STAT_LABELS[stat]}
                      value={stats[stat]}
                      onIncrement={() => handleStatChange(player.user.id, stat, 1)}
                      onDecrement={() => handleStatChange(player.user.id, stat, -1)}
                      disabled={!isActive}
                    />
                  ))}
                </Stack>
              </Paper>
            );
          })}
        </SimpleGrid>
      </Stack>
    </Paper>
  );
}

