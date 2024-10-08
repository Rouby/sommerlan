import { Container } from "@mantine/core";
import { createLazyFileRoute } from "@tanstack/react-router";
import { PartyCheckIn } from "../../features";

export const Route = createLazyFileRoute("/party/check-in")({
  component: () => (
    <Container>
      <PartyCheckIn />
    </Container>
  ),
});
