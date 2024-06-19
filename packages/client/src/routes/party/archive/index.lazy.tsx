import { Center, Container } from "@mantine/core";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Can, PartyList } from "../../../components";

export const Route = createLazyFileRoute("/party/archive/")({
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
        <PartyList />
      </Can>
    </Container>
  ),
});
