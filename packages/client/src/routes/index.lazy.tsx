import { Container, Text, Title } from "@mantine/core";
import { createLazyFileRoute } from "@tanstack/react-router";
import { LAN, TextLink } from "../components";

export const Route = createLazyFileRoute("/")({
  component: () => (
    <Container>
      <LAN />

      <Title order={1}>Willkommen auf der LAN Seite</Title>

      <Text component="p">
        Informationen zur nächsten LAN findest du{" "}
        <TextLink to="/party">hier</TextLink>.
      </Text>

      <Text component="p">
        Informationen zu vergangenen LANs findest du{" "}
        <TextLink to="/party/archive">im Archiv</TextLink>.
      </Text>
    </Container>
  ),
});
