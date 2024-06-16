import { Center, Container, Space } from "@mantine/core";
import { Can, NextPartyLocation, PartyAttendings } from "../components";
import {
  PartyCosts,
  PartyDateAndTime,
  PartyDonations,
  PartyRooms,
} from "../features";

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

        <PartyCosts />

        <Space h="md" />

        <PartyRooms />

        <PartyAttendings />

        <NextPartyLocation />
      </Can>
    </Container>
  );
}
