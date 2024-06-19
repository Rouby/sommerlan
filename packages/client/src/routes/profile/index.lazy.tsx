import { Container, Space } from "@mantine/core";
import { createLazyFileRoute } from "@tanstack/react-router";
import { PasskeySettings, ProfileSettings } from "../../features";

export const Route = createLazyFileRoute("/profile/")({
  component: () => (
    <Container>
      <ProfileSettings />

      <Space h="md" />

      <PasskeySettings />
    </Container>
  ),
});
