import { Container } from "@mantine/core";
import { createLazyFileRoute } from "@tanstack/react-router";
import { UserCheckIn } from "../../../features";

export const Route = createLazyFileRoute("/admin/users/check-in")({
  component: () => (
    <Container>
      <UserCheckIn />
    </Container>
  ),
});
