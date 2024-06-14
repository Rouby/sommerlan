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
  NumberInput,
  PolymorphicComponentProps,
  Popover,
  Skeleton,
  Table,
  TextInput,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useColorScheme } from "@mantine/hooks";
import { IconArrowLeft, IconEye, IconPencil } from "@tabler/icons-react";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { useMutation, useQuery } from "urql";
import { ActionIconLink, Can, UserAvatar } from ".";
import { graphql } from "../gql";
import { abilityAtom } from "../state";
import { PartyInfo } from "./PartyInfo";

const MotionBox =
  motion<PolymorphicComponentProps<"tr" | "div", BoxProps>>(Box);

const dateFormat = new Intl.DateTimeFormat(navigator.language, {
  dateStyle: "long",
});

export function PartyList() {
  const colorScheme = useColorScheme();

  const ability = useAtomValue(abilityAtom);

  const [{ data, fetching }] = useQuery({
    query: graphql(`
      query parties {
        parties {
          __typename
          id
          startDate
          endDate
          location
          roomsAvailable
          attendings {
            id
            dates
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

  if (fetching) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  if (!data) {
    return null;
  }

  const { parties } = data;

  return (
    <>
      <Table highlightOnHover>
        <thead>
          <tr>
            <th></th>
            <th>Datum</th>
            <th>Dauer</th>
            {/* <MediaQuery smallerThan="md" styles={{ display: "none" }}> */}
            <th>Ort</th>

            <th>Teilnehmer</th>
          </tr>
        </thead>
        <tbody>
          {parties?.map((party) => {
            const isInFuture = dayjs().isBefore(party.endDate);

            if (isInFuture && ability.cannot("update", party)) {
              return null;
            }

            return (
              <MotionBox
                key={party.id}
                component="tr"
                layoutId={`party-${party.id}`}
                layout="position"
                style={{
                  ...(isInFuture && {
                    backgroundImage:
                      colorScheme === "dark"
                        ? `linear-gradient(45deg, var(--mantine-color-filled) 25%, transparent 25%, transparent 50%, var(--mantine-color-filled) 50%, var(--mantine-color-filled) 75%, transparent 75%, transparent 100%)`
                        : "var(--mantine-color-black)",
                    backgroundSize: "56.57px 56.57px",
                  }),
                  whiteSpace: "nowrap",
                }}
              >
                <td>
                  <Group wrap="nowrap" gap={0}>
                    <ActionIconLink
                      to={`/party/archive/$id`}
                      params={{ id: party.id }}
                    >
                      <IconEye size={18} />
                    </ActionIconLink>
                    <Can I="update" this={party}>
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
                      (part) => part.type === "month" || part.type === "year",
                    )
                    .map((part) => part.value)
                    .join(" ")}
                </td>
                <td>
                  {dayjs
                    .duration(dayjs(party.endDate).diff(party.startDate))
                    .humanize()}
                </td>
                {/* <MediaQuery smallerThan="md" styles={{ display: "none" }}> */}
                <td>{party.location}</td>

                <td>
                  <Avatar.Group spacing="sm" style={{ flexWrap: "wrap" }}>
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
  const [{ data, fetching }] = useQuery({
    query: graphql(`
      query partyRow($id: ID!) {
        party(id: $id) {
          id
          startDate
          endDate
          location
          attendings {
            id
            dates
            user {
              id
              displayName
              avatar
            }
          }
        }
      }
    `),
    variables: {
      id,
    },
  });

  return (
    <MotionBox layoutId={`party-${id}`} layout="position" component="div">
      <Box
        p="sm"
        style={{
          display: "grid",
          gridTemplateColumns: "max-content 1fr",
        }}
      >
        <Group wrap="nowrap" gap={0} mr="md">
          <ActionIcon onClick={() => history.back()}>
            <IconArrowLeft size={18} />
          </ActionIcon>
        </Group>
        {fetching || !data?.party ? (
          <Skeleton />
        ) : (
          <Box
            style={{
              display: "grid",
              gap: "var(--mantine-spacing-md)",
              gridTemplateColumns: "auto auto auto",
            }}
          >
            <div>
              {dateFormat
                .formatToParts(new Date(data.party.startDate))
                .filter((part) => part.type === "month" || part.type === "year")
                .map((part) => part.value)
                .join(" ")}
            </div>

            <div>
              {dayjs
                .duration(dayjs(data.party.endDate).diff(data.party.startDate))
                .humanize()}
            </div>

            <div>{data.party.location}</div>
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

  const [{ fetching }, update] = useMutation(
    graphql(`
      mutation updateParty($input: PartyInput!) {
        updateParty(input: $input) {
          id
          startDate
          endDate
          location
          roomsAvailable
        }
      }
    `),
  );

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
          input: {
            id,
            startDate,
            endDate,
            location,
            roomsAvailable,
          },
        });
      }}
    >
      <Box
        style={{
          display: "grid",
          gridAutoColumns: "auto",
          gridAutoFlow: "column",
          gap: "var(--mantine-spacing-sm)",
          alignItems: "end",

          // [theme.fn.smallerThan("md")]: {
          //   gridAutoFlow: "row",
          // },
        }}
      >
        <DatePickerInput
          name="times"
          defaultValue={[new Date(startDate), new Date(endDate)]}
          label="Zeitraum"
          type="range"
          disabled={fetching}
        />
        <TextInput
          name="location"
          defaultValue={location}
          label="Ort"
          disabled={fetching}
        />
        <NumberInput
          name="roomsAvailable"
          defaultValue={roomsAvailable}
          label="reservierbare Schlafplätze"
          disabled={!isInFuture || fetching}
        />
        <Button type="submit" loading={fetching}>
          Speichern
        </Button>
      </Box>
    </form>
  );
}
