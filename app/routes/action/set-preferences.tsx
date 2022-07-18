import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getUserPreferences } from "~/utils/userPreferences.server";

export const action: ActionFunction = async ({ request }) => {
  const prefSession = await getUserPreferences(request);
  const requestText = await request.text();
  const form = new URLSearchParams(requestText);
  const preferredColorScheme = form.get("preferredColorScheme");
  const timeZone = form.get("timeZone");
  // const locale = form.get("locale");

  if (preferredColorScheme === "dark" || preferredColorScheme === "light") {
    prefSession.preferredColorScheme = preferredColorScheme;
  }

  if (timeZone?.match(/^.+\/.+$/)) {
    prefSession.timeZone = timeZone as any;
  }

  // prefSession.locale = locale;

  return json(
    { success: true },
    { headers: { "Set-Cookie": await prefSession.commit() } }
  );
};
