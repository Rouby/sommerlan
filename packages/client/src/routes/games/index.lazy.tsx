import { Center, Container } from "@mantine/core";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Can } from "../../components";
import { PartyGames } from "../../features";

export const Route = createLazyFileRoute("/games/")({
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
        <PartyGames />
      </Can>
    </Container>
  ),
});
