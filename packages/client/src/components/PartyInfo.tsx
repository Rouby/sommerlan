import { Carousel } from "@mantine/carousel";
import {
  Avatar,
  Button,
  Center,
  Checkbox,
  Loader,
  Popover,
  Stack,
} from "@mantine/core";
import { IconCalendar } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";
import { useQuery } from "urql";
import { UserAvatar } from ".";
import { graphql } from "../gql";
import { userAtom } from "../state";
import { trpc } from "../utils";

export function PartyInfo({ id }: { id: string }) {
  const user = useAtomValue(userAtom)!;

  const [{ data, fetching }] = useQuery({
    query: graphql(`
      query party($id: ID!) {
        party(id: $id) {
          id
          startDate
          endDate
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

  const context = trpc.useContext();
  const { mutateAsync: attendDates, isLoading: savingAttending } =
    trpc.party.attendDates.useMutation({
      onSuccess: (data) => {
        context.party.get.setData(
          id,
          (prev) =>
            prev && {
              ...prev,
              attendings: data,
            }
        );
      },
    });

  if (fetching) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  if (!data?.party) {
    return null;
  }

  const { party } = data;

  const startDate = dayjs(party.startDate, "YYYY-MM-DD").add(12, "hours");
  const endDate = dayjs(party.endDate, "YYYY-MM-DD").add(20, "hours");

  const dates = Array.from(
    { length: endDate.diff(startDate, "days") + 1 },
    (_, i) => startDate.add(i, "day")
  );

  return (
    <>
      <Popover position="right-start">
        <Popover.Target>
          <Button
            mb="md"
            loading={savingAttending}
            leftIcon={<IconCalendar size={18} />}
          >
            Wann war ich da?
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Checkbox.Group
            defaultValue={
              party.attendings.find(
                (attending) => attending.user.id === user.id
              )?.dates
            }
            onChange={(dates) => {
              attendDates({
                partyId: party.id,
                dates,
              });
            }}
          >
            <Stack>
              {dates.map((date) => (
                <Checkbox
                  key={date.format("YYYY-MM-DD")}
                  value={date.format("YYYY-MM-DD")}
                  label={date.format("ddd, L")}
                />
              ))}
            </Stack>
          </Checkbox.Group>
        </Popover.Dropdown>
      </Popover>

      <Avatar.Group spacing="sm" sx={{ flexWrap: "wrap" }}>
        {party.attendings
          .filter((attending) => attending.dates.length > 0)
          .map((attending) => (
            <UserAvatar key={attending.id} user={attending.user} size="xl" />
          ))}
      </Avatar.Group>

      <Carousel withIndicators>
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </>
  );
}
