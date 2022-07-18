import {
  ColorSchemeProvider,
  MantineProvider,
  type ColorScheme,
} from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import dayjs from "dayjs";
import "dayjs/locale/de";
import localizedFormat from "dayjs/plugin/localizedFormat";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { useEffect } from "react";
import { json, useLoaderData } from "~/utils/superjson";
import { AbilityProvider, Layout } from "./components";
import { getUser, getUserId } from "./session.server";
import { defineAbilityForUser } from "./utils/ability.server";
import {
  UserPreferencesProvider,
  useUserPreferences,
} from "./utils/userPreferences";
import { getUserPreferences } from "./utils/userPreferences.server";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);

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
  locale: string | null;
  timeZone: `${string}/${string}` | null;
  env: Record<string, string | undefined>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const prefs = await getUserPreferences(request);

  return json<LoaderData>({
    user: await getUser(request),
    rules: (await defineAbilityForUser(await getUserId(request))).rules,
    preferredColorScheme: prefs.preferredColorScheme,
    locale: prefs.locale,
    timeZone: prefs.timeZone,
    env: {
      APPLICATION_SERVER_KEY: process.env.APPLICATION_SERVER_KEY,
      PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
      PAYPAL_MERCHANT_ID: process.env.PAYPAL_MERCHANT_ID,
    },
  });
};

export default function App() {
  const data = useLoaderData<LoaderData>();
  const { rules, env } = data;

  return (
    <html lang="de">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <UserPreferencesProvider value={data}>
          <AbilityProvider rules={rules}>
            <MantineTheme>
              <NotificationsProvider>
                <Layout>
                  <PayPalScriptProvider
                    options={{
                      "client-id": env.PAYPAL_CLIENT_ID ?? "",
                      "merchant-id": env.PAYPAL_MERCHANT_ID ?? "",
                      currency: "EUR",
                      components: "buttons",
                    }}
                  >
                    <Outlet />
                  </PayPalScriptProvider>
                </Layout>
              </NotificationsProvider>
            </MantineTheme>
          </AbilityProvider>
        </UserPreferencesProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload port={8002} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.env = ${JSON.stringify(env)}`,
          }}
        />
      </body>
    </html>
  );
}

function MantineTheme({ children }: { children: React.ReactNode }) {
  const [{ preferredColorScheme, timeZone, locale }, setUserPreferences] =
    useUserPreferences();

  dayjs.tz.setDefault(timeZone);
  dayjs.locale(locale);

  const toggleColorScheme = (value?: ColorScheme) =>
    setUserPreferences({
      preferredColorScheme:
        value || (preferredColorScheme === "dark" ? "light" : "dark"),
    });

  useEffect(() => {
    setUserPreferences({
      preferredColorScheme: preferredColorScheme,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preferredColorScheme]);

  return (
    <ColorSchemeProvider
      colorScheme={preferredColorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme: preferredColorScheme,
          datesLocale: locale,
        }}
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
