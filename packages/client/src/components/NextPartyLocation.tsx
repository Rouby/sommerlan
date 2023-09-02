import { useQuery } from "urql";
import { graphql } from "../gql";

export function NextPartyLocation() {
  const [{ data }] = useQuery({
    query: graphql(`
      query nextPartyLocation {
        nextParty {
          id
          locationWidgetSrc
        }
      }
    `),
  });

  if (!data?.nextParty?.locationWidgetSrc) {
    return null;
  }

  return (
    <>
      <iframe
        width="100%"
        height="400"
        src={data.nextParty.locationWidgetSrc}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrer-policy="no-referrer-when-downgrade"
      />
    </>
  );
}
