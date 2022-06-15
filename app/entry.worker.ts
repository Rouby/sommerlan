/// <reference no-default-lib="true"/>
/// <reference lib="esNext" />
/// <reference lib="webworker" />

const sw: ServiceWorkerGlobalScope = self as any;

sw.addEventListener("activate", (event) => {
  event.waitUntil(sw.clients.claim());
});

sw.addEventListener("pushsubscriptionchange", (event: any) => {
  console.log("[Service Worker]: 'pushsubscriptionchange' event fired.");

  if (event.oldSubscription && event.newSubscription) {
    const body = new URLSearchParams();
    body.append("previousEndpoint", event.oldSubscription.endpoint);
    body.append("endpoint", event.newSubscription.endpoint);
    body.append("keys", JSON.stringify(event.newSubscription.toJSON().keys));

    event.waitUntil(
      fetch("/action/update-push-notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body,
      })
    );
  }
});

sw.addEventListener("push", (event) => {
  console.log("[Service Worker]: 'push' event fired.");

  if (event.data) {
    try {
      const { title, ...options } = event.data.json();
      sw.registration.showNotification(title, options);
    } catch (err) {
      console.log(
        "[Service Worker]: malformed push data '%s'.",
        event.data.text()
      );
    }
  }
});
