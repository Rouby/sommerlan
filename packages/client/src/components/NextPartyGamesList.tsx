import {
  Avatar,
  Box,
  Center,
  Divider,
  Group,
  Indicator,
  Loader,
  MultiSelect,
  Text,
  Tooltip,
} from "@mantine/core";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";
import { Fragment, forwardRef } from "react";
import { userAtom } from "../state";
import { trpc } from "../utils";

export function NextPartyGamesList() {
  const user = useAtomValue(userAtom);
  const { data, isLoading } = trpc.party.gamesPlayed.useQuery({});
  const context = trpc.useContext();
  const { mutate: addGameToParty } = trpc.party.addGameToParty.useMutation({
    onSuccess: (game) => {
      context.party.gamesPlayed.setData(
        {},
        (prev) =>
          prev && {
            ...prev,
            games: [...prev.games, game],
          }
      );
    },
  });
  const { mutate: setGamePlayed } = trpc.party.setGamePlayed.useMutation({
    onSuccess: (game) => {
      context.party.gamesPlayed.setData(
        {},
        (prev) =>
          prev && {
            ...prev,
            games: prev.games.map((old) => (old.id === game.id ? game : old)),
          }
      );
    },
  });

  if (isLoading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  if (!data) {
    return <Center>No Party planned</Center>;
  }

  const { party, games } = data;

  const startDate = dayjs(party.startDate, "YYYY-MM-DD");
  const endDate = dayjs(party.endDate, "YYYY-MM-DD");

  const dates = Array.from(
    { length: endDate.diff(startDate, "days") + 1 },
    (_, i) => startDate.add(i, "day")
  );

  const gamesPlayed = data.games
    .filter((game) => game.players.some((player) => player.id === user?.id))
    .map((game) => game.id as string);

  return (
    <>
      <MultiSelect
        label="Spiele die ich spielen will:"
        value={gamesPlayed}
        onChange={(gameIds) => {
          const added = gameIds.filter((id) => !gamesPlayed.includes(id));
          const removed = gamesPlayed.filter((id) => !gameIds.includes(id));

          added.forEach((gameId) => {
            setGamePlayed({ gameId, partyId: party.id, played: true });
          });
          removed.forEach((gameId) => {
            setGamePlayed({ gameId, partyId: party.id, played: false });
          });
        }}
        data={data.games.map((game) => ({
          value: game.id,
          label: game.name,
          image: game.imageUrl,
        }))}
        itemComponent={GameItem}
        searchable
        creatable
        getCreateLabel={(query) => `+ ${query} zur Liste hinzufügen`}
        onCreate={(query) => {
          addGameToParty({ name: query, partyId: party.id });
          return { value: "" };
        }}
      />
      <Box
        p="xs"
        sx={(theme) => ({
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          columnGap: theme.spacing.md,
          rowGap: theme.spacing.sm,
          alignItems: "center",

          [theme.fn.smallerThan("xs")]: {
            gridTemplateColumns: "1fr",
          },
        })}
      >
        {dates.map((date, idx, arr) => {
          const attendingsOnDate = party.attendings.filter((attending) =>
            attending.dates.includes(date.format("YYYY-MM-DD"))
          );
          const gamesOnDate = games
            .map((game) => ({
              ...game,
              players: game.players.filter((player) =>
                attendingsOnDate.some(
                  (attending) => attending.user.id === player.id
                )
              ),
            }))
            .filter((game) => game.players.length > 0);
          return (
            <Fragment key={date.toString()}>
              <Box sx={{ whiteSpace: "nowrap" }}>{date.format("ddd, L")}</Box>

              <Tooltip.Group openDelay={300} closeDelay={100}>
                <Avatar.Group spacing="sm" sx={{ flexWrap: "wrap" }}>
                  {gamesOnDate.map((game) => (
                    <Tooltip key={game.id} label={game.name} withArrow>
                      <Indicator
                        position="top-start"
                        label={`${game.players.length} Spieler`}
                        size={26}
                        offset={8}
                      >
                        <Avatar radius="xl" src={game.imageUrl} size="xl">
                          {game.name
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                        </Avatar>
                      </Indicator>
                    </Tooltip>
                  ))}
                </Avatar.Group>
              </Tooltip.Group>

              {idx < arr.length - 1 && (
                <Divider
                  sx={(theme) => ({
                    gridColumn: "1 / span 2",
                    [theme.fn.smallerThan("xs")]: {
                      gridColumn: "1",
                    },
                  })}
                />
              )}
            </Fragment>
          );
        })}
      </Box>
    </>
  );
}

const GameItem = forwardRef(function GameItem(
  { image, label, ...props }: { image: string; label: string },
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <div ref={ref} {...props}>
      <Group noWrap>
        <Avatar radius="xl" src={image}>
          {label
            .split(" ")
            .map((name) => name[0])
            .join("")}
        </Avatar>

        <Text size="sm">{label}</Text>
      </Group>
    </div>
  );
});
