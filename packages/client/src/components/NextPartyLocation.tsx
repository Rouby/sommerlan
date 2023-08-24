import { trpc } from "../utils";

export function NextPartyLocation() {
  const { data: party, isLoading } = trpc.party.nextParty.useQuery();

  if (isLoading || !party?.iframeSrc) {
    return null;
  }

  return (
    <>
      <iframe
        width="100%"
        height="400"
        src={party.iframeSrc}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrer-policy="no-referrer-when-downgrade"
      />
    </>
  );
}
