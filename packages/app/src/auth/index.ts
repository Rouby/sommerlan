import { Auth } from '@aws-amplify/auth';
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

export const currentUserInfoResource = toResource(
  Auth.currentUserInfo().then((user) =>
    user?.attributes
      ? ({ ...user.attributes } as {
          email: string;
          locale: string;
          name: string;
          picture: string;
          preferred_username: string;
        })
      : false,
  ),
);
