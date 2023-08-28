import { Center, Loader } from "@mantine/core";
import { useMatch } from "@tanstack/router";
import { trpc } from "../utils";

export function ArchivedParty() {
  const {
    params: { id },
  } = useMatch({ from: "/auth/party/archive/$id" });

  const { data, isLoading } = trpc.party.get.useQuery(id);

  if (isLoading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  return <>read all about this party... someday</>;
}
