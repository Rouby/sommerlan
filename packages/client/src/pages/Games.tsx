import { Center, Container } from "@mantine/core";
import { Can, NextPartyGamesList } from "../components";

export function Games() {
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
        <NextPartyGamesList />
      </Can>
    </Container>
  );
}
