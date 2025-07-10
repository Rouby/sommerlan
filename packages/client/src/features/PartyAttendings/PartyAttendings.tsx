import {
  Avatar,
  Badge,
  Box,
  Checkbox,
  Divider,
  Group,
  Indicator,
  Skeleton,
  Switch,
  Text,
  Tooltip,
} from "@mantine/core";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";
import { Fragment, useState } from "react";
import { useMutation, useQuery } from "urql";
import { Can, UserAvatar, UserMenu } from "../../components";
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
      mutation setMyOrOtherAttendance(
        $partyId: ID!
        $dates: [Date!]!
        $userId: ID
      ) {
        setAttendance(partyId: $partyId, dates: $dates, userId: $userId) {
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

  const [showNames, setShowNames] = useState(false);

  return (
    <>
      {data?.nextParty?.tentative ? (
        <Text size="lg" mt="sm" mb="sm">
          Angaben beziehen sich auf den aktuellen Zeitraum vorschlag. Dieser
          kann sich unter Umständen noch ändern.
        </Text>
      ) : null}
      <Group justify="flex-end">
        <Switch
          label="Zeige Teilnehmer als Namen"
          checked={showNames}
          onChange={(evt) => setShowNames(evt.target.checked)}
        />
      </Group>
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

                <Can I="update" a="Party" otherwise={<div />}>
                  <UserMenu
                    selectedUsers={data?.nextParty.attendings
                      .filter((attending) =>
                        attending.dates.includes(date.format("YYYY-MM-DD")),
                      )
                      .map((attending) => attending.user)}
                    onSelect={(user) => {
                      const attending = data?.nextParty!.attendings.find(
                        (attending) => attending.user.id === user.id,
                      );
                      const jsDate = date.format("YYYY-MM-DD");
                      setAttendance({
                        partyId: data?.nextParty!.id,
                        dates: attending?.dates.includes(jsDate)
                          ? attending.dates.filter((d) => d !== jsDate)
                          : [...(attending?.dates ?? []), jsDate],
                        userId: user.id,
                        // @ts-expect-error
                        attendingId: myAttending?.id,
                      });
                    }}
                  />
                </Can>

                {showNames ? (
                  <Group wrap="wrap" gap="0 16px">
                    {attendingsOnDate.map((attending) => (
                      <Indicator
                        key={attending.id}
                        disabled={attending.room !== "GRANTED"}
                        position="top-start"
                        label="🛏️"
                        size={16}
                        offset={7}
                        color="transparent"
                      >
                        <UserAvatar user={attending.user} showName />
                      </Indicator>
                    ))}
                  </Group>
                ) : (
                  <Tooltip.Group openDelay={300} closeDelay={100}>
                    <Avatar.Group spacing="sm" style={{ flexWrap: "wrap" }}>
                      {attendingsOnDate.map((attending) => (
                        <Indicator
                          key={attending.id}
                          disabled={attending.room !== "GRANTED"}
                          position="top-start"
                          label="🛏️"
                          size={16}
                          offset={7}
                          color="transparent"
                        >
                          <UserAvatar user={attending.user} />
                        </Indicator>
                      ))}
                    </Avatar.Group>
                  </Tooltip.Group>
                )}

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
          Leider nicht dabei:
          {showNames ? (
            <Group wrap="wrap" gap="0 16px">
              {data?.nextParty.attendings
                .filter((a) => a.dates.length === 0)
                .map((attending) => (
                  <UserAvatar
                    key={attending.id}
                    user={attending.user}
                    showName
                  />
                ))}
            </Group>
          ) : (
            <Tooltip.Group openDelay={300} closeDelay={100}>
              <Avatar.Group spacing="sm" style={{ flexWrap: "wrap" }}>
                {data?.nextParty.attendings
                  .filter((a) => a.dates.length === 0)
                  .map((attending) => (
                    <UserAvatar key={attending.id} user={attending.user} />
                  ))}
              </Avatar.Group>
            </Tooltip.Group>
          )}
          <Checkbox
            mt="md"
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
        </>
      )}
    </>
  );
}
