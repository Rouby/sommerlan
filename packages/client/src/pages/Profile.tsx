import { Container, Space } from "@mantine/core";
import { PasskeySettings, ProfileSettings } from "../components";

export function Profile() {
  return (
    <Container>
      <ProfileSettings />

      <Space h="md" />

      <PasskeySettings />
    </Container>
  );
}
