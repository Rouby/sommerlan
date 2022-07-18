import { injectStylesIntoStaticMarkup } from "@mantine/ssr";
import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import dayjs from "dayjs";
import { renderToString } from "react-dom/server";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  // TODO get this from context??
  dayjs.tz.setDefault(
    remixContext.routeData.root.json.timeZone ?? "Europe/Berlin"
  );
  dayjs.locale(remixContext.routeData.root.json.locale ?? "de");

  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response(
    "<!DOCTYPE html>" + injectStylesIntoStaticMarkup(markup),
    {
      status: responseStatusCode,
      headers: responseHeaders,
    }
  );
}
