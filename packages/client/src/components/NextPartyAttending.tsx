import { Loader } from "@mantine/core";
import dayjs from "dayjs";
import { trpc } from "../utils";

export function NextPartyAttending() {
  const { data, isLoading } = trpc.party.nextParty.useQuery();

  console.log(data, data?.startDate);

  if (isLoading) return <Loader />;

  return dayjs(data?.startDate, "YYYY-MM-DD").format("L");
}