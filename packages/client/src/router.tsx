import { RootRoute, Route, Router } from "@tanstack/router";
import { Authenticate } from "./Auth";
import { Root } from "./Root";
import { Events, Games, Imprint, Intro, Party } from "./pages";

const rootRoute = new RootRoute({
  component: Root,
});

export const authRoute = new Route({
  getParentRoute: () => rootRoute,
  id: "auth",
  component: Authenticate,
  validateSearch: (search) => {
    return {
      auth: typeof search.auth === "string" ? search.auth : undefined,
    };
  },
});

const indexRoute = new Route({
  getParentRoute: () => authRoute,
  path: "/",
  component: Intro,
});

const partyRoute = new Route({
  getParentRoute: () => authRoute,
  path: "party",
  component: Party,
});

const gamesRoute = new Route({
  getParentRoute: () => authRoute,
  path: "games",
  component: Games,
});

const eventsRoute = new Route({
  getParentRoute: () => authRoute,
  path: "events",
  component: Events,
});

const imprintRoute = new Route({
  getParentRoute: () => authRoute,
  path: "imprint",
  component: Imprint,
});

const routeTree = rootRoute.addChildren([
  authRoute.addChildren([
    indexRoute,
    partyRoute,
    gamesRoute,
    eventsRoute,
    imprintRoute,
  ]),
]);

export const router = new Router({ routeTree });

declare module "@tanstack/router" {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router;
  }
}
