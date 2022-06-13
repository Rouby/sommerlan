/// <reference no-default-lib="true"/>
/// <reference lib="esNext" />
/// <reference lib="webworker" />

const sw: ServiceWorkerGlobalScope = self as any;

sw.addEventListener("activate", (event) => {
  event.waitUntil(sw.clients.claim());
});

sw.addEventListener("pushsubscriptionchange", (event) => {
  console.log("[Service Worker]: 'pushsubscriptionchange' event fired.");

  event.waitUntil(
    sw.registration.pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationServerKey: process.env.APPLICATION_SERVER_KEY,
      })
      .then((newSubscription) => {
        // TODO: Send to application server
        console.log("[Service Worker] New subscription: ", newSubscription);
      })
  );
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
