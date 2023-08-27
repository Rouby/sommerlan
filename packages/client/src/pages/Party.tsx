import { Center, Container } from "@mantine/core";
import { Can, NextPartyAttending, NextPartyLocation } from "../components";

export function Party() {
  return (
    <Container>
      <Can
        I="read"
        a="User"
        otherwise={
          <Center>
            Logge dich ein um Informationen zur Party zu bekommen!
          </Center>
        }
      >
        <NextPartyAttending />

        <NextPartyLocation />
      </Can>
    </Container>
  );
}
