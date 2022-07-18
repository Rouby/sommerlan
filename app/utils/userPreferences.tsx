import { useColorScheme } from "@mantine/hooks";
import { useFetcher } from "@remix-run/react";
import dayjs from "dayjs";
import "dayjs/locale/de";
import { createContext, useContext } from "react";

const UserPreferences = createContext({
  preferredColorScheme: null as "light" | "dark" | null,
  timeZone: null as `${string}/${string}` | null,
  locale: "de" as string | null,
});

export const UserPreferencesProvider = UserPreferences.Provider;

export function useUserPreferences() {
  const persist = useFetcher();

  const data = useContext(UserPreferences);

  const browserPreferredColorScheme = useColorScheme();
  const browserTimeZone = dayjs.tz.guess();

  return [
    {
      ...data,
      preferredColorScheme:
        data.preferredColorScheme ?? browserPreferredColorScheme,
      timeZone: data.timeZone ?? browserTimeZone,
      locale: data.locale ?? "de",
    },
    (prefs: {
      preferredColorScheme?: string;
      timeZone?: string;
      locale?: string;
    }) => {
      persist.submit(prefs, {
        action: "action/set-preferences",
        method: "post",
      });
    },
  ] as const;
}
