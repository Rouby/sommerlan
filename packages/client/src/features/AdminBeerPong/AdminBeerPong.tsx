import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Group,
  MultiSelect,
  NumberInput,
  Paper,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { IconPlus, IconPlayerStop, IconTrash } from "@tabler/icons-react";
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
  ) {
    await updateStats({
      matchId,
      input: { userId, hits, edges, blocks },
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
    <Stack>
      {showNewMatchForm ? (
        <Paper withBorder p="md">
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
        </Paper>
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
};

type Match = {
  id: string;
  startedAt: string;
  endedAt?: string | null;
  players: MatchPlayer[];
};

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
  ) => Promise<void>;
  onEndMatch: (matchId: string) => Promise<void>;
  onDeleteMatch: (matchId: string) => Promise<void>;
}) {
  const isActive = !match.endedAt;
  const [localStats, setLocalStats] = useState<
    Record<string, { hits: number; edges: number; blocks: number }>
  >(
    Object.fromEntries(
      match.players.map((p) => [
        p.user.id,
        { hits: p.hits, edges: p.edges, blocks: p.blocks },
      ]),
    ),
  );

  function handleStatChange(
    userId: string,
    field: "hits" | "edges" | "blocks",
    value: number,
  ) {
    setLocalStats((prev) => ({
      ...prev,
      [userId]: { ...prev[userId], [field]: value },
    }));
    const stats = localStats[userId] ?? { hits: 0, edges: 0, blocks: 0 };
    onUpdateStats(
      match.id,
      userId,
      field === "hits" ? value : stats.hits,
      field === "edges" ? value : stats.edges,
      field === "blocks" ? value : stats.blocks,
    );
  }

  return (
    <Paper withBorder p="md">
      <Stack>
        <Group justify="space-between">
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
                size="xs"
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

        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Spieler</Table.Th>
              <Table.Th>Treffer</Table.Th>
              <Table.Th>Kanten</Table.Th>
              <Table.Th>Abwehr</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {match.players.map((player) => {
              const stats = localStats[player.user.id] ?? {
                hits: player.hits,
                edges: player.edges,
                blocks: player.blocks,
              };
              return (
                <Table.Tr key={player.user.id}>
                  <Table.Td>
                    <Group gap="xs">
                      <Avatar src={player.user.avatar} size="sm" radius="xl" />
                      <Text size="sm">{player.user.displayName}</Text>
                    </Group>
                  </Table.Td>
                  <Table.Td>
                    <NumberInput
                      value={stats.hits}
                      min={0}
                      w={80}
                      disabled={!isActive}
                      onChange={(v) =>
                        handleStatChange(
                          player.user.id,
                          "hits",
                          typeof v === "number" ? v : 0,
                        )
                      }
                    />
                  </Table.Td>
                  <Table.Td>
                    <NumberInput
                      value={stats.edges}
                      min={0}
                      w={80}
                      disabled={!isActive}
                      onChange={(v) =>
                        handleStatChange(
                          player.user.id,
                          "edges",
                          typeof v === "number" ? v : 0,
                        )
                      }
                    />
                  </Table.Td>
                  <Table.Td>
                    <NumberInput
                      value={stats.blocks}
                      min={0}
                      w={80}
                      disabled={!isActive}
                      onChange={(v) =>
                        handleStatChange(
                          player.user.id,
                          "blocks",
                          typeof v === "number" ? v : 0,
                        )
                      }
                    />
                  </Table.Td>
                </Table.Tr>
              );
            })}
          </Table.Tbody>
        </Table>
      </Stack>
    </Paper>
  );
}
