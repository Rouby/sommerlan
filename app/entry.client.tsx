import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";

hydrate(<RemixBrowser />, document);

window.addEventListener("load", () => {
  navigator.serviceWorker.register("/entry.worker.js");
});
