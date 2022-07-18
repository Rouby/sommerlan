import { createCookieSessionStorage } from "@remix-run/node";
import invariant from "tiny-invariant";

invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be set");

const preferenceStorage = createCookieSessionStorage({
  cookie: {
    name: "user-pref",
    secure: true,
    secrets: [process.env.SESSION_SECRET],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});

async function getUserPreferences(request: Request) {
  const session = await preferenceStorage.getSession(
    request.headers.get("Cookie")
  );

  return {
    get preferredColorScheme() {
      const themeValue = session.get("preferredColorScheme");
      return themeValue === "light" || themeValue === "dark"
        ? (themeValue as "dark" | "light")
        : null;
    },
    set preferredColorScheme(theme: "dark" | "light" | null) {
      session.set("preferredColorScheme", theme);
    },
    get locale() {
      const localeValue = session.get("locale");
      return localeValue === "de" ? (localeValue as "de") : null;
    },
    set locale(locale: "de" | null) {
      session.set("locale", locale);
    },
    get timeZone() {
      const timeZoneValue = session.get("timeZone");
      return timeZoneValue ?? null;
    },
    set timeZone(timeZone: `${string}/${string}` | null) {
      session.set("timeZone", timeZone);
    },
    commit() {
      return preferenceStorage.commitSession(session);
    },
  };
}

export { getUserPreferences };
