import { Button, Typography } from 'antd';
import * as React from 'react';
import { News } from '../components';
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
      <News />
      <Button
        onClick={isSubscribed ? unsubscribe : subscribe}
        disabled={!canSubscribe}
        type={isSubscribed ? 'default' : 'primary'}
      >
        Benachrichtungen {isSubscribed ? 'deaktivieren' : 'aktivieren'}
      </Button>
    </>
  );
}
