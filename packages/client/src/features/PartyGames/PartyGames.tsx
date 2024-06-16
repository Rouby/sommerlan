import {
  Avatar,
  Box,
  Divider,
  Indicator,
  Popover,
  Skeleton,
  Tooltip,
} from "@mantine/core";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";
import { Fragment } from "react";
import { useMutation, useQuery } from "urql";
import { UserAvatar } from "../../components";
import { graphql } from "../../gql";
import { userAtom } from "../../state";
import { GamesCombobox } from "./GamesCombobox";

export function PartyGames({ partyId }: { partyId?: string }) {
  const user = useAtomValue(userAtom)!;

  const [{ data, fetching }] = useQuery({
    query: graphql(`
      query partyGames($partyId: ID!, $nextParty: Boolean!) {
        nextParty @include(if: $nextParty) {
          id
          startDate
          endDate
          attendings {
            id
            dates
            user {
              id
              displayName
              avatar
            }
            gamesPlayed {
              id
              name
              image
            }
          }
        }

        party(id: $partyId) @skip(if: $nextParty) {
          id
          startDate
          endDate
          attendings {
            id
            dates
            user {
              id
              displayName
              avatar
            }
            gamesPlayed {
              id
              name
              image
            }
          }
        }

        games {
          id
          name
          image
        }
      }
    `),
    variables: {
      partyId: partyId ?? "",
      nextParty: !partyId,
    },
  });

  const { nextParty, party: specificParty, games } = data ?? {};
  const party = nextParty ?? specificParty;

  const startDate = dayjs(party?.startDate, "YYYY-MM-DD");
  const endDate = dayjs(party?.endDate, "YYYY-MM-DD");

  const dates = party
    ? Array.from({ length: endDate.diff(startDate, "days") + 1 }, (_, i) =>
        startDate.add(i, "day"),
      )
    : [dayjs(0), dayjs(1), dayjs(2)];

  const myAttending = party?.attendings.find(
    (attending) => attending.user.id === user.id,
  );

  const gamesPlayedByMe = myAttending?.gamesPlayed.map(
    (game) => game.id as string,
  );

  const [, addGameToParty] = useMutation(
    graphql(`
      mutation addGameToParty($name: String!, $partyId: ID!) {
        addGameToParty(name: $name, partyId: $partyId) {
          game {
            id
            name
            image
          }
          attending {
            id
            gamesPlayed {
              id
              name
              image
            }
          }
        }
      }
    `),
  );

  const [, setGamesPlayed] = useMutation(
    graphql(`
      mutation setGamesPlayed($partyId: ID!, $gameIds: [ID!]!) {
        setGamesPlayed(partyId: $partyId, gameIds: $gameIds) {
          id
          gamesPlayed {
            id
            name
            image
          }
        }
      }
    `),
  );

  return (
    <>
      <GamesCombobox
        loading={fetching}
        value={gamesPlayedByMe ?? []}
        games={games ?? []}
        onChange={(gameIds) => {
          setGamesPlayed({
            partyId: party!.id,
            gameIds,
          });
        }}
        onCreate={(name) => {
          addGameToParty({
            partyId: party!.id,
            name,
          });
        }}
      />
      <Box
        p="xs"
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          columnGap: "var(--mantine-spacing-md)",
          rowGap: "var(--mantine-spacing-sm)",
          alignItems: "center",

          // [theme.fn.smallerThan("xs")]: {
          //   gridTemplateColumns: "1fr",
          // },
        }}
      >
        {dates.map((date, idx, arr) => {
          if (!party) {
            return (
              <Skeleton
                key={idx}
                height={40}
                width="100%"
                style={{
                  gridColumn: "1 / span 4",
                  // TODO fix this
                  // [theme.fn.smallerThan("xs")]: {
                  //   gridColumn: "1 / span 3",
                  // },
                }}
              />
            );
          }

          const attendingsOnDate = party.attendings.filter((attending) =>
            attending.dates.includes(date.format("YYYY-MM-DD")),
          );
          const gamesOnDate = attendingsOnDate
            .flatMap((attending) =>
              attending.gamesPlayed.map((game) => ({
                ...game,
                player: attending.user,
              })),
            )
            .reduce(
              (acc, game) => {
                const gamePlayed = acc.find((g) => g.id === game.id);
                if (!gamePlayed) {
                  acc.push({ ...game, players: [game.player] });
                } else {
                  gamePlayed.players.push(game.player);
                }
                return acc;
              },
              [] as {
                id: string;
                name: string;
                image: string;
                players: { id: string; displayName: string; avatar: string }[];
              }[],
            );
          return (
            <Fragment key={date.toString()}>
              <Box style={{ whiteSpace: "nowrap" }}>
                {date.format("ddd, L")}
              </Box>

              <Tooltip.Group openDelay={300} closeDelay={100}>
                <Avatar.Group spacing="sm" style={{ flexWrap: "wrap" }}>
                  {gamesOnDate.map((game) => (
                    <Popover key={game.id}>
                      <Popover.Target>
                        <Tooltip label={game.name} withArrow>
                          <Indicator
                            position="top-start"
                            label={`${game.players.length} Spieler`}
                            size={26}
                            offset={8}
                          >
                            <Avatar radius="xl" src={game.image} size="xl">
                              {game.name
                                .split(" ")
                                .map((name) => name[0])
                                .join("")}
                            </Avatar>
                          </Indicator>
                        </Tooltip>
                      </Popover.Target>
                      <Popover.Dropdown>
                        <Avatar.Group>
                          {game.players.map((player) => (
                            <UserAvatar key={player.id} user={player} />
                          ))}
                        </Avatar.Group>
                      </Popover.Dropdown>
                    </Popover>
                  ))}
                </Avatar.Group>
              </Tooltip.Group>

              {idx < arr.length - 1 && (
                <Divider
                  style={{
                    gridColumn: "1 / span 2",
                    // TODO fix this
                    // [theme.fn.smallerThan("xs")]: {
                    //   gridColumn: "1",
                    // },
                  }}
                />
              )}
            </Fragment>
          );
        })}
      </Box>
    </>
  );
}
