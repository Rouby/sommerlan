import { subject } from "@casl/ability";
import {
  ActionIcon,
  Avatar,
  Box,
  BoxProps,
  Button,
  Center,
  Divider,
  Group,
  Loader,
  MediaQuery,
  NumberInput,
  Popover,
  Skeleton,
  Table,
  TextInput,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { IconArrowLeft, IconEye, IconPencil } from "@tabler/icons-react";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { ActionIconLink, Can, UserAvatar } from ".";
import { abilityAtom } from "../state";
import { trpc } from "../utils";
import { PartyInfo } from "./PartyInfo";

const MotionBox = motion<
  import("@mantine/utils").PolymorphicComponentProps<"tr" | "div", BoxProps>
>(Box as any);

const dateFormat = new Intl.DateTimeFormat(navigator.language, {
  dateStyle: "long",
});

export function PartyList() {
  const ability = useAtomValue(abilityAtom);

  const { data, isLoading } = trpc.party.all.useQuery();

  if (isLoading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  return (
    <>
      <Table highlightOnHover>
        <thead>
          <tr>
            <th></th>
            <th>Datum</th>
            <th>Dauer</th>
            <MediaQuery smallerThan="md" styles={{ display: "none" }}>
              <th>Ort</th>
            </MediaQuery>
            <th>Teilnehmer</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((party) => {
            const isInFuture = dayjs().isBefore(party.endDate);

            if (
              isInFuture &&
              ability.cannot("update", subject("Party", party))
            ) {
              return null;
            }

            return (
              <MotionBox
                key={party.id}
                component="tr"
                layoutId={`party-${party.id}`}
                layout="position"
                sx={(theme) => ({
                  ...(isInFuture && {
                    backgroundImage:
                      theme.colorScheme === "dark"
                        ? `linear-gradient(45deg, ${theme.colors.dark[6]} 25%, transparent 25%, transparent 50%, ${theme.colors.dark[6]} 50%, ${theme.colors.dark[6]} 75%, transparent 75%, transparent 100%)`
                        : theme.black,
                    backgroundSize: "56.57px 56.57px",
                  }),
                  whiteSpace: "nowrap",
                })}
              >
                <td>
                  <Group noWrap spacing={0}>
                    <ActionIconLink
                      to={`/party/archive/$id`}
                      params={{ id: party.id }}
                    >
                      <IconEye size={18} />
                    </ActionIconLink>
                    <Can I="update" this={subject("Party", party)}>
                      <Popover position="bottom-start" withArrow trapFocus>
                        <Popover.Target>
                          <ActionIcon>
                            <IconPencil size={18} />
                          </ActionIcon>
                        </Popover.Target>
                        <Popover.Dropdown>
                          <PartyForm {...party} />
                        </Popover.Dropdown>
                      </Popover>
                    </Can>
                  </Group>
                </td>
                <td>
                  {dateFormat
                    .formatToParts(new Date(party.startDate))
                    .filter(
                      (part) => part.type === "month" || part.type === "year"
                    )
                    .map((part) => part.value)
                    .join(" ")}
                </td>
                <td>
                  {dayjs
                    .duration(dayjs(party.endDate).diff(party.startDate))
                    .humanize()}
                </td>
                <MediaQuery smallerThan="md" styles={{ display: "none" }}>
                  <td>{party.location}</td>
                </MediaQuery>
                <td>
                  <Avatar.Group spacing="sm" sx={{ flexWrap: "wrap" }}>
                    {party.attendings
                      .filter((attending) => attending.dates.length > 0)
                      .map((attending) => (
                        <UserAvatar key={attending.id} user={attending.user} />
                      ))}
                  </Avatar.Group>
                </td>
              </MotionBox>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export function PartyRowStandalone({ id }: { id: string }) {
  const { data, isLoading } = trpc.party.get.useQuery(id);

  return (
    <MotionBox layoutId={`party-${id}`} layout="position" component="div">
      <Box
        p="sm"
        sx={{
          display: "grid",
          gridTemplateColumns: "max-content 1fr",
        }}
      >
        <Group noWrap spacing={0} mr="md">
          <ActionIcon onClick={() => history.back()}>
            <IconArrowLeft size={18} />
          </ActionIcon>
        </Group>
        {isLoading || !data ? (
          <Skeleton />
        ) : (
          <Box
            sx={(theme) => ({
              display: "grid",
              gap: theme.spacing.md,
              gridTemplateColumns: "auto auto auto",
            })}
          >
            <div>
              {dateFormat
                .formatToParts(new Date(data.startDate))
                .filter((part) => part.type === "month" || part.type === "year")
                .map((part) => part.value)
                .join(" ")}
            </div>

            <div>
              {dayjs
                .duration(dayjs(data.endDate).diff(data.startDate))
                .humanize()}
            </div>

            <div>{data.location}</div>
          </Box>
        )}
      </Box>

      <Divider mb="md" />

      <PartyInfo id={id} />
    </MotionBox>
  );
}

function PartyForm({
  id,
  startDate,
  endDate,
  location,
  roomsAvailable,
}: {
  id: string;
  startDate: string;
  endDate: string;
  location: string;
  roomsAvailable: number;
}) {
  const isInFuture = dayjs().isBefore(endDate);

  const context = trpc.useContext();
  const { mutateAsync: update, isLoading } = trpc.party.update.useMutation({
    onSuccess: (party) => {
      context.party.all.setData(undefined, (parties) =>
        parties?.map((p) => (party.id === p.id ? party : p))
      );
    },
  });

  return (
    <form
      onSubmit={async (evt) => {
        evt.preventDefault();
        const form = evt.target as HTMLFormElement;

        const [startDate, endDate] = form["times"].value
          .split(" – ")
          .map((date: string) => dayjs(date).format("YYYY-MM-DD"));

        const location = form["location"].value;

        const roomsAvailable = form["roomsAvailable"].valueAsNumber;

        await update({
          id,
          startDate,
          endDate,
          location,
          roomsAvailable,
        });
      }}
    >
      <Box
        sx={(theme) => ({
          display: "grid",
          gridAutoColumns: "auto",
          gridAutoFlow: "column",
          gap: theme.spacing.sm,
          alignItems: "end",

          [theme.fn.smallerThan("md")]: {
            gridAutoFlow: "row",
          },
        })}
      >
        <DatePickerInput
          name="times"
          defaultValue={[new Date(startDate), new Date(endDate)]}
          label="Zeitraum"
          type="range"
          disabled={isLoading}
        />
        <TextInput
          name="location"
          defaultValue={location}
          label="Ort"
          disabled={isLoading}
        />
        <NumberInput
          name="roomsAvailable"
          defaultValue={roomsAvailable}
          label="reservierbare Schlafplätze"
          type="number"
          disabled={!isInFuture || isLoading}
        />
        <Button type="submit" loading={isLoading}>
          Speichern
        </Button>
      </Box>
    </form>
  );
}
