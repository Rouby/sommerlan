import { subject } from "@casl/ability";
import {
  ActionIcon,
  Alert,
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Group,
  Input,
  Loader,
  LoadingOverlay,
  Menu,
  Popover,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import type { User } from "@sommerlan-app/server/src/data/users";
import {
  IconCheck,
  IconHourglassLow,
  IconMan,
  IconPlus,
} from "@tabler/icons-react";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";
import { Fragment, useEffect, useReducer } from "react";
import { Can, UserAvatar } from ".";
import { userAtom } from "../state";
import { formatRange, trpc } from "../utils";

export function NextPartyAttending() {
  const { data: party, isLoading } = trpc.party.nextParty.useQuery();
  const user = useAtomValue(userAtom)!;

  if (isLoading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  if (!party?.startDate || !party?.endDate) {
    return <Center>Bisher ist noch keine Party geplant</Center>;
  }

  const startDate = dayjs(party.startDate, "YYYY-MM-DD").add(12, "hours");
  const endDate = dayjs(party.endDate, "YYYY-MM-DD").add(20, "hours");

  const dates = Array.from(
    { length: endDate.diff(startDate, "days") + 1 },
    (_, i) => startDate.add(i, "day")
  );

  return (
    <>
      <Countdown />
      <Rooms />
      <Box
        p="xs"
        sx={(theme) => ({
          display: "grid",
          gridTemplateColumns: "auto auto auto 1fr",
          columnGap: theme.spacing.md,
          rowGap: theme.spacing.sm,
          alignItems: "center",

          [theme.fn.smallerThan("xs")]: {
            gridTemplateColumns: "auto auto 1fr",

            "& > *:nth-child(5n)": {
              gridColumn: "1 / span 3",
            },
          },
        })}
      >
        {dates.map((date) => {
          const attendingsOnDate = party.attendings.filter((attending) =>
            attending.dates.includes(date.format("YYYY-MM-DD"))
          );
          return (
            <Fragment key={date.toString()}>
              <Box sx={{ whiteSpace: "nowrap" }}>{date.format("ddd, L")}</Box>

              <AttendingToggle
                attending={attendingsOnDate.some(
                  (att) => att.userId === user.id
                )}
                partyId={party.id}
                date={date.format("YYYY-MM-DD")}
              />

              <AddUserMenu
                usersAttending={attendingsOnDate.map((att) => att.user)}
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
                        attendingsOnDate.filter((att) => att.room === "granted")
                          .length}{" "}
                      / {party.roomsAvailable} rooms available
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
    </>
  );
}

function AddUserMenu({
  partyId,
  date,
  usersAttending,
}: {
  partyId: string;
  date: string;
  usersAttending: User[];
}) {
  return (
    <Can
      I="update"
      this={subject("Attending", { userId: "any" } as any)}
      otherwise={<div />}
    >
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

        <Menu.Dropdown sx={{ overflow: "auto", maxHeight: 300 }}>
          <Menu.Label>Nutzer</Menu.Label>
          <MenuOptions
            usersAttending={usersAttending}
            partyId={partyId}
            date={date}
          />

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

            <Popover width={300} position="top" shadow="lg">
              <Popover.Target>
                <Menu.Item
                  icon={<IconMan size={24} />}
                  closeMenuOnClick={false}
                >
                  Neuen Nutzer anlegen
                </Menu.Item>
              </Popover.Target>
              <Popover.Dropdown>
                <AddUserForm />
              </Popover.Dropdown>
            </Popover>
          </Box>
        </Menu.Dropdown>
      </Menu>
    </Can>
  );
}

function AddUserForm() {
  const context = trpc.useContext();
  const {
    mutateAsync: register,
    isLoading,
    error,
  } = trpc.auth.register.useMutation({
    onSuccess: (data) => {
      context.user.list.setData(void 0, (prev) => prev && [...prev, data.user]);
    },
  });

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        const userName = form["username"].value;
        const email = form["email"].value;

        await register({ userName, email });

        (event.target as HTMLFormElement).reset();
      }}
    >
      <LoadingOverlay visible={isLoading} />

      <Alert mb="md" hidden={!error} color="red">
        {`${error?.message}`}
      </Alert>

      <Stack>
        <Input required name="username" placeholder="Nutzername" />

        <Input required type="email" name="email" placeholder="Email-Adresse" />

        <Button type="submit">Nutzer erstellen</Button>
      </Stack>
    </form>
  );
}

function MenuOptions({
  partyId,
  date,
  usersAttending,
}: {
  partyId: string;
  date: string;
  usersAttending: User[];
}) {
  const { data, isLoading } = trpc.user.list.useQuery();

  return (
    <>
      <LoadingOverlay visible={isLoading} />
      {data?.map((user) => (
        <MenuItem
          key={user.id}
          user={user}
          attending={usersAttending.some((att) => att.id === user.id)}
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
  attending: boolean;
  user: User;
}) {
  const context = trpc.useContext();
  const { mutateAsync: attend, isLoading } = trpc.party.attend.useMutation({
    onSuccess: (data) => {
      context.party.nextParty.setData(
        void 0,
        (prev) =>
          prev && {
            ...prev,
            attendings: data,
          }
      );
    },
  });

  return (
    <Menu.Item
      icon={<UserAvatar user={user} size={32} />}
      onClick={() =>
        attend({ partyId, date, attending: !attending, userId: user.id })
      }
      closeMenuOnClick={false}
      rightSection={
        isLoading ? <Loader size={24} /> : attending ? <IconCheck /> : null
      }
    >
      {user.displayName}
    </Menu.Item>
  );
}

function AttendingToggle({
  partyId,
  date,
  attending,
}: {
  partyId: string;
  date: string;
  attending: boolean;
}) {
  const context = trpc.useContext();
  const { mutateAsync: attend, isLoading } = trpc.party.attend.useMutation({
    onSuccess: (data) => {
      context.party.nextParty.setData(
        void 0,
        (prev) =>
          prev && {
            ...prev,
            attendings: data,
          }
      );
    },
  });

  return (
    <ActionIcon
      variant={attending ? "filled" : "outline"}
      onClick={() =>
        attend({
          partyId,
          date,
          attending: !attending,
        })
      }
      loading={isLoading}
    >
      <IconCheck size="1rem" />
    </ActionIcon>
  );
}

function Countdown() {
  const { data: party, isLoading } = trpc.party.nextParty.useQuery();

  const [, rerender] = useReducer((x) => x + 1, 0);
  const { start, stop } = useInterval(() => {
    rerender();
  }, 1000);

  useEffect(() => {
    if (!party) return;
    start();
    return () => stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [party]);

  if (isLoading || !party) {
    return null;
  }

  const startDate = dayjs(party.startDate, "YYYY-MM-DD").add(12, "hours");
  const endDate = dayjs(party.endDate, "YYYY-MM-DD").add(20, "hours");

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

  const { data: party, isLoading } = trpc.party.nextParty.useQuery();

  const myAttending = party?.attendings.find(
    (attending) => attending.userId === user.id
  );

  const context = trpc.useContext();
  const { mutateAsync: requestRoom, isLoading: isRequesting } =
    trpc.party.requestRoom.useMutation({
      onSuccess: (data) => {
        context.party.nextParty.setData(
          void 0,
          (prev) =>
            prev && {
              ...prev,
              attendings: data,
            }
        );
      },
    });

  const isRequestingRoom = myAttending?.room === "requested";
  const isGrantedRoom = myAttending?.room === "granted";

  if (!party?.roomsAvailable) return null;

  return (
    <>
      <Button
        loading={isLoading || isRequesting}
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
          requestRoom({ partyId: party.id, requested: !isRequestingRoom })
        }
      >
        Ich würde gerne einen Raum haben
      </Button>

      <Can I="grantRoom" an="Attending">
        {party.attendings
          .filter((attending) => attending.room === "requested")
          .map((attending) => (
            <RoomRequest key={attending.id} user={attending.user} />
          ))}
      </Can>
    </>
  );
}

function RoomRequest({ user }: { user: User }) {
  const { data: party } = trpc.party.nextParty.useQuery();

  const context = trpc.useContext();
  const { mutateAsync: grantRoom, isLoading: isGranting } =
    trpc.party.grantRoom.useMutation({
      onSuccess: (data) => {
        context.party.nextParty.setData(
          void 0,
          (prev) =>
            prev && {
              ...prev,
              attendings: data,
            }
        );
      },
    });
  const { mutateAsync: denyRoom, isLoading: isDenying } =
    trpc.party.denyRoom.useMutation({
      onSuccess: (data) => {
        context.party.nextParty.setData(
          void 0,
          (prev) =>
            prev && {
              ...prev,
              attendings: data,
            }
        );
      },
    });

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
        loading={isGranting}
        onClick={() => grantRoom({ partyId: party?.id ?? "", userId: user.id })}
        disabled={isDenying}
      >
        Ok
      </Button>
      <Button
        loading={isDenying}
        onClick={() => denyRoom({ partyId: party?.id ?? "", userId: user.id })}
        disabled={isGranting}
      >
        Ablehnen
      </Button>
    </Box>
  );
}
