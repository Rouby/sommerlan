import { Center, Loader } from "@mantine/core";
import dayjs from "dayjs";
import { formatRange, trpc } from "../utils";

export function NextPartyAttending() {
  const { data, isLoading } = trpc.party.nextParty.useQuery();

  if (isLoading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  if (!data?.startDate || !data?.endDate) {
    return <Center>No Party planned</Center>;
  }

  return (
    <>
      Die naechste Party ist vom{" "}
      {formatRange(
        dayjs(data.startDate, "YYYY-MM-DD").toDate(),
        dayjs(data.endDate, "YYYY-MM-DD").toDate()
      )}{" "}
      (noch ca {dayjs(data.startDate, "YYYY-MM-DD").toNow(true)})
    </>
  );
}
