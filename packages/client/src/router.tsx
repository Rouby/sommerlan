import { RootRoute, Route, Router } from "@tanstack/router";
import { Authenticate } from "./Auth";
import { Root } from "./Root";
import {
  Admin,
  ArchivedParty,
  Cache,
  Events,
  Games,
  Imprint,
  Intro,
  Party,
  PartyArchive,
  Profile,
  Users,
} from "./pages";

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
});

const nextPartyRoute = new Route({
  getParentRoute: () => partyRoute,
  path: "/",
  component: Party,
});

const partyArchiveRoute = new Route({
  getParentRoute: () => partyRoute,
  path: "archive/",
});

const partyArchiveListRoute = new Route({
  getParentRoute: () => partyArchiveRoute,
  path: "/",
  component: PartyArchive,
});

const archivedPartyRoute = new Route({
  getParentRoute: () => partyArchiveRoute,
  path: "$id",
  component: ArchivedParty,
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

const profileRoute = new Route({
  getParentRoute: () => authRoute,
  path: "profile",
  component: Profile,
});

const adminRoute = new Route({
  getParentRoute: () => authRoute,
  path: "admin",
  component: Admin,
});

const usersRoute = new Route({
  getParentRoute: () => adminRoute,
  path: "users",
  component: Users,
});

const cacheRoute = new Route({
  getParentRoute: () => adminRoute,
  path: "cache",
  component: Cache,
});

const routeTree = rootRoute.addChildren([
  authRoute.addChildren([
    indexRoute,
    partyRoute.addChildren([
      nextPartyRoute,
      partyArchiveRoute.addChildren([
        partyArchiveListRoute,
        archivedPartyRoute,
      ]),
    ]),
    gamesRoute,
    eventsRoute,
    imprintRoute,
    profileRoute,
    adminRoute.addChildren([usersRoute, cacheRoute]),
  ]),
]);

export const router = new Router({ routeTree });

declare module "@tanstack/router" {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router;
  }
}
