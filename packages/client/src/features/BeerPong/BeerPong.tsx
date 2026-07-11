import { Avatar, Group, Stack, Table, Tabs, Text, Title } from "@mantine/core";
import {
  IconBracket2,
  IconMedal,
  IconTable,
  IconTournament,
} from "@tabler/icons-react";
import { useQuery } from "urql";
import { graphql } from "../../gql";
import {
  BeerPongGroupsOverview,
  BeerPongKnockoutOverview,
  BeerPongMatchesOverview,
  type BeerPongTournamentMatch,
} from "./TournamentView";

const BeerPongTournamentQuery = graphql(`
  query beerPongTournamentPublic {
    beerPongTournament {
      id
      name
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
  }
`);

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

function buildLeaderboard(matches: BeerPongTournamentMatch[]) {
  const map = new Map<string, PlayerStats>();

  for (const match of matches) {
    if (!match.endedAt) continue;
    for (const player of match.players) {
      const previous = map.get(player.user.id) ?? {
        userId: player.user.id,
        displayName: player.user.displayName,
        avatar: player.user.avatar,
        matches: 0,
        hits: 0,
        throws: 0,
        bounceHits: 0,
        edges: 0,
        blocks: 0,
      };
      map.set(player.user.id, {
        ...previous,
        matches: previous.matches + 1,
        hits: previous.hits + player.hits,
        throws: previous.throws + player.throws,
        bounceHits: previous.bounceHits + player.bounceHits,
        edges: previous.edges + player.edges,
        blocks: previous.blocks + player.blocks,
      });
    }
  }

  return [...map.values()].sort((a, b) => {
    const rateA = a.throws > 0 ? a.hits / a.throws : 0;
    const rateB = b.throws > 0 ? b.hits / b.throws : 0;
    return rateB - rateA || b.hits - a.hits;
  });
}

function formatRate(hits: number, throws: number) {
  if (throws === 0) return "–";
  return `${((hits / throws) * 100).toFixed(1)}%`;
}

function PlayerLeaderboard({
  matches,
}: {
  matches: BeerPongTournamentMatch[];
}) {
  const players = buildLeaderboard(matches);

  if (players.length === 0) {
    return <Text c="dimmed">Noch keine abgeschlossenen Partien vorhanden.</Text>;
  }

  return (
    <Table striped withTableBorder highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>#</Table.Th>
          <Table.Th>Spieler</Table.Th>
          <Table.Th>Partien</Table.Th>
          <Table.Th>Treffer</Table.Th>
          <Table.Th>Würfe</Table.Th>
          <Table.Th>Quote</Table.Th>
          <Table.Th>Bounce</Table.Th>
          <Table.Th>Kanten</Table.Th>
          <Table.Th>Abwehr</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {players.map((player, index) => (
          <Table.Tr key={player.userId}>
            <Table.Td>{index + 1}</Table.Td>
            <Table.Td>
              <Group gap="xs" wrap="nowrap">
                <Avatar src={player.avatar} size="sm" radius="xl" />
                <Text fw={600}>{player.displayName}</Text>
              </Group>
            </Table.Td>
            <Table.Td>{player.matches}</Table.Td>
            <Table.Td>{player.hits}</Table.Td>
            <Table.Td>{player.throws}</Table.Td>
            <Table.Td>{formatRate(player.hits, player.throws)}</Table.Td>
            <Table.Td>{player.bounceHits}</Table.Td>
            <Table.Td>{player.edges}</Table.Td>
            <Table.Td>{player.blocks}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}

export function BeerPong() {
  const [{ data }] = useQuery({ query: BeerPongTournamentQuery });
  const tournament = data?.beerPongTournament;

  if (!tournament) {
    return (
      <Stack>
        <Title order={3}>🍺 Bierpong</Title>
        <Text c="dimmed">Es ist aktuell noch kein Turnier konfiguriert.</Text>
      </Stack>
    );
  }

  return (
    <Stack>
      <Title order={3}>🍺 {tournament.name}</Title>
      <Tabs defaultValue="groups">
        <Tabs.List>
          <Tabs.Tab value="groups" leftSection={<IconTournament size={16} />}>
            Gruppen
          </Tabs.Tab>
          <Tabs.Tab value="knockout" leftSection={<IconBracket2 size={16} />}>
            K.-o.-Baum
          </Tabs.Tab>
          <Tabs.Tab value="matches" leftSection={<IconTable size={16} />}>
            Partien
          </Tabs.Tab>
          <Tabs.Tab value="players" leftSection={<IconMedal size={16} />}>
            Spielerstats
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="groups" pt="md">
          <BeerPongGroupsOverview groups={tournament.groups} />
        </Tabs.Panel>
        <Tabs.Panel value="knockout" pt="md">
          <BeerPongKnockoutOverview rounds={tournament.knockout} />
        </Tabs.Panel>
        <Tabs.Panel value="matches" pt="md">
          <BeerPongMatchesOverview matches={tournament.matches} />
        </Tabs.Panel>
        <Tabs.Panel value="players" pt="md">
          <PlayerLeaderboard matches={tournament.matches} />
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}
