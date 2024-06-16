import { Center, Container } from "@mantine/core";
import { Can } from "../components";
import { PartyGames } from "../features";

export function Games() {
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
        <PartyGames />
      </Can>
    </Container>
  );
}
