import { Center, Container, Space } from "@mantine/core";
import { Outlet } from "@tanstack/router";
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

        <Space my="md" />

        <Outlet />
      </Can>
    </Container>
  );
}
