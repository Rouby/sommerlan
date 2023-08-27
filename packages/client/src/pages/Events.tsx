import { Center, Container } from "@mantine/core";
import { Can, NextPartyEventsList } from "../components";

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
        <NextPartyEventsList />
      </Can>
    </Container>
  );
}
