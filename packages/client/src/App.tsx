/// <reference types="vite-plugin-svgr/client" />

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { DatesProvider } from "@mantine/dates";
import { Notifications } from "@mantine/notifications";
import "@mantine/tiptap/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/router";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import localizedFormat from "dayjs/plugin/localizedFormat";
import minMax from "dayjs/plugin/minMax";
import relativeTime from "dayjs/plugin/relativeTime";
import weekday from "dayjs/plugin/weekday";
import { Provider } from "jotai";
import { GraphQLProvider } from "./GraphQLProvider";
import { locales } from "./dayjs/locales";
import { router } from "./router";

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
    <Provider>
      <GraphQLProvider>
        <QueryClientProvider client={queryClient}>
          <MantineProvider defaultColorScheme="auto">
            <DatesProvider settings={{ locale: navigator.language }}>
              <Notifications />
              <RouterProvider router={router} />
            </DatesProvider>
          </MantineProvider>
        </QueryClientProvider>
      </GraphQLProvider>
    </Provider>
  );
}
