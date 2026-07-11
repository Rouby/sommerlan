import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Group,
  MultiSelect,
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
  IconBracket2,
  IconMinus,
  IconPlus,
  IconRefresh,
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

type StatKey = "hits" | "edges" | "blocks" | "throws" | "bounceHits";

const STAT_LABELS: Record<StatKey, string> = {
  throws: "Würfe",
  hits: "Treffer",
  bounceHits: "Bounce",
  edges: "Kanten",
  blocks: "Abwehr",
};

const STAT_ORDER: StatKey[] = ["throws", "hits", "bounceHits", "edges", "blocks"];

function createDefaultTeams() {
  return Array.from({ length: 8 }, (_, index) => ({
    name: `Team ${index + 1}`,
    playerIds: [],
  }));
}

function toTeamForms(
  tournament: NonNullable<
    NonNullable<
      ReturnType<typeof useQuery<typeof BeerPongTournamentQuery>>[0]["data"]
    >["beerPongTournament"]
  >,
) {
  return tournament.teams.map((team) => ({
    id: team.id,
    name: team.name,
    playerIds: team.players.map((player) => player.id),
  }));
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
  const [playerStats, setPlayerStats] = useState<
    Record<string, { hits: number; edges: number; blocks: number; throws: number; bounceHits: number }>
  >({});
  const [remainingBeers, setRemainingBeers] = useState<Record<string, number>>({});
  const [winnerTeamId, setWinnerTeamId] = useState<string | null>(null);

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
  }, [match]);

  async function handleSave(isFinished = false) {
    await onSave({
      matchId: match.id,
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

  async function handleRefetch() {
    setErrorMessage(null);
    await refetch({ requestPolicy: "network-only" });
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
          <Tabs.Tab value="knockout" leftSection={<IconBracket2 size={16} />}>
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
