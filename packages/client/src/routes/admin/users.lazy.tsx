import { createLazyFileRoute } from "@tanstack/react-router";
import { CardWithHeader } from "../../components";

export const Route = createLazyFileRoute("/admin/users")({
  component: () => <CardWithHeader header="Users">...</CardWithHeader>,
});
