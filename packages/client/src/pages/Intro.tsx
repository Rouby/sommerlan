import { Container, Text, Title } from "@mantine/core";
import { LAN, TextLink } from "../components";

export function Intro() {
  return (
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
  );
}
