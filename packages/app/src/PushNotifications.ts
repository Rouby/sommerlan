import { message } from 'antd';
import * as React from 'react';
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { mutate } from './api';

const applicationServerKey =
  'BFgrQqNuZVowpcdsmTRQJkzPPKLISwco1EoHrUHqGaUbyGocrHWhywjkPEL8pzW0oqXcvocQAeqP4wmznmbm-iI';
const serviceWorkerRegistration = atom<ServiceWorkerRegistration | null>({
  key: 'serviceWorkerRegistration',
  default: null,
});
const pushPermissionState = atom<PushPermissionState | 'unavailable'>({
  key: 'pushPermissionState',
  default: 'prompt',
});
const pushSubscription = atom<PushSubscription | null>({
  key: 'pushSubscription',
  default: null,
});

export function PushNotifications() {
  const setServiceWorkerRegistration = useSetRecoilState(
    serviceWorkerRegistration,
  );
  const setPermissionState = useSetRecoilState(pushPermissionState);
  const setPushSubscription = useSetRecoilState(pushSubscription);

  React.useEffect(() => {
    let mounted = true;
    new Promise(async () => {
      const registration = await navigator.serviceWorker.ready;

      const state =
        (await registration.pushManager?.permissionState({
          userVisibleOnly: true,
          applicationServerKey,
        })) ?? 'unavailable';

      const subscription = await registration.pushManager?.getSubscription();

      if (mounted) {
        setServiceWorkerRegistration(registration);
        setPermissionState(state);
        setPushSubscription(subscription);
      }
    });
    return () => {
      mounted = false;
    };
  }, [setServiceWorkerRegistration, setPermissionState, setPushSubscription]);

  return null;
}

export function usePushNotifications() {
  const registration = useRecoilValue(serviceWorkerRegistration);
  const [subscription, setPushSubscription] = useRecoilState(pushSubscription);

  const subscribe = React.useCallback(() => {
    registration?.pushManager
      ?.subscribe({
        userVisibleOnly: true,
        applicationServerKey,
      })
      .then((subscription) => {
        const subscriptionJson = subscription?.toJSON();
        return mutate({
          mutation: `mutation($subscription: PushSubscriptionInput!) {
  addPushSubscription(subscription: $subscription) {
    endpoint
  }
}`,
          variables: {
            subscription: {
              endpoint: subscriptionJson.endpoint,
              keys: subscriptionJson.keys,
            },
          },
        })
          .promise()
          .then(({ errors }) => {
            if (errors?.length > 0) {
              throw errors;
            }
            return subscription;
          });
      })
      .then((subscription) => {
        message.success('Du erhälst ab jetzt Push-Nachrichten!');
        setPushSubscription(subscription);
      })
      .catch((err) => {
        if (Notification.permission === 'denied') {
          message.warn('Push-Nachrichten wurden abgelehnt!');
        } else {
          message.error('Es war nicht möglich Push-Nachrichten zu aktivieren!');
          console.error('Unable to subscribe to push.', err);
        }
      });
  }, [registration, setPushSubscription]);

  const unsubscribe = React.useCallback(() => {
    subscription
      ?.unsubscribe()
      .then(() =>
        mutate({
          mutation: `mutation($endpoint: ID!) {
  removePushSubscription(endpoint: $endpoint) {
    endpoint
  }
}`,
          variables: {
            endpoint: subscription?.endpoint,
          },
        }).promise(),
      )
      .then(() => {
        message.info('Du erhälst ab jetzt keine Push-Nachrichten mehr!');
        setPushSubscription(null);
      })
      .catch((err) => {
        message.error('Abmelung von Push-Nachrichten fehlgeschlagen!');
        console.error('Unable to unsubscribe from push.', err);
      });
  }, [subscription, setPushSubscription]);

  const canSubscribe = useRecoilValue(pushPermissionState) !== 'unavailable';

  const isSubscribed = subscription !== null;

  return {
    subscribe,
    unsubscribe,
    canSubscribe,
    isSubscribed,
  };
}
