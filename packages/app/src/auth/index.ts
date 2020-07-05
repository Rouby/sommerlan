import { Auth } from '@aws-amplify/auth';
import LogRocket from 'logrocket';
import * as React from 'react';
import { atom, useRecoilState } from 'recoil';
import { toResource } from '../util';

Auth.configure({
  region: 'eu-central-1',
  userPoolId: 'eu-central-1_mD1SGJtDD',
  userPoolWebClientId: '4jav5504icbh82roajash68vcp',
  oauth: {
    domain: 'sommerlan.auth.eu-central-1.amazoncognito.com',
    redirectSignIn:
      process.env.NODE_ENV === 'production'
        ? 'https://sommerlan.rocks/'
        : 'http://localhost:3000/',
    redirectSignOut:
      process.env.NODE_ENV === 'production'
        ? 'https://sommerlan.rocks/'
        : 'http://localhost:3000/',
    responseType: 'code',
  },
  identityPoolId: 'eu-central-1:6e1392d2-6e7b-4cab-b1e6-c39d790f5f71',
});

export type User = {
  email: string;
  locale: string;
  name: string;
  picture: string;
  preferred_username: string;
  groups?: string[];
};

export const currentUserInfoResource = toResource(
  Auth.currentAuthenticatedUser()
    .then(
      (user) =>
        user?.attributes
          ? ({
              ...user.attributes,
              groups:
                user?.signInUserSession?.accessToken?.payload?.[
                  'cognito:groups'
                ],
            } as User)
          : (false as const),
      () => false as const,
    )
    .then((user) => {
      if (user) {
        LogRocket.identify(user.name);
      }
      return user;
    }),
);

const userInfo = atom<User | null>({ key: 'user', default: null });

export function useUser() {
  const [user, setUser] = useRecoilState(userInfo);

  React.useEffect(() => {
    let mounted = true;
    currentUserInfoResource.promise().then(
      (nextUser) => {
        if (mounted && user !== nextUser) {
          setUser(nextUser || null);
        }
      },
      () => {
        if (user !== null) {
          setUser(null);
        }
      },
    );
    return () => {
      mounted = false;
    };
  }, [user, setUser]);

  return user;
}
