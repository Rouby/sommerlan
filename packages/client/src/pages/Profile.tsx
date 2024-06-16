import { Container, Space } from "@mantine/core";
import { PasskeySettings, ProfileSettings } from "../features";

export function Profile() {
  return (
    <Container>
      <ProfileSettings />

      <Space h="md" />

      <PasskeySettings />
    </Container>
  );
}
