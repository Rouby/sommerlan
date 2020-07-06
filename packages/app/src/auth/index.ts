import { Auth } from '@aws-amplify/auth';
import LogRocket from 'logrocket';
import * as React from 'react';
import { atom, useRecoilState } from 'recoil';
import { toResource } from '../util';

Auth.configure({
  region: 'eu-central-1',
  userPoolId: process.env.REACT_APP_AUTH_USERPOOL_ID,
  userPoolWebClientId: process.env.REACT_APP_AUTH_USERPOOL_WEBCLIENT_ID,
  oauth: {
    domain: process.env.REACT_APP_AUTH_OAUTH_DOMAIN,
    redirectSignIn: `${window.location.origin}/`,
    redirectSignOut: `${window.location.origin}/`,
    responseType: 'code',
  },
  identityPoolId: process.env.REACT_APP_AUTH_IDENTITYPOOL_ID,
});

export type User = {
  id: string;
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
              id: user.username,
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
      if (process.env.REACT_APP_LOGROCKET_ID && user) {
        LogRocket.identify(user.id, {
          name: user.name,
          email: user.email,
          groups: user.groups?.join(', ') ?? 'none',
        });
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
