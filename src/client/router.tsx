import { RootRoute, Route, Router } from "@tanstack/router";
import { Authenticate } from "./Auth";
import { Root } from "./Root";
import { Intro, Party } from "./pages";

const rootRoute = new RootRoute({
  component: Root,
});

const authRoute = new Route({
  getParentRoute: () => rootRoute,
  id: "auth",
  component: Authenticate,
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

const routeTree = rootRoute.addChildren([
  authRoute.addChildren([indexRoute, partyRoute]),
]);

export const router = new Router({ routeTree });

declare module "@tanstack/router" {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router;
  }
}
