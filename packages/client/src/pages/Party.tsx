import { Center, Container } from "@mantine/core";
import {
  Can,
  NextPartyLocation,
  NextPartyRooms,
  PartyAttendings,
  PartyCountdown,
} from "../components";

export function Party() {
  return (
    <Container>
      <Can
        I="update"
        a="User"
        otherwise={
          <Center>
            Logge dich ein um Informationen zur Party zu bekommen!
          </Center>
        }
      >
        <PartyCountdown />

        <NextPartyRooms />

        <PartyAttendings />

        <NextPartyLocation />
      </Can>
    </Container>
  );
}
