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
  TextInput,
  Tooltip,
} from "@mantine/core";
import { IconCheck, IconMan, IconPlus } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";
import { Fragment, useState } from "react";
import { useMutation, useQuery } from "urql";
import { Can, UserAvatar } from ".";
import { graphql, useFragment } from "../gql";
import { userAtom } from "../state";

export function PartyAttendings({ partyId }: { partyId?: string }) {
  const user = useAtomValue(userAtom)!;

  const PartyAttendingInfo = graphql(`
    fragment PartyAttendingInfo on Party {
      id
      startDate
      endDate
      roomsAvailable
      seatsAvailable
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
  `);

  const [{ data, fetching }] = useQuery({
    query: graphql(`
      query partyAttending($nextParty: Boolean!, $partyId: ID!) {
        nextParty @include(if: $nextParty) {
          ...PartyAttendingInfo
        }

        party(id: $partyId) @skip(if: $nextParty) {
          ...PartyAttendingInfo
        }
      }
    `),
    variables: {
      nextParty: !partyId,
      partyId: partyId ?? "",
    },
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

  const { nextParty, party: specificParty } = data ?? {};
  const party = useFragment(PartyAttendingInfo, nextParty ?? specificParty);

  const startDate = dayjs(party?.startDate, "YYYY-MM-DD").add(12, "hours");
  const endDate = dayjs(party?.endDate, "YYYY-MM-DD").add(20, "hours");

  const dates = !fetching
    ? Array.from({ length: endDate.diff(startDate, "days") + 1 }, (_, i) =>
        startDate.add(i, "day"),
      )
    : [dayjs(0), dayjs(1), dayjs(2)];

  const myAttending = party?.attendings.find(
    (attending) => attending.user.id === user.id,
  );

  return (
    <>
      <Checkbox.Group
        size="lg"
        value={myAttending?.dates}
        onChange={(dates) => {
          party &&
            setAttendance({
              partyId: party.id,
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

              "& > *:nth(5n)": {
                gridColumn: "1 / span 3",
              },
            },
          })}
        >
          {dates.map((date, idx) => {
            if (!party) {
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

            const attendingsOnDate = party.attendings.filter((attending) =>
              attending.dates.includes(date.format("YYYY-MM-DD")),
            );
            return (
              <Fragment key={date.toString()}>
                <Box id={`date-label-${idx}`} sx={{ whiteSpace: "nowrap" }}>
                  {date.format("ddd, L")}
                </Box>

                <Checkbox
                  aria-labelledby={`date-label-${idx}`}
                  value={date.format("YYYY-MM-DD")}
                  disabled={
                    attendingsOnDate.length >= party.seatsAvailable &&
                    !attendingsOnDate.some((att) => att.user.id === user.id)
                  }
                />

                <AddUserMenu
                  attendings={party.attendings}
                  partyId={party.id}
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
                    {party.roomsAvailable ? (
                      <Badge>
                        {party.roomsAvailable -
                          attendingsOnDate.filter(
                            (att) => att.room === "GRANTED",
                          ).length}{" "}
                        / {party.roomsAvailable} rooms available
                      </Badge>
                    ) : null}
                    <Badge>
                      {attendingsOnDate.length} / {party.seatsAvailable} an
                      diesem Tag da
                    </Badge>
                  </Group>
                  <Divider mt="sm" />
                </Box>
              </Fragment>
            );
          })}
        </Box>
      </Checkbox.Group>
      {party && (
        <>
          <Checkbox
            label="Ich bin nicht dabei"
            checked={myAttending?.dates.length === 0}
            onChange={({ target: { checked } }) => {
              party &&
                (checked
                  ? setAttendance({
                      partyId: party.id,
                      dates: [],
                      // @ts-expect-error
                      attendingId: myAttending?.id,
                    })
                  : removeAttendance({
                      partyId: party.id,
                      // @ts-expect-error
                      attendingId: myAttending?.id,
                    }));
            }}
          />
          Leider nicht dabei:
          <Tooltip.Group openDelay={300} closeDelay={100}>
            <Avatar.Group spacing="sm" sx={{ flexWrap: "wrap" }}>
              {party.attendings
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
