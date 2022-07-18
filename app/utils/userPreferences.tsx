import { useColorScheme } from "@mantine/hooks";
import { useFetcher } from "@remix-run/react";
import dayjs from "dayjs";
import "dayjs/locale/de";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const UserPreferences = createContext<{
  preferredColorScheme: "light" | "dark";
  timeZone: string;
  locale: string;
  toggleColorScheme: (colorScheme?: "light" | "dark") => void;
  setTimeZone: (timeZone: string) => void;
  setLocale: (locale: string) => void;
}>({
  preferredColorScheme: "light",
  timeZone: "",
  locale: "de",
  toggleColorScheme: () => {},
  setTimeZone: () => {},
  setLocale: () => {},
});

export function UserPreferencesProvider({
  value,
  children,
}: {
  value: {
    preferredColorScheme: "light" | "dark" | null;
    timeZone: string | null;
    locale: string | null;
  };
  children: React.ReactNode;
}) {
  const browserPreferredColorScheme = useColorScheme();
  const browserTimeZone = dayjs.tz.guess();

  const persist = useFetcher();

  const [data, setData] = useState(() => ({
    ...value,
    preferredColorScheme:
      value.preferredColorScheme ?? browserPreferredColorScheme,
    timeZone: value.timeZone ?? browserTimeZone,
    locale: value.locale ?? "de",
  }));

  useEffect(() => {
    persist.submit(data, {
      action: "action/set-preferences",
      method: "post",
    });
  }, [data]);

  const context = useMemo(
    () => ({
      ...data,
      toggleColorScheme: (value?: "light" | "dark") => {
        setData({
          ...data,
          preferredColorScheme:
            value ?? (data.preferredColorScheme === "dark" ? "light" : "dark"),
        });
      },
      setTimeZone: (value?: string) => {
        setData({
          ...data,
          timeZone: value ?? data.timeZone,
        });
      },
      setLocale: (value?: string) => {
        setData({
          ...data,
          locale: value ?? data.locale,
        });
      },
    }),
    [data]
  );

  dayjs.tz.setDefault(data.timeZone);
  dayjs.locale(data.locale);

  return (
    <UserPreferences.Provider value={context}>
      {children}
    </UserPreferences.Provider>
  );
}

export function useUserPreferences() {
  const persist = useFetcher();

  return useContext(UserPreferences);
}
