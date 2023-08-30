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
import { UserAvatar } from ".";
import { userAtom } from "../state";
import { trpc } from "../utils";

export function PartyInfo({ id }: { id: string }) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const user = useAtomValue(userAtom)!;
  const { data: party, isLoading } = trpc.party.get.useQuery(id);

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

  if (isLoading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  if (!party) {
    return null;
  }

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
              party.attendings.find((attending) => attending.userId === user.id)
                ?.dates
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
    </>
  );
}
