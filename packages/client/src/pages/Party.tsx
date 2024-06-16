import { Center, Container, Space } from "@mantine/core";
import { Can } from "../components";
import {
  PartyAttendings,
  PartyCosts,
  PartyDateAndTime,
  PartyDonations,
  PartyLocation,
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

        <PartyLocation />
      </Can>
    </Container>
  );
}
