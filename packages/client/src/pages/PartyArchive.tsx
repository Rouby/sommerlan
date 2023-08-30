import { Center, Container } from "@mantine/core";
import { Can, PartyList } from "../components";

export function PartyArchive() {
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
        <PartyList />
      </Can>
    </Container>
  );
}
