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
import { IconCheck, IconMan, IconPlus } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";
import { Fragment, useState } from "react";
import { useMutation, useQuery } from "urql";
import { Can, UserAvatar } from "../../components";
import { graphql } from "../../gql";
import { userAtom } from "../../state";
import classes from "./styles.module.css";

export function PartyAttendings() {
  const user = useAtomValue(userAtom)!;

  const [{ data, fetching }] = useQuery({
    query: graphql(`
      query partyAttending {
        nextParty {
          id
          tentative
          startDate
          endDate
          roomsAvailable
          seatsAvailable
          registrationDeadline
          attendings {
            id
            dates
            room
            applicationDate
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
    `),
  );
  const [, removeAttendance] = useMutation(
    graphql(`
      mutation removeAttendance($partyId: ID!) {
        removeAttendance(partyId: $partyId) {
          id
          attendings {
            id
            dates
          }
        }
      }
    `),
  );

  const startDate = dayjs(data?.nextParty?.startDate, "YYYY-MM-DD").add(
    12,
    "hours",
  );
  const endDate = dayjs(data?.nextParty?.endDate, "YYYY-MM-DD").add(
    20,
    "hours",
  );

  const dates = !fetching
    ? Array.from({ length: endDate.diff(startDate, "days") + 1 }, (_, i) =>
        startDate.add(i, "day"),
      )
    : [dayjs(0), dayjs(1), dayjs(2)];

  const myAttending = data?.nextParty?.attendings.find(
    (attending) => attending.user.id === user.id,
  );

  const applicationAllowed = data?.nextParty?.registrationDeadline
    ? !dayjs().startOf("day").isAfter(data?.nextParty.registrationDeadline)
    : true;

  return (
    <>
      {data?.nextParty?.tentative ? (
        <Text size="lg" mt="sm">
          Angaben beziehen sich auf den aktuellen Zeitraum vorschlag. Dieser
          kann sich unter Umständen noch ändern.
        </Text>
      ) : null}
      <Checkbox.Group
        size="lg"
        value={myAttending?.dates}
        onChange={(dates) => {
          data?.nextParty &&
            setAttendance({
              partyId: data.nextParty.id,
              dates,
              // @ts-expect-error
              attendingId: myAttending?.id,
            });
        }}
      >
        <Box p="xs" className={classes.attendings}>
          {dates.map((date, idx) => {
            if (!data?.nextParty) {
              return (
                <Skeleton
                  key={idx}
                  height={40}
                  width="100%"
                  className={classes.skeleton}
                />
              );
            }

            const attendingsOnDate = data?.nextParty.attendings.filter(
              (attending) =>
                attending.dates.includes(date.format("YYYY-MM-DD")),
            );
            return (
              <Fragment key={date.toString()}>
                <Text id={`date-label-${idx}`}>{date.format("ddd, L")}</Text>

                <Checkbox
                  aria-labelledby={`date-label-${idx}`}
                  value={date.format("YYYY-MM-DD")}
                  disabled={!applicationAllowed}
                />

                <AddUserMenu
                  attendings={data?.nextParty.attendings}
                  partyId={data?.nextParty.id}
                  date={date.format("YYYY-MM-DD")}
                />

                <Tooltip.Group openDelay={300} closeDelay={100}>
                  <Avatar.Group spacing="sm" style={{ flexWrap: "wrap" }}>
                    {attendingsOnDate.map((attending) => (
                      <UserAvatar key={attending.id} user={attending.user} />
                    ))}
                  </Avatar.Group>
                </Tooltip.Group>

                <Box className={classes.tags}>
                  <Group>
                    {data?.nextParty.roomsAvailable ? (
                      <Badge>
                        {data?.nextParty.roomsAvailable -
                          attendingsOnDate.filter(
                            (att) => att.room === "GRANTED",
                          ).length}{" "}
                        / {data?.nextParty.roomsAvailable} rooms available
                      </Badge>
                    ) : null}
                    <Badge
                      color={
                        attendingsOnDate.length > data?.nextParty.seatsAvailable
                          ? "orange"
                          : "green"
                      }
                    >
                      {attendingsOnDate.length} /{" "}
                      {data?.nextParty.seatsAvailable} an diesem Tag da
                    </Badge>
                  </Group>
                  <Divider mt="sm" />
                </Box>
              </Fragment>
            );
          })}
        </Box>
      </Checkbox.Group>
      {data?.nextParty && (
        <>
          <Checkbox
            label="Ich bin nicht dabei"
            disabled={!applicationAllowed}
            checked={myAttending?.dates.length === 0}
            onChange={({ target: { checked } }) => {
              data?.nextParty &&
                (checked
                  ? setAttendance({
                      partyId: data?.nextParty.id,
                      dates: [],
                      // @ts-expect-error
                      attendingId: myAttending?.id,
                    })
                  : removeAttendance({
                      partyId: data?.nextParty.id,
                      // @ts-expect-error
                      attendingId: myAttending?.id,
                    }));
            }}
          />
          Leider nicht dabei:
          <Tooltip.Group openDelay={300} closeDelay={100}>
            <Avatar.Group spacing="sm" style={{ flexWrap: "wrap" }}>
              {data?.nextParty.attendings
                .filter((a) => a.dates.length === 0)
                .map((attending) => (
                  <UserAvatar key={attending.id} user={attending.user} />
                ))}
            </Avatar.Group>
          </Tooltip.Group>
        </>
      )}
    </>
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

        <Menu.Dropdown mah={340} style={{ overflow: "hidden auto" }}>
          <Menu.Label>Nutzer</Menu.Label>
          <MenuOptions attendings={attendings} partyId={partyId} date={date} />

          <Box pos="sticky" bottom={0} bg="dark">
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
                  leftSection={<IconMan size={24} />}
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
    `),
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
    `),
  );

  return (
    <Menu.Item
      leftSection={<UserAvatar user={user} size={32} />}
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
