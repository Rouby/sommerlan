import {
  ActionIcon,
  Alert,
  Avatar,
  Badge,
  Box,
  Button,
  Checkbox,
  Divider,
  Group,
  Loader,
  LoadingOverlay,
  Menu,
  PasswordInput,
  Popover,
  Skeleton,
  Stack,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import {
  IconCheck,
  IconHourglassLow,
  IconMan,
  IconPlus,
} from "@tabler/icons-react";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";
import { Fragment, useEffect, useReducer, useState } from "react";
import { useMutation, useQuery } from "urql";
import { Can, UserAvatar } from ".";
import { graphql } from "../gql";
import { userAtom } from "../state";
import { formatRange } from "../utils";

export function NextPartyAttending() {
  return (
    <>
      <Countdown />

      <Rooms />

      <Attendings />
    </>
  );
}

function Countdown() {
  const [{ data, fetching }] = useQuery({
    query: graphql(`
      query nextPartyCountdown {
        nextParty {
          id
          startDate
          endDate
        }
      }
    `),
  });

  const { nextParty } = data ?? {};

  const [, rerender] = useReducer((x) => x + 1, 0);
  const { start, stop } = useInterval(() => {
    rerender();
  }, 1000);

  useEffect(() => {
    if (!nextParty) return;
    start();
    return () => stop();
  }, [nextParty]);

  if (fetching || !nextParty) {
    return <Skeleton />;
  }

  const startDate = dayjs(nextParty.startDate, "YYYY-MM-DD").add(12, "hours");
  const endDate = dayjs(nextParty.endDate, "YYYY-MM-DD").add(20, "hours");

  const numberFormat = new Intl.NumberFormat();

  const parts = [
    [startDate.diff(dayjs(), "months"), "Monate"] as const,
    [startDate.diff(dayjs(), "days"), "Tage"] as const,
    [startDate.diff(dayjs(), "hours"), "Stunden"] as const,
    [startDate.diff(dayjs(), "minutes"), "Minuten"] as const,
    [startDate.diff(dayjs(), "seconds"), "Sekunden"] as const,
  ].filter(([value]) => value > 0);

  return (
    <>
      <Text>
        Die nächste Party ist{" "}
        <strong>vom {formatRange(startDate.toDate(), endDate.toDate())}</strong>
      </Text>
      {parts.map(([value, unit], idx) => (
        <Text key={unit}>
          {idx === 0 ? "Das sind noch " : "... oder "}
          <strong>{numberFormat.format(value)}</strong> {unit}
        </Text>
      ))}
    </>
  );
}

function Rooms() {
  const user = useAtomValue(userAtom)!;

  const [{ data, fetching }] = useQuery({
    query: graphql(`
      query nextPartyRooms {
        nextParty {
          id
          roomsAvailable
          attendings {
            id
            room
            user {
              id
              displayName
              avatar
            }
          }
        }
      }
    `),
  });

  const { nextParty } = data ?? {};

  const myAttending = nextParty?.attendings.find(
    (attending) => attending.user.id === user.id
  );

  const [{ fetching: requesting }, requestRoom] = useMutation(
    graphql(`
      mutation requestRoom($partyId: ID!) {
        requestRoom(partyId: $partyId) {
          id
          dates
          room
          user {
            id
            displayName
            avatar
          }
        }
      }
    `)
  );
  const [{ fetching: recinding }, recindRoom] = useMutation(
    graphql(`
      mutation recindRoom($partyId: ID!) {
        recindRoom(partyId: $partyId) {
          id
          dates
          room
          user {
            id
            displayName
            avatar
          }
        }
      }
    `)
  );

  const isRequestingRoom = myAttending?.room === "REQUESTED";
  const isGrantedRoom = myAttending?.room === "GRANTED";

  if (!nextParty?.roomsAvailable) return null;

  return (
    <>
      <Button
        loading={fetching || requesting || recinding}
        variant={!isGrantedRoom ? "light" : "filled"}
        color={isGrantedRoom ? "green" : "blue"}
        fullWidth
        mt="md"
        radius="md"
        leftIcon={
          isGrantedRoom ? (
            <IconCheck />
          ) : isRequestingRoom ? (
            <IconHourglassLow />
          ) : undefined
        }
        onClick={() =>
          (isRequestingRoom ? requestRoom : recindRoom)({
            partyId: nextParty.id,
          })
        }
      >
        Ich würde gerne einen Raum haben
      </Button>

      <Can I="grantRoom" an="Attending">
        {nextParty.attendings
          .filter((attending) => attending.room === "REQUESTED")
          .map((attending) => (
            <RoomRequest
              key={attending.id}
              attendingId={attending.id}
              user={attending.user}
            />
          ))}
      </Can>
    </>
  );
}

function RoomRequest({
  attendingId,
  user,
}: {
  attendingId: string;
  user: { id: string; displayName: string; avatar: string };
}) {
  const [{ fetching: granting }, grantRoom] = useMutation(
    graphql(`
      mutation grantRoom($attendingId: ID!) {
        grantRoom(attendingId: $attendingId) {
          id
          room
        }
      }
    `)
  );
  const [{ fetching: denying }, denyRoom] = useMutation(
    graphql(`
      mutation denyRoom($attendingId: ID!) {
        denyRoom(attendingId: $attendingId) {
          id
          room
        }
      }
    `)
  );

  return (
    <Box
      m="sm"
      sx={(theme) => ({
        display: "grid",
        gridTemplateColumns: "max-content max-content auto auto",
        gap: theme.spacing.sm,
        alignItems: "center",
      })}
    >
      <UserAvatar user={user} />
      {user.displayName} will einen Raum
      <Button
        loading={granting}
        onClick={() => grantRoom({ attendingId })}
        disabled={denying}
      >
        Ok
      </Button>
      <Button
        loading={denying}
        onClick={() => denyRoom({ attendingId })}
        disabled={granting}
      >
        Ablehnen
      </Button>
    </Box>
  );
}

function Attendings() {
  const user = useAtomValue(userAtom)!;

  const [{ data, fetching }] = useQuery({
    query: graphql(`
      query nextPartyAttending {
        nextParty {
          id
          startDate
          endDate
          roomsAvailable
          attendings {
            id
            dates
            room
            user {
              id
              displayName
              avatar
            }
          }
        }
      }
    `),
  });

  const [, setAttendance] = useMutation(
    graphql(`
      mutation setAttendance($partyId: ID!, $dates: [Date!]!) {
        setAttendance(partyId: $partyId, dates: $dates) {
          id
          attendings {
            id
            dates
          }
        }
      }
    `)
  );

  const { nextParty } = data ?? {};

  const startDate = dayjs(nextParty?.startDate, "YYYY-MM-DD").add(12, "hours");
  const endDate = dayjs(nextParty?.endDate, "YYYY-MM-DD").add(20, "hours");

  const dates = !fetching
    ? Array.from({ length: endDate.diff(startDate, "days") + 1 }, (_, i) =>
        startDate.add(i, "day")
      )
    : [dayjs(0), dayjs(1), dayjs(2)];

  const myAttending = nextParty?.attendings.find(
    (attending) => attending.user.id === user.id
  );

  return (
    <Checkbox.Group
      size="lg"
      value={myAttending?.dates}
      onChange={(dates) => {
        nextParty &&
          setAttendance({
            partyId: nextParty.id,
            dates,
            // @ts-expect-error
            attendingId: myAttending?.id,
          });
      }}
    >
      <Box
        p="xs"
        sx={(theme) => ({
          display: "grid",
          gridTemplateColumns: "auto auto auto 1fr",
          columnGap: theme.spacing.md,
          rowGap: theme.spacing.sm,
          alignItems: "center",
          fontSize: theme.fontSizes.lg,

          [theme.fn.smallerThan("xs")]: {
            gridTemplateColumns: "auto auto 1fr",

            "& > *:nth-of-type(5n)": {
              gridColumn: "1 / span 3",
            },
          },
        })}
      >
        {dates.map((date, idx) => {
          if (!nextParty) {
            return (
              <Skeleton
                key={idx}
                height={40}
                width="100%"
                sx={(theme) => ({
                  gridColumn: "1 / span 4",
                  [theme.fn.smallerThan("xs")]: {
                    gridColumn: "1 / span 3",
                  },
                })}
              />
            );
          }

          const attendingsOnDate = nextParty.attendings.filter((attending) =>
            attending.dates.includes(date.format("YYYY-MM-DD"))
          );
          return (
            <Fragment key={date.toString()}>
              <Box sx={{ whiteSpace: "nowrap" }}>{date.format("ddd, L")}</Box>

              <Checkbox value={date.format("YYYY-MM-DD")} />

              <AddUserMenu
                attendings={nextParty.attendings}
                partyId={nextParty.id}
                date={date.format("YYYY-MM-DD")}
              />

              <Tooltip.Group openDelay={300} closeDelay={100}>
                <Avatar.Group spacing="sm" sx={{ flexWrap: "wrap" }}>
                  {attendingsOnDate.map((attending) => (
                    <UserAvatar key={attending.id} user={attending.user} />
                  ))}
                </Avatar.Group>
              </Tooltip.Group>

              <Box
                sx={(theme) => ({
                  gridColumn: "1 / span 4",
                  [theme.fn.smallerThan("xs")]: {
                    gridColumn: "1 / span 3",
                  },
                })}
              >
                <Group>
                  {nextParty.roomsAvailable ? (
                    <Badge>
                      {nextParty.roomsAvailable -
                        attendingsOnDate.filter((att) => att.room === "GRANTED")
                          .length}{" "}
                      / {nextParty.roomsAvailable} rooms available
                    </Badge>
                  ) : null}
                  <Badge>{attendingsOnDate.length} an diesem Tag da</Badge>
                </Group>
                <Divider mt="sm" />
              </Box>
            </Fragment>
          );
        })}
      </Box>
    </Checkbox.Group>
  );
}

function AddUserMenu({
  partyId,
  date,
  attendings,
}: {
  partyId: string;
  date: string;
  attendings: { id: string; dates: string[]; user: { id: string } }[];
}) {
  const [addUserOpen, setAddUserOpen] = useState(false);

  return (
    <Can I="update" a="Party" otherwise={<div />}>
      <Menu
        width={300}
        position="bottom-start"
        shadow="lg"
        withArrow
        withinPortal
      >
        <Menu.Target>
          <ActionIcon radius="xl" variant="default">
            <IconPlus size="1rem" />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown sx={{ overflow: "hidden auto", maxHeight: 340 }}>
          <Menu.Label>Nutzer</Menu.Label>
          <MenuOptions attendings={attendings} partyId={partyId} date={date} />

          <Box
            sx={(theme) => ({
              position: "sticky",
              bottom: 0,
              background:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[6]
                  : theme.white,
            })}
          >
            <Menu.Divider />

            <Popover
              width="100%"
              position="top"
              shadow="lg"
              opened={addUserOpen}
              onClose={() => setAddUserOpen(false)}
            >
              <Popover.Target>
                <Menu.Item
                  icon={<IconMan size={24} />}
                  closeMenuOnClick={false}
                  onClick={() => setAddUserOpen(!addUserOpen)}
                >
                  Neuen Nutzer anlegen
                </Menu.Item>
              </Popover.Target>
              <Popover.Dropdown>
                <AddUserForm onAdd={() => setAddUserOpen(false)} />
              </Popover.Dropdown>
            </Popover>
          </Box>
        </Menu.Dropdown>
      </Menu>
    </Can>
  );
}

function AddUserForm({ onAdd }: { onAdd: () => void }) {
  const [{ fetching, error }, register] = useMutation(
    graphql(`
      mutation registerExternal(
        $userName: String!
        $email: String!
        $password: String
      ) {
        register(userName: $userName, email: $email, password: $password) {
          token
          refreshToken
          user {
            id
            displayName
            avatar
          }
        }
      }
    `)
  );

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        const userName = form["username"].value;
        const email = form["email"].value;
        const password = form["new-password"].value;

        await register({ userName, email, password });

        (event.target as HTMLFormElement).reset();

        onAdd();
      }}
    >
      <LoadingOverlay visible={fetching} />

      <Alert mb="md" hidden={!error} color="red">
        {error?.message}
      </Alert>

      <Stack>
        <TextInput
          required
          name="username"
          autoComplete="username"
          placeholder="Nutzername"
        />

        <TextInput
          required
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Email-Adresse"
        />

        <PasswordInput
          name="new-password"
          autoComplete="new-password"
          placeholder="Passwort"
        />

        <Button type="submit">Nutzer erstellen</Button>
      </Stack>
    </form>
  );
}

