import { Ability } from "@casl/ability";
import {
  ColorSchemeProvider,
  MantineProvider,
  type ColorScheme,
} from "@mantine/core";
import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import dayjs from "dayjs";
import "dayjs/locale/de";
import { useState } from "react";
import { AbilityContext } from "./Ability";
import { Layout } from "./Layout";
import { getUser, getUserId } from "./session.server";
import { defineAbilityForUser, type SommerlanAbility } from "./utils";

dayjs.locale("de");

export const links: LinksFunction = () => {
  return [];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Sommer-Party-LAN",
  viewport: "width=device-width,initial-scale=1",
});

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>;
  rules: Awaited<ReturnType<typeof defineAbilityForUser>>["rules"];
};

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({
    user: await getUser(request),
    rules: (await defineAbilityForUser(await getUserId(request))).rules,
  });
};

export default function App() {
  const { rules } = useLoaderData();
  const ability = new Ability(rules) as SommerlanAbility;

  return (
    <html lang="de">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <AbilityContext.Provider value={ability}>
          <MantineTheme>
            <Layout>
              <Outlet />
            </Layout>
          </MantineTheme>
        </AbilityContext.Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload port={8002} />
      </body>
    </html>
  );
}

function MantineTheme({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme, datesLocale: "de" }}
        withNormalizeCSS
        withGlobalStyles
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
