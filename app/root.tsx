import { Ability } from "@casl/ability";
import {
  ColorSchemeProvider,
  MantineProvider,
  type ColorScheme,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
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
  useCatch,
  useFetcher,
  useLoaderData,
} from "@remix-run/react";
import dayjs from "dayjs";
import "dayjs/locale/de";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { useEffect, useState } from "react";
import {
  AbilityContext,
  defineAbilityForUser,
  type SommerlanAbility,
} from "./Ability";
import { Layout } from "./Layout";
import { getUser, getUserId } from "./session.server";
import { getUserPreferences } from "./utils/userPreferences.server";

dayjs.extend(localizedFormat);
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
  preferredColorScheme: "dark" | "light" | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const prefs = await getUserPreferences(request);

  return json<LoaderData>({
    user: await getUser(request),
    rules: (await defineAbilityForUser(await getUserId(request))).rules,
    preferredColorScheme: prefs.theme,
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
  const { preferredColorScheme } = useLoaderData();
  const browserPreferredColorScheme = useColorScheme();
  const persist = useFetcher();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    preferredColorScheme ?? browserPreferredColorScheme
  );

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useEffect(() => {
    if (!preferredColorScheme) {
      setColorScheme(browserPreferredColorScheme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [browserPreferredColorScheme]);
  useEffect(() => {
    persist.submit(
      { theme: colorScheme ?? browserPreferredColorScheme },
      { action: "action/set-theme", method: "post" }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorScheme, browserPreferredColorScheme]);

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

export function CatchBoundary() {
  const caught = useCatch();
  console.error("CatchBoundary", caught);
  if (caught.status === 404) {
    return (
      <html lang="de">
        <head>
          <Meta />
          <Links />
        </head>
        <body>
          404
          <ScrollRestoration />
          <Scripts />
          <LiveReload port={8002} />
        </body>
      </html>
    );
  }
  throw new Error(`Unhandled error: ${caught.status}`);
}
