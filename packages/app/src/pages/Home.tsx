import { Button, Typography } from 'antd';
import * as React from 'react';
import { usePushNotifications } from '../PushNotifications';

export function Home(): React.ReactElement {
  const {
    canSubscribe,
    isSubscribed,
    subscribe,
    unsubscribe,
  } = usePushNotifications();

  return (
    <>
      <Typography.Title>Sommer-LAN</Typography.Title>
      <Button
        onClick={isSubscribed ? unsubscribe : subscribe}
        disabled={!canSubscribe}
      >
        {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
      </Button>
    </>
  );
}
