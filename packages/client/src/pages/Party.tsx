import { Center, Container, Space } from "@mantine/core";
import {
  Can,
  NextPartyCosts,
  NextPartyLocation,
  NextPartyRooms,
  PartyAttendings,
} from "../components";
import { PartyDateAndTime, PartyDonations } from "../features";

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
        <PartyDateAndTime />

        <Space h="md" />

        <PartyDonations />

        <Space h="md" />

        <NextPartyCosts />

        <Space h="md" />

        <NextPartyRooms />

        <PartyAttendings />

        <NextPartyLocation />
      </Can>
    </Container>
  );
}
