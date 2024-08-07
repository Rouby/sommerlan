import { createLazyFileRoute } from "@tanstack/react-router";
import { CardWithHeader } from "../../components";
import { AdminGames } from "../../features";

export const Route = createLazyFileRoute("/admin/games")({
  component: () => {
    return (
      <CardWithHeader header="Spiele">
        <AdminGames />
      </CardWithHeader>
    );
  },
});
