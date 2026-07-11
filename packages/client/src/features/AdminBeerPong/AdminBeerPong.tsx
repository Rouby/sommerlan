import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Group,
  MultiSelect,
  Modal,
  NumberInput,
  Paper,
  ScrollArea,
  Select,
  SimpleGrid,
  Stack,
  Table,
  Tabs,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import {
  IconBrackets,
  IconArrowDown,
  IconArrowUp,
  IconMinus,
  IconPlus,
  IconRefresh,
  IconTargetArrow,
  IconGripVertical,
  IconTrash,
  IconUsersGroup,
} from "@tabler/icons-react";
import { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery } from "urql";
import { graphql } from "../../gql";
import {
  BeerPongGroupsOverview,
  BeerPongKnockoutOverview,
  type BeerPongTournamentMatch,
} from "../BeerPong/TournamentView";

const BeerPongTournamentQuery = graphql(`
  query beerPongTournamentAdmin {
    beerPongTournament {
      id
      name
      groupCount
      knockoutSize
      teams {
        id
        name
        seed
        players {
          id
          displayName
          avatar
        }
      }
      groups {
        name
        teams {
          rank
          matches
          wins
          losses
          remainingBeers
          remainingBeerDiff
          team {
            id
            name
            seed
            players {
              id
              displayName
              avatar
            }
          }
        }
        matches {
          id
          startedAt
          endedAt
          phase
          groupName
          round
          matchNumber
          winner {
            id
          }
          teams {
            slotLabel
            remainingBeers
            isWinner
            team {
              id
              name
              seed
              players {
                id
                displayName
                avatar
              }
            }
          }
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
      knockout {
        round
        name
        matches {
          id
          startedAt
          endedAt
          phase
          groupName
          round
          matchNumber
          winner {
            id
          }
          teams {
            slotLabel
            remainingBeers
            isWinner
            team {
              id
              name
              seed
              players {
                id
                displayName
                avatar
              }
            }
          }
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
      matches {
        id
        startedAt
        endedAt
        phase
        groupName
        round
        matchNumber
        winner {
          id
        }
        teams {
          slotLabel
          remainingBeers
          isWinner
          team {
            id
            name
            seed
            players {
              id
              displayName
              avatar
            }
          }
        }
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
    users {
      id
      displayName
      avatar
    }
  }
`);

const UpsertBeerPongTournamentMutation = graphql(`
  mutation upsertBeerPongTournament($input: UpsertBeerPongTournamentInput!) {
    upsertBeerPongTournament(input: $input) {
      id
    }
  }
`);

const GenerateBeerPongGroupStageMutation = graphql(`
  mutation generateBeerPongGroupStage($tournamentId: ID!) {
    generateBeerPongGroupStage(tournamentId: $tournamentId) {
      id
    }
  }
`);

const GenerateBeerPongKnockoutStageMutation = graphql(`
  mutation generateBeerPongKnockoutStage($tournamentId: ID!) {
    generateBeerPongKnockoutStage(tournamentId: $tournamentId) {
      id
    }
  }
`);