function MenuOptions({
  partyId,
  date,
  attendings,
}: {
  partyId: string;
  date: string;
  attendings: { id: string; dates: string[]; user: { id: string } }[];
}) {
  const [{ data, fetching }] = useQuery({
    query: graphql(`
      query userList {
        users {
          id
          displayName
          avatar
        }
      }
    `),
  });

  return (
    <>
      <LoadingOverlay visible={fetching} />
      {data?.users.map((user) => (
        <MenuItem
          key={user.id}
          user={user}
          attending={attendings.find((att) => att.user.id === user.id)}
          partyId={partyId}
          date={date}
        />
      ))}
    </>
  );
}

function MenuItem({
  partyId,
  date,
  attending,
  user,
}: {
  partyId: string;
  date: string;
  attending?: { id: string; dates: string[]; user: { id: string } };
  user: { id: string; avatar: string; displayName: string };
}) {
  const [{ fetching }, setAttendance] = useMutation(
    graphql(`
      mutation setOthersAttendance(
        $partyId: ID!
        $userId: ID
        $dates: [Date!]!
      ) {
        setAttendance(partyId: $partyId, userId: $userId, dates: $dates) {
          id
          attendings {
            id
            dates
          }
        }
      }
    `)
  );

  return (
    <Menu.Item
      icon={<UserAvatar user={user} size={32} />}
      onClick={() =>
        setAttendance({
          partyId,
          dates: (attending?.dates.includes(date)
            ? attending.dates.filter((d) => d !== date)
            : [...(attending?.dates ?? []), date]
          ).sort(),
          userId: user.id,
          // @ts-expect-error
          attendingId: attending?.id,
        })
      }
      closeMenuOnClick={false}
      rightSection={
        fetching ? (
          <Loader size={24} />
        ) : attending?.dates.includes(date) ? (
          <IconCheck />
        ) : null
      }
    >
      {user.displayName}
    </Menu.Item>
  );
}
