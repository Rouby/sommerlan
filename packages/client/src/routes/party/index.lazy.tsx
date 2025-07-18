import { Center, Container, Space } from "@mantine/core";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Can } from "../../components";
import {
  PartyAttendings,
  PartyCosts,
  PartyDateAndTime,
  PartyDonations,
  PartyLocation,
  PartyRooms,
} from "../../features";

export const Route = createLazyFileRoute("/party/")({
  component: () => (
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
  ),
});