const UpdateBeerPongMatchMutation = graphql(`
  mutation updateBeerPongMatch($input: UpdateBeerPongMatchInput!) {
    updateBeerPongMatch(input: $input) {
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

type TeamForm = {
  id?: string;
  name: string;
  playerIds: string[];
};

type GroupPreview = {
  name: string;
  teams: Array<TeamForm & { index: number }>;
};

type StatKey = "hits" | "edges" | "blocks" | "throws" | "bounceHits";
type ThrowOutcome = "miss" | "hit" | "bounce" | "edge";
type PlayerStatLine = {
  hits: number;
  edges: number;
  blocks: number;
  throws: number;
  bounceHits: number;
};

const STAT_LABELS: Record<StatKey, string> = {
  throws: "Würfe",
  hits: "Treffer",
  bounceHits: "Bounce",
  edges: "Kanten",
  blocks: "Abwehr",
};

const STAT_ORDER: StatKey[] = ["throws", "hits", "bounceHits", "edges", "blocks"];

function toDateTimeLocalValue(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  const offsetMs = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offsetMs).toISOString().slice(0, 16);
}

function fromDateTimeLocalValue(value: string) {
  if (!value) {
    return null;
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return null;
  }
  return date.toISOString();
}

function createDefaultTeams() {
  return Array.from({ length: 8 }, (_, index) => ({
    name: `Team ${index + 1}`,
    playerIds: [],
  }));
}

function toTeamForms(
  tournament: {
    teams: Array<{
      id: string;
      name: string;
      players: Array<{ id: string }>;
    }>;
  },
) {
  return tournament.teams.map((team) => ({
    id: team.id,
    name: team.name,
    playerIds: team.players.map((player) => player.id),
  }));
}

function getPreviewGroups(teams: TeamForm[], groupCount: number) {
  const groups = Array.from({ length: groupCount }, (_, index) => ({
    name: String.fromCharCode(65 + index),
    teams: [] as Array<TeamForm & { index: number }>,
  }));

  teams.forEach((team, index) => {
    const offset = index % groupCount;
    const row = Math.floor(index / groupCount);
    const groupIndex = row % 2 === 0 ? offset : groupCount - offset - 1;
    groups[groupIndex]?.teams.push({ ...team, index });
  });

  return groups as GroupPreview[];
}

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
      <Text size="sm" c="dimmed">
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
        <Text fw={700} style={{ minWidth: 24, textAlign: "center" }}>
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

function EditableMatchCard({
  match,
  onSave,
  onDelete,
}: {
  match: BeerPongTournamentMatch & { winner?: { id: string } | null };
  onSave: (input: {
    matchId: string;
    startedAt?: string;
    playerStats: Array<{
      userId: string;
      hits: number;
      edges: number;
      blocks: number;
      throws: number;
      bounceHits: number;
    }>;
    teamResults: Array<{ teamId: string; remainingBeers: number }>;
    winnerTeamId?: string;
    isFinished?: boolean;
  }) => Promise<void>;
  onDelete: (matchId: string) => Promise<void>;
}) {
  const [playerStats, setPlayerStats] = useState<Record<string, PlayerStatLine>>({});
  const [remainingBeers, setRemainingBeers] = useState<Record<string, number>>({});
  const [winnerTeamId, setWinnerTeamId] = useState<string | null>(null);
  const [startedAtInput, setStartedAtInput] = useState("");
  const [trackingOpened, setTrackingOpened] = useState(false);
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);
  const [activePlayerIndex, setActivePlayerIndex] = useState(0);
  const [trackingHistory, setTrackingHistory] = useState<
    Array<{ userId: string; previousStats: PlayerStatLine; teamIndex: number; playerIndex: number }>
  >([]);

  useEffect(() => {
    setPlayerStats(
      Object.fromEntries(
        match.players.map((player) => [
          player.user.id,
          {
            hits: player.hits,
            edges: player.edges,
            blocks: player.blocks,
            throws: player.throws,
            bounceHits: player.bounceHits,
          },
        ]),
      ),
    );
    setRemainingBeers(
      Object.fromEntries(
        match.teams
          .filter((team) => team.team)
          .map((team) => [team.team!.id, team.remainingBeers]),
      ),
    );
    setWinnerTeamId(match.winner?.id ?? null);
    setStartedAtInput(toDateTimeLocalValue(match.startedAt));
    setActiveTeamIndex(0);
    setActivePlayerIndex(0);
    setTrackingHistory([]);
  }, [match]);

  async function handleSave(isFinished = false) {
    const startedAt = fromDateTimeLocalValue(startedAtInput);
    await onSave({
      matchId: match.id,
      startedAt: startedAt ?? undefined,
      playerStats: Object.entries(playerStats).map(([userId, stats]) => ({
        userId,
        ...stats,
      })),
      teamResults: match.teams.flatMap((team) =>
        team.team
          ? [
              {
                teamId: team.team.id,
                remainingBeers: remainingBeers[team.team.id] ?? 0,
              },
            ]
          : [],
      ),
      winnerTeamId: winnerTeamId ?? undefined,
      isFinished,
    });
  }

  function handleStatChange(userId: string, stat: StatKey, delta: number) {
    setPlayerStats((previous) => {
      const next = previous[userId] ?? {
        hits: 0,
        edges: 0,
        blocks: 0,
        throws: 0,
        bounceHits: 0,
      };
      return {
        ...previous,
        [userId]: {
          ...next,
          [stat]: Math.max(0, next[stat] + delta),
        },
      };
    });
  }

  const resolvedTeams = match.teams.filter((team) => team.team);
  const activeTeam = resolvedTeams[activeTeamIndex]?.team;
  const activePlayer = activeTeam?.players[activePlayerIndex];

  function applyThrowOutcome(userId: string, outcome: ThrowOutcome) {
    setTrackingHistory((previous) => [
      ...previous,
      {
        userId,
        previousStats: playerStats[userId] ?? {
          hits: 0,
          edges: 0,
          blocks: 0,
          throws: 0,
          bounceHits: 0,
        },
        teamIndex: activeTeamIndex,
        playerIndex: activePlayerIndex,
      },
    ]);

    setPlayerStats((previous) => {
      const stats = previous[userId] ?? {
        hits: 0,
        edges: 0,
        blocks: 0,
        throws: 0,
        bounceHits: 0,
      };
      const next: PlayerStatLine = {
        ...stats,
        throws: stats.throws + 1,
      };

      if (outcome === "hit") {
        next.hits += 1;
      } else if (outcome === "bounce") {
        next.hits += 1;
        next.bounceHits += 1;
      } else if (outcome === "edge") {
        next.edges += 1;
      }

      return {
        ...previous,
        [userId]: next,
      };
    });

    const currentPlayers = activeTeam?.players ?? [];
    if (activePlayerIndex < currentPlayers.length - 1) {
      setActivePlayerIndex(activePlayerIndex + 1);
      return;
    }

    if (resolvedTeams.length > 1) {
      setActiveTeamIndex((activeTeamIndex + 1) % resolvedTeams.length);
    }
    setActivePlayerIndex(0);
  }

  function handleUndoTracking() {
    setTrackingHistory((previous) => {
      const lastEntry = previous[previous.length - 1];
      if (!lastEntry) {
        return previous;
      }

      setPlayerStats((previousStats) => ({
        ...previousStats,
        [lastEntry.userId]: lastEntry.previousStats,
      }));
      setActiveTeamIndex(lastEntry.teamIndex);
      setActivePlayerIndex(lastEntry.playerIndex);
      return previous.slice(0, -1);
    });
  }

  return (
    <Paper withBorder p="md" radius="md">
      <Stack gap="md">
        <Group justify="space-between" wrap="wrap">
          <Group gap="xs">
            <Badge color={match.endedAt ? "gray" : "green"}>
              {match.endedAt ? "Beendet" : "Offen"}
            </Badge>
            {match.groupName && <Badge variant="light">Gruppe {match.groupName}</Badge>}
            <Text size="sm" c="dimmed">
              Match #{match.matchNumber}
            </Text>
          </Group>
          <Group>
            <Button
              variant="light"
              size="sm"
              leftSection={<IconTargetArrow size={16} />}
              onClick={() => setTrackingOpened(true)}
              disabled={resolvedTeams.length === 0}
            >
              Tracking
            </Button>
            <Button variant="light" size="sm" onClick={() => handleSave(false)}>
              Speichern
            </Button>
            {!match.endedAt && (
              <Button
                size="sm"
                color="orange"
                disabled={!winnerTeamId}
                onClick={() => handleSave(true)}
              >
                Abschließen
              </Button>
            )}
            <ActionIcon
              color="red"
              variant="subtle"
              onClick={() => onDelete(match.id)}
            >
              <IconTrash size={16} />
            </ActionIcon>
          </Group>
        </Group>

        <TextInput
          label="Startzeit"
          type="datetime-local"
          value={startedAtInput}
          onChange={(event) => setStartedAtInput(event.currentTarget.value)}
        />

        <Select
          label="Sieger"
          placeholder="Sieger auswählen"
          value={winnerTeamId}
          onChange={setWinnerTeamId}
          data={resolvedTeams.map((team) => ({
            value: team.team!.id,
            label: team.team!.name,
          }))}
        />

        <SimpleGrid cols={{ base: 1, xl: 2 }} spacing="md">
          {match.teams.map((team, index) => {
            const actualTeam = team.team;
            if (!actualTeam) {
              return (
                <Paper key={`${match.id}-${index}`} withBorder p="sm" radius="md">
                  <Stack gap="xs">
                    <Text fw={600}>{team.slotLabel}</Text>
                    <Text size="sm" c="dimmed">
                      Slot wird nach dem vorherigen Match gefüllt.
                    </Text>
                  </Stack>
                </Paper>
              );
            }

            return (
              <Paper key={actualTeam.id} withBorder p="sm" radius="md">
                <Stack gap="sm">
                  <Group justify="space-between" align="start">
                    <Stack gap={2}>
                      <Text fw={700}>{actualTeam.name}</Text>
                      {actualTeam.players.map((player) => (
                        <Group key={player.id} gap="xs" wrap="nowrap">
                          <Avatar src={player.avatar} size="sm" radius="xl" />
                          <Text size="sm">{player.displayName}</Text>
                        </Group>
                      ))}
                    </Stack>
                    <NumberInput
                      label="Restbiere"
                      min={0}
                      value={remainingBeers[actualTeam.id] ?? 0}
                      onChange={(value) =>
                        setRemainingBeers((previous) => ({
                          ...previous,
                          [actualTeam.id]:
                            typeof value === "number" && Number.isFinite(value)
                              ? value
                              : 0,
                        }))
                      }
                      w={120}
                    />
                  </Group>
                  {actualTeam.players.map((player) => {
                    const stats = playerStats[player.id] ?? {
                      hits: 0,
                      edges: 0,
                      blocks: 0,
                      throws: 0,
                      bounceHits: 0,
                    };

                    return (
                      <Paper key={player.id} withBorder p="sm" radius="md">
                        <Stack gap="xs">
                          <Group gap="xs">
                            <Avatar src={player.avatar} size="sm" radius="xl" />
                            <Text fw={600}>{player.displayName}</Text>
                          </Group>
                          {STAT_ORDER.map((stat) => (
                            <StatCounter
                              key={stat}
                              label={STAT_LABELS[stat]}
                              value={stats[stat]}
                              onIncrement={() => handleStatChange(player.id, stat, 1)}
                              onDecrement={() => handleStatChange(player.id, stat, -1)}
                              disabled={false}
                            />
                          ))}
                        </Stack>
                      </Paper>
                    );
                  })}
                </Stack>
              </Paper>
            );
          })}
        </SimpleGrid>

        <Modal
          opened={trackingOpened}
          onClose={() => setTrackingOpened(false)}
          fullScreen
          title={`Match #${match.matchNumber} Tracking`}
        >
          <Stack gap="md">
            <Group justify="space-between" wrap="wrap">
              <Group>
                {resolvedTeams.map((team, index) => (
                  <Button
                    key={team.team!.id}
                    variant={index === activeTeamIndex ? "filled" : "light"}
                    onClick={() => {
                      setActiveTeamIndex(index);
                      setActivePlayerIndex(0);
                    }}
                  >
                    {team.team!.name}
                  </Button>
                ))}
              </Group>
              <Button variant="light" onClick={handleUndoTracking} disabled={trackingHistory.length === 0}>
                Letzte Eingabe rückgängig
              </Button>
            </Group>

            {activeTeam && activePlayer ? (
              <Paper withBorder p="md" radius="md">
                <Stack gap="sm">
                  <Text size="sm" c="dimmed">
                    Aktive Seite
                  </Text>
                  <Title order={3}>{activeTeam.name}</Title>
                  <Group gap="xs">
                    <Avatar src={activePlayer.avatar} radius="xl" />
                    <Text fw={700}>{activePlayer.displayName}</Text>
                  </Group>
                  <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="sm">
                    <Button onClick={() => applyThrowOutcome(activePlayer.id, "miss")}>Fehlwurf</Button>
                    <Button color="green" onClick={() => applyThrowOutcome(activePlayer.id, "hit")}>
                      Treffer
                    </Button>
                    <Button color="lime" onClick={() => applyThrowOutcome(activePlayer.id, "bounce")}>
                      Bounce
                    </Button>
                    <Button color="yellow" onClick={() => applyThrowOutcome(activePlayer.id, "edge")}>
                      Kante
                    </Button>
                  </SimpleGrid>
                </Stack>
              </Paper>
            ) : (
              <Text c="dimmed">Für dieses Match sind noch keine Teams vorhanden.</Text>
            )}

            {resolvedTeams.map((team) => (
              <Paper key={team.team!.id} withBorder p="md" radius="md">
                <Stack gap="sm">
                  <Group justify="space-between">
                    <Title order={4}>{team.team!.name}</Title>
                    <NumberInput
                      label="Restbiere"
                      min={0}
                      value={remainingBeers[team.team!.id] ?? 0}
                      onChange={(value) =>
                        setRemainingBeers((previous) => ({
                          ...previous,
                          [team.team!.id]:
                            typeof value === "number" && Number.isFinite(value) ? value : 0,
                        }))
                      }
                      w={120}
                    />
                  </Group>
                  <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
                    {team.team!.players.map((player) => {
                      const stats = playerStats[player.id] ?? {
                        hits: 0,
                        edges: 0,
                        blocks: 0,
                        throws: 0,
                        bounceHits: 0,
                      };

                      return (
                        <Paper key={player.id} withBorder p="sm" radius="md">
                          <Stack gap={4}>
                            <Group gap="xs">
                              <Avatar src={player.avatar} size="sm" radius="xl" />
                              <Text fw={600}>{player.displayName}</Text>
                            </Group>
                            {STAT_ORDER.map((stat) => (
                              <Text key={stat} size="sm">
                                {STAT_LABELS[stat]}: <Text span fw={700}>{stats[stat]}</Text>
                              </Text>
                            ))}
                          </Stack>
                        </Paper>
                      );
                    })}
                  </SimpleGrid>
                </Stack>
              </Paper>
            ))}

            <Group justify="end">
              <Button variant="light" onClick={() => setTrackingOpened(false)}>
                Zurück
              </Button>
              <Button onClick={() => handleSave(false)}>Tracking speichern</Button>
              {!match.endedAt && (
                <Button color="orange" disabled={!winnerTeamId} onClick={() => handleSave(true)}>
                  Speichern & abschließen
                </Button>
              )}
            </Group>
          </Stack>
        </Modal>
      </Stack>
    </Paper>
  );
}

