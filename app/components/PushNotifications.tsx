import { useCallback, useEffect, useState } from "react";

export function usePushNotifications() {
  const [registration, setRegistration] =
    useState<ServiceWorkerRegistration | null>(null);
  const [subscription, setPushSubscription] = useState<PushSubscription | null>(
    null
  );
  const [permissionState, setPermissionState] = useState<
    PermissionState | "unavailable"
  >("unavailable");

  useEffect(() => {
    let mounted = true;
    new Promise(async () => {
      const registration = await navigator.serviceWorker.ready;

      const state =
        (await registration.pushManager?.permissionState({
          userVisibleOnly: true,
          applicationServerKey: window.env.APPLICATION_SERVER_KEY,
        })) ?? "unavailable";

      const subscription = await registration.pushManager?.getSubscription();

      if (mounted) {
        setRegistration(registration);
        setPushSubscription(subscription);
        setPermissionState(state);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const subscribe = useCallback(() => {
    return registration?.pushManager
      ?.subscribe({
        userVisibleOnly: true,
        applicationServerKey: window.env.APPLICATION_SERVER_KEY,
      })
      .then((subscription) => {
        const subscriptionJson = subscription?.toJSON();
        const data = new URLSearchParams();
        data.append("endpoint", subscriptionJson?.endpoint ?? "");
        data.append("keys", JSON.stringify(subscriptionJson?.keys));
        return fetch("action/add-push-notification", {
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }).then(() => subscription);
      })
      .then((subscription) => {
        setPushSubscription(subscription);
        return "subscribed" as const;
      })
      .catch((err) => {
        if (Notification.permission === "denied") {
          return "denied" as const;
        } else {
          console.error("Unable to subscribe to push.", err);
          return "failed" as const;
        }
      });
  }, [registration?.pushManager]);

  const unsubscribe = useCallback(() => {
    return subscription
      ?.unsubscribe()
      .then(() => {
        const data = new URLSearchParams();
        data.set("endpoint", subscription?.endpoint ?? "");
        return fetch("action/remove-push-notification", {
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
      })
      .then(() => {
        setPushSubscription(null);
        return true;
      })
      .catch((err) => {
        console.error("Unable to unsubscribe from push.", err);
        return false;
      });
  }, [subscription]);

  const canSubscribe = permissionState !== "unavailable";

  const isSubscribed = subscription !== null;

  return {
    subscribe,
    unsubscribe,
    canSubscribe,
    isSubscribed,
  };
}
