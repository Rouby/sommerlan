import { subject } from "@casl/ability";
import {
  ActionIcon,
  Alert,
  Avatar,
  Box,
  Button,
  Center,
  Input,
  Loader,
  LoadingOverlay,
  Menu,
  Popover,
  Stack,
  Tooltip,
} from "@mantine/core";
import type { User } from "@sommerlan-app/server/src/data/users";
import { IconCheck, IconMan, IconPlus } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";
import { Fragment } from "react";
import { Can, UserAvatar } from ".";
import { userAtom } from "../state";
import { formatRange, trpc } from "../utils";

export function NextPartyAttending() {
  const { data: party, isLoading } = trpc.party.nextParty.useQuery();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const user = useAtomValue(userAtom)!;

  if (isLoading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  if (!party?.startDate || !party?.endDate) {
    return <Center>No Party planned</Center>;
  }

  const startDate = dayjs(party.startDate, "YYYY-MM-DD");
  const endDate = dayjs(party.endDate, "YYYY-MM-DD");

  const dates = Array.from(
    { length: endDate.diff(startDate, "days") + 1 },
    (_, i) => startDate.add(i, "day")
  );

  return (
    <>
      Die naechste Party ist vom{" "}
      {formatRange(startDate.toDate(), endDate.toDate())} (noch ca{" "}
      {startDate.toNow(true)})
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

            "& > *:nth-child(4n)": {
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
                    <Tooltip
                      key={attending.id}
                      label={attending.user.displayName}
                      withArrow
                    >
                      <UserAvatar user={attending.user} />
                    </Tooltip>
                  ))}
                </Avatar.Group>
              </Tooltip.Group>
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this={subject("Attending", { userId: "any" } as any)}
      otherwise={<div />}
    >
      <Menu width={300} position="bottom-start" shadow="lg" withArrow>
        <Menu.Target>
          <ActionIcon radius="xl" variant="default">
            <IconPlus size="1rem" />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Nutzer</Menu.Label>
          <MenuOptions
            usersAttending={usersAttending}
            partyId={partyId}
            date={date}
          />

          <Menu.Divider />

          <Popover width={300} position="bottom" shadow="lg">
            <Popover.Target>
              <Menu.Item icon={<IconMan size={24} />} closeMenuOnClick={false}>
                Neuen Nutzer anlegen
              </Menu.Item>
            </Popover.Target>
            <Popover.Dropdown>
              <AddUserForm />
            </Popover.Dropdown>
          </Popover>
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