export function AdminBeerPong() {
  const [{ data }, refetch] = useQuery({ query: BeerPongTournamentQuery });
  const tournament = data?.beerPongTournament ?? null;
  const users = data?.users ?? [];

  const [name, setName] = useState("Beer Pong Tournament");
  const [groupCount, setGroupCount] = useState(2);
  const [knockoutSize, setKnockoutSize] = useState(4);
  const [teams, setTeams] = useState<TeamForm[]>(createDefaultTeams());
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [draggedTeamIndex, setDraggedTeamIndex] = useState<number | null>(null);

  const [, upsertTournament] = useMutation(UpsertBeerPongTournamentMutation);
  const [, generateGroupStage] = useMutation(GenerateBeerPongGroupStageMutation);
  const [, generateKnockoutStage] = useMutation(GenerateBeerPongKnockoutStageMutation);
  const [, updateMatch] = useMutation(UpdateBeerPongMatchMutation);
  const [, deleteMatch] = useMutation(DeleteBeerPongMatchMutation);

  useEffect(() => {
    if (tournament) {
      setName(tournament.name);
      setGroupCount(tournament.groupCount);
      setKnockoutSize(tournament.knockoutSize);
      setTeams(toTeamForms(tournament));
      return;
    }

    setName("Beer Pong Tournament");
    setGroupCount(2);
    setKnockoutSize(4);
    setTeams(createDefaultTeams());
  }, [tournament]);

  const playerOptions = useMemo(
    () =>
      users.map((user) => ({
        value: user.id,
        label: user.displayName,
      })),
    [users],
  );

  const groupPreview = useMemo(
    () => getPreviewGroups(teams, groupCount),
    [teams, groupCount],
  );

  async function handleRefetch() {
    setErrorMessage(null);
    await refetch({ requestPolicy: "network-only" });
  }

  function moveTeam(index: number, direction: -1 | 1) {
    setTeams((previous) => {
      const nextIndex = index + direction;

      if (nextIndex < 0 || nextIndex >= previous.length) {
        return previous;
      }

      const next = [...previous];
      [next[index], next[nextIndex]] = [next[nextIndex]!, next[index]!];
      return next;
    });
  }

  function swapTeams(indexA: number, indexB: number) {
    if (indexA === indexB) {
      return;
    }

    setTeams((previous) => {
      if (indexA < 0 || indexA >= previous.length || indexB < 0 || indexB >= previous.length) {
        return previous;
      }

      const next = [...previous];
      [next[indexA], next[indexB]] = [next[indexB]!, next[indexA]!];
      return next;
    });
  }

  async function handleSaveTournament() {
    const response = await upsertTournament({
      input: {
        id: tournament?.id,
        name,
        groupCount,
        knockoutSize,
        teams: teams.map((team) => ({
          id: team.id,
          name: team.name,
          playerIds: team.playerIds,
        })),
      },
    });

    if (response.error) {
      setErrorMessage(response.error.message);
      return;
    }

    await handleRefetch();
  }

  async function handleGenerateGroupMatches() {
    if (!tournament?.id) return;
    const response = await generateGroupStage({ tournamentId: tournament.id });
    if (response.error) {
      setErrorMessage(response.error.message);
      return;
    }
    await handleRefetch();
  }

  async function handleGenerateKnockoutMatches() {
    if (!tournament?.id) return;
    const response = await generateKnockoutStage({ tournamentId: tournament.id });
    if (response.error) {
      setErrorMessage(response.error.message);
      return;
    }
    await handleRefetch();
  }

  async function handleSaveMatch(input: {
    matchId: string;
    startedAt?: string;
    playerStats: Array<{
      userId: string;
      hits: number;
      edges: number;
      blocks: number;
      throws: number;
      bounceHits: number;
    }>;
    teamResults: Array<{ teamId: string; remainingBeers: number }>;
    winnerTeamId?: string;
    isFinished?: boolean;
  }) {
    const response = await updateMatch({ input });
    if (response.error) {
      setErrorMessage(response.error.message);
      return;
    }
    await handleRefetch();
  }

  async function handleDeleteMatch(matchId: string) {
    const response = await deleteMatch({ matchId });
    if (response.error) {
      setErrorMessage(response.error.message);
      return;
    }
    await handleRefetch();
  }

  const groupMatchesExist = Boolean(tournament?.groups.some((group) => group.matches.length > 0));

  return (
    <Stack p="md">
      <Group justify="space-between" wrap="wrap">
        <Title order={3}>Turnierverwaltung</Title>
        <Button
          variant="subtle"
          leftSection={<IconRefresh size={16} />}
          onClick={handleRefetch}
        >
          Aktualisieren
        </Button>
      </Group>

      {errorMessage && (
        <Text c="red" size="sm">
          {errorMessage}
        </Text>
      )}

      <Tabs defaultValue="setup">
        <Tabs.List>
          <Tabs.Tab value="setup" leftSection={<IconUsersGroup size={16} />}>
            Setup
          </Tabs.Tab>
          <Tabs.Tab value="groups" leftSection={<IconUsersGroup size={16} />}>
            Gruppenphase
          </Tabs.Tab>
          <Tabs.Tab value="knockout" leftSection={<IconBrackets size={16} />}>
            K.-o.-Phase
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="setup" pt="md">
          <Stack gap="md">
            <Paper withBorder p="md" radius="md">
              <Stack gap="md">
                <TextInput
                  label="Turniername"
                  value={name}
                  onChange={(event) => setName(event.currentTarget.value)}
                />
                <Group grow align="start">
                  <NumberInput
                    label="Gruppen"
                    min={1}
                    value={groupCount}
                    onChange={(value) =>
                      setGroupCount(
                        typeof value === "number" && Number.isFinite(value) ? value : 1,
                      )
                    }
                  />
                  <NumberInput
                    label="Qualifizierte Teams"
                    min={2}
                    value={knockoutSize}
                    onChange={(value) =>
                      setKnockoutSize(
                        typeof value === "number" && Number.isFinite(value) ? value : 2,
                      )
                    }
                  />
                </Group>
                <Stack gap="sm">
                  <Text size="sm" c="dimmed">
                    Die Reihenfolge der Teams bestimmt die Gruppeneinteilung. Ändere sie vor dem Speichern und Erzeugen der Gruppenphase.
                  </Text>
                  {teams.map((team, index) => (
                    <Paper key={team.id ?? index} withBorder p="sm" radius="md">
                      <Group align="start" wrap="nowrap">
                        <TextInput
                          label={`Team ${index + 1}`}
                          value={team.name}
                          onChange={(event) =>
                            setTeams((previous) =>
                              previous.map((entry, entryIndex) =>
                                entryIndex === index
                                  ? { ...entry, name: event.currentTarget.value }
                                  : entry,
                              ),
                            )
                          }
                          style={{ flex: 1 }}
                        />
                        <MultiSelect
                          label="Spieler"
                          data={playerOptions}
                          value={team.playerIds}
                          onChange={(value) =>
                            setTeams((previous) =>
                              previous.map((entry, entryIndex) =>
                                entryIndex === index
                                  ? { ...entry, playerIds: value.slice(0, 2) }
                                  : entry,
                              ),
                            )
                          }
                          searchable
                          maxValues={2}
                          style={{ flex: 1 }}
                        />
                        <Group gap={4} mt={30} wrap="nowrap">
                          <ActionIcon
                            variant="subtle"
                            onClick={() => moveTeam(index, -1)}
                            disabled={index === 0}
                            aria-label="Team nach oben verschieben"
                          >
                            <IconArrowUp size={16} />
                          </ActionIcon>
                          <ActionIcon
                            variant="subtle"
                            onClick={() => moveTeam(index, 1)}
                            disabled={index === teams.length - 1}
                            aria-label="Team nach unten verschieben"
                          >
                            <IconArrowDown size={16} />
                          </ActionIcon>
                        </Group>
                        <ActionIcon
                          color="red"
                          variant="subtle"
                          mt={30}
                          onClick={() =>
                            setTeams((previous) =>
                              previous.length > 1
                                ? previous.filter((_, entryIndex) => entryIndex !== index)
                                : previous,
                            )
                          }
                        >
                          <IconTrash size={16} />
                        </ActionIcon>
                      </Group>
                    </Paper>
                  ))}
                </Stack>
                <Group>
                  <Button
                    variant="light"
                    onClick={() =>
                      setTeams((previous) => [
                        ...previous,
                        { name: `Team ${previous.length + 1}`, playerIds: [] },
                      ])
                    }
                  >
                    Team hinzufügen
                  </Button>
                  <Button onClick={handleSaveTournament}>Turnier speichern</Button>
                </Group>
              </Stack>
            </Paper>
            <Paper withBorder p="md" radius="md">
              <Stack gap="sm">
                <Group justify="space-between" align="start">
                  <Stack gap={2}>
                    <Title order={4}>Gruppen-Vorschau</Title>
                    <Text size="sm" c="dimmed">
                      Diese Verteilung wird beim Erzeugen der Gruppenphase verwendet.
                    </Text>
                  </Stack>
                  <Button variant="light" onClick={handleSaveTournament}>
                    Reihenfolge speichern
                  </Button>
                </Group>
                <SimpleGrid cols={{ base: 1, lg: Math.max(1, groupCount) }} spacing="md">
                  {groupPreview.map((group) => (
                    <Paper key={group.name} withBorder p="sm" radius="md">
                      <Stack gap="xs">
                        <Title order={5}>Gruppe {group.name}</Title>
                        {group.teams.length ? (
                          group.teams.map((team, index) => (
                            <Paper
                              key={`${group.name}-${team.id ?? team.name}-${team.index}`}
                              withBorder
                              p="xs"
                              radius="md"
                              draggable
                              onDragStart={(event) => {
                                event.dataTransfer.effectAllowed = "move";
                                event.dataTransfer.setData("text/plain", String(team.index));
                                setDraggedTeamIndex(team.index);
                              }}
                              onDragEnd={() => setDraggedTeamIndex(null)}
                              onDragOver={(event) => {
                                event.preventDefault();
                                event.dataTransfer.dropEffect = "move";
                              }}
                              onDrop={(event) => {
                                event.preventDefault();
                                const sourceIndex = Number(event.dataTransfer.getData("text/plain"));

                                if (Number.isNaN(sourceIndex)) {
                                  return;
                                }

                                swapTeams(sourceIndex, team.index);
                                setDraggedTeamIndex(null);
                              }}
                              style={{
                                cursor: "grab",
                                opacity: draggedTeamIndex === team.index ? 0.5 : 1,
                                borderColor:
                                  draggedTeamIndex === team.index ? "var(--mantine-color-blue-5)" : undefined,
                                backgroundColor:
                                  draggedTeamIndex === team.index ? "var(--mantine-color-blue-0)" : undefined,
                              }}
                            >
                              <Group gap="xs" wrap="nowrap" justify="space-between">
                                <Group gap="xs" wrap="nowrap">
                                  <IconGripVertical size={16} />
                                  <Badge variant="light">{index + 1}</Badge>
                                  <Text fw={600}>{team.name}</Text>
                                </Group>
                                <Text size="xs" c="dimmed">
                                  Ziehen
                                </Text>
                              </Group>
                            </Paper>
                          ))
                        ) : (
                          <Text size="sm" c="dimmed">
                            Noch keine Teams zugewiesen.
                          </Text>
                        )}
                      </Stack>
                    </Paper>
                  ))}
                </SimpleGrid>
              </Stack>
            </Paper>
            {tournament ? (
              <Group>
                <Button onClick={handleGenerateGroupMatches}>
                  Gruppenphase {groupMatchesExist ? "neu erzeugen" : "erzeugen"}
                </Button>
                <Button
                  variant="light"
                  color="grape"
                  disabled={!groupMatchesExist}
                  onClick={handleGenerateKnockoutMatches}
                >
                  K.-o.-Phase erzeugen
                </Button>
              </Group>
            ) : null}
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="groups" pt="md">
          {tournament ? (
            <Stack gap="md">
              <BeerPongGroupsOverview groups={tournament.groups} />
              {tournament.groups.map((group) =>
                group.matches.length > 0 ? (
                  <Stack key={group.name} gap="sm">
                    <Title order={4}>Bearbeitung Gruppe {group.name}</Title>
                    {group.matches.map((match) => (
                      <EditableMatchCard
                        key={match.id}
                        match={match}
                        onSave={handleSaveMatch}
                        onDelete={handleDeleteMatch}
                      />
                    ))}
                  </Stack>
                ) : null,
              )}
            </Stack>
          ) : (
            <Text c="dimmed">Bitte zuerst ein Turnier speichern.</Text>
          )}
        </Tabs.Panel>

        <Tabs.Panel value="knockout" pt="md">
          {tournament ? (
            <Stack gap="md">
              <BeerPongKnockoutOverview rounds={tournament.knockout} />
              <Group>
                <Button
                  color="grape"
                  onClick={handleGenerateKnockoutMatches}
                  disabled={!groupMatchesExist}
                >
                  K.-o.-Baum erzeugen
                </Button>
              </Group>
              <ScrollArea>
                <Group align="flex-start" wrap="nowrap" gap="lg" pb="sm">
                  {tournament.knockout.map((round) => (
                    <Stack key={round.round} gap="sm" miw={360}>
                      <Title order={4}>{round.name}</Title>
                      {round.matches.map((match) => (
                        <EditableMatchCard
                          key={match.id}
                          match={match}
                          onSave={handleSaveMatch}
                          onDelete={handleDeleteMatch}
                        />
                      ))}
                    </Stack>
                  ))}
                </Group>
              </ScrollArea>
            </Stack>
          ) : (
            <Text c="dimmed">Bitte zuerst ein Turnier speichern.</Text>
          )}
        </Tabs.Panel>
      </Tabs>

      {tournament?.teams.length ? (
        <Paper withBorder p="md" radius="md">
          <Stack gap="sm">
            <Title order={4}>Teams</Title>
            <Table withTableBorder>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>#</Table.Th>
                  <Table.Th>Team</Table.Th>
                  <Table.Th>Spieler</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {tournament.teams.map((team) => (
                  <Table.Tr key={team.id}>
                    <Table.Td>{team.seed}</Table.Td>
                    <Table.Td>{team.name}</Table.Td>
                    <Table.Td>
                      <Group gap="xs">
                        {team.players.map((player) => (
                          <Group key={player.id} gap={4} wrap="nowrap">
                            <Avatar src={player.avatar} size="xs" radius="xl" />
                            <Text size="sm">{player.displayName}</Text>
                          </Group>
                        ))}
                      </Group>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Stack>
        </Paper>
      ) : null}
    </Stack>
  );
}
