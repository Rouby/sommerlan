import { Center, Container, Space } from "@mantine/core";
import {
  Can,
  NextPartyCosts,
  NextPartyDonations,
  NextPartyLocation,
  NextPartyRooms,
  PartyAttendings,
} from "../components";
import { PartyDateAndTime } from "../features";

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

        <NextPartyDonations />

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
