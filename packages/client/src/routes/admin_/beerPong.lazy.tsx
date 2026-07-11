import { createLazyFileRoute } from "@tanstack/react-router";
import { CardWithHeader } from "../../components";
import { AdminBeerPong } from "../../features";

export const Route = createLazyFileRoute("/admin/beerPong")({
  component: () => (
    <CardWithHeader header="Bierpong Turnier">
      <AdminBeerPong />
    </CardWithHeader>
  ),
});
