import { createFileRoute, redirect } from "@tanstack/react-router";
import { abilityAtom, store } from "../../state";

export const Route = createFileRoute("/party/check-in")({
  beforeLoad: async () => {
    const ability = store.get(abilityAtom);

    if (!ability.can("checkIn", "Party")) {
      throw redirect({ to: "/" });
    }
  },
});
