import { Container } from "@mantine/core";
import { createLazyFileRoute } from "@tanstack/react-router";
import { BeerPong } from "../../features";

export const Route = createLazyFileRoute("/beerPong/")({
  component: () => (
    <Container>
      <BeerPong />
    </Container>
  ),
});
