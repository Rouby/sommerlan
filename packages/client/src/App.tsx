/// <reference types="vite-plugin-svgr/client" />

import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { DatesProvider } from "@mantine/dates";
import "@mantine/notifications/styles.css";
import "@mantine/tiptap/styles.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import localizedFormat from "dayjs/plugin/localizedFormat";
import minMax from "dayjs/plugin/minMax";
import relativeTime from "dayjs/plugin/relativeTime";
import weekday from "dayjs/plugin/weekday";
import { Provider as StateProvider } from "jotai";
import { GraphQLProvider } from "./GraphQLProvider";
import { locales } from "./dayjs/locales";
import { routeTree } from "./routeTree.gen";
import { store } from "./state";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

dayjs.extend(duration);
dayjs.extend(localizedFormat);
dayjs.extend(minMax);
dayjs.extend(relativeTime);
dayjs.extend(weekday);

locales[navigator.language.split("-")[0]]?.().then(() =>
  dayjs.locale(navigator.language),
);

const queryClient = new QueryClient();

export function App() {
  return (
    <StateProvider store={store}>
      <GraphQLProvider>
        <QueryClientProvider client={queryClient}>
          <MantineProvider defaultColorScheme="auto">
            <DatesProvider settings={{ locale: navigator.language }}>
              <PayPalScriptProvider
                options={{
                  clientId:
                    "AQnPomsWs3EV41OEh6HtYLc1jLYI8hGw73s1CRiI4DiFT3Yf6lg9rHRUZb-iZrjFKSv-RxNv3F9mC7wI",
                  components: "buttons",
                  currency: "EUR",
                }}
              >
                <RouterProvider router={router} />
              </PayPalScriptProvider>
            </DatesProvider>
          </MantineProvider>
        </QueryClientProvider>
      </GraphQLProvider>
    </StateProvider>
  );
}
