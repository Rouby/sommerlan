import { Center, Container } from "@mantine/core";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Can, PartyRowStandalone } from "../../../components";

export const Route = createLazyFileRoute("/party/archive/$id")({
  component: () => {
    const { id } = Route.useParams();

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
          <PartyRowStandalone id={id} />
        </Can>
      </Container>
    );
  },
});
