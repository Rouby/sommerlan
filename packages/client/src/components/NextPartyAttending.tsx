import {
  ActionIcon,
  Avatar,
  Box,
  Center,
  Group,
  Loader,
  Tooltip,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";
import { Fragment } from "react";
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
          gridTemplateColumns: "auto 1fr",
          gridAutoRows: theme.spacing.xl,
          columnGap: theme.spacing.md,
          rowGap: theme.spacing.sm,
          alignItems: "center",
        })}
      >
        {dates.map((date) => {
          const attendingsOnDate = party.attendings.filter((attending) =>
            attending.dates.includes(date.format("YYYY-MM-DD"))
          );
          return (
            <Fragment key={date.toString()}>
              <div>{date.format("ddd, L")}</div>
              <Group>
                <AttendingToggle
                  attending={attendingsOnDate.some(
                    (att) => att.userId === user.id
                  )}
                  partyId={party.id}
                  date={date.format("YYYY-MM-DD")}
                />

                <Tooltip.Group openDelay={300} closeDelay={100}>
                  <Avatar.Group spacing="sm">
                    {attendingsOnDate.map((attending) => (
                      <Tooltip
                        key={attending.id}
                        label={attending.user.displayName}
                        withArrow
                      >
                        <Avatar src={attending.user.avatar} radius="xl" />
                      </Tooltip>
                    ))}
                  </Avatar.Group>
                </Tooltip.Group>
              </Group>
            </Fragment>
          );
        })}
      </Box>
    </>
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
