import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/party/check-in")({
  component: () => <div>Hello /party/check-in!</div>,
});
