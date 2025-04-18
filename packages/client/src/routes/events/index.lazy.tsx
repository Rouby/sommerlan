import { Center, Container } from "@mantine/core";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Can } from "../../components";
import { PartyEvents } from "../../features";

export const Route = createLazyFileRoute("/events/")({
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
        <PartyEvents />
      </Can>
    </Container>
  ),
});
