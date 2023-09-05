import { Center, Container } from "@mantine/core";
import { useMatch } from "@tanstack/router";
import { Can, PartyRowStandalone } from "../components";

export function ArchivedParty() {
  const {
    params: { id },
  } = useMatch({ from: "/auth/party/archive/$id" });

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
}
