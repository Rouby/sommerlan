import { UserOutlined } from '@ant-design/icons';
import { Auth, CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Avatar, Space, Spin } from 'antd';
import * as React from 'react';
import { createUseStyles } from 'react-jss';
import { currentUserInfoResource } from '../auth';
import SignInWithGoogleButtonHover from './assets/btn_google_signin_dark_focus_web@2x.png';
import SignInWithGoogleButton from './assets/btn_google_signin_dark_normal_web@2x.png';

export function AuthButton(): React.ReactElement {
  return (
    <React.Suspense
      fallback={
        <Space align="center">
          <Spin />
        </Space>
      }
    >
      <AuthdButton />
    </React.Suspense>
  );
}

const useStyles = createUseStyles({
  signInButton: {
    height: 36,
    margin: 'auto',
    outline: 'none',
    '&:hover': {
      backgroundImage: `url(${SignInWithGoogleButtonHover})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  },
});

function AuthdButton(): React.ReactElement {
  const classes = useStyles();

  const currentUserInfo = currentUserInfoResource.read();

  return currentUserInfo ? (
    <div style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
      <Space align="center">
        <Avatar src={currentUserInfo.picture} icon={<UserOutlined />} />
        <span>Willkommen, {currentUserInfo.preferred_username}!</span>
      </Space>
    </div>
  ) : (
    <input
      className={classes.signInButton}
      type="image"
      alt="Sign in with Google"
      src={SignInWithGoogleButton}
      onClick={() =>
        Auth.federatedSignIn({
          provider: CognitoHostedUIIdentityProvider.Google,
        })
      }
    />
  );
}
