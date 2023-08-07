import { Center, Loader } from "@mantine/core";
import { trpc } from "../utils";

export function NextPartyLocation() {
  const { data: party, isLoading } = trpc.party.nextParty.useQuery();

  if (isLoading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  return (
    <>
      <iframe
        width="100%"
        height="400"
        src={party?.iframeSrc}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrer-policy="no-referrer-when-downgrade"
      />
    </>
  );
}
