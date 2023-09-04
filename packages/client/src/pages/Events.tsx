import { Center, Container } from "@mantine/core";
import { Can, PartyEvents } from "../components";

export function Events() {
  return (
    <Container>
      <Can
        I="read"
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
  );
}
