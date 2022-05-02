import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getUserPreferences } from "~/utils/userPreferences.server";

export const action: ActionFunction = async ({ request }) => {
  const themeSession = await getUserPreferences(request);
  const requestText = await request.text();
  const form = new URLSearchParams(requestText);
  const theme = form.get("theme");

  if (theme !== "dark" && theme !== "light") {
    return json({
      success: false,
      message: `theme value of ${theme} is not a valid theme`,
    });
  }

  themeSession.theme = theme;

  return json(
    { success: true },
    { headers: { "Set-Cookie": await themeSession.commit() } }
  );
};
