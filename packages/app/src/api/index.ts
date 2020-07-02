import Auth from '@aws-amplify/auth';
import { Signer } from '@aws-amplify/core';
import { toResource } from '../util';

const endpoint =
  process.env.NODE_ENV === 'production'
    ? 'https://smsg2vdwvrebxc5x22nbbfv74m.appsync-api.eu-central-1.amazonaws.com/graphql'
    : 'http://localhost:5000/graphql';

type AuthMode = 'iam' | 'cognito' | 'auto';

export function query<T = any>({
  query,
  variables = null,
  authMode = 'auto',
}: {
  query: string;
  variables?: { [key: string]: any } | null;
  authMode?: AuthMode;
}) {
  return toResource<T>(
    request(
      JSON.stringify({
        query,
        variables,
      }),
      authMode,
    ),
  );
}

export function mutate<T = any>({
  mutation,
  variables = null,
  authMode = 'auto',
}: {
  mutation: string;
  variables?: { [key: string]: any } | null;
  authMode?: AuthMode;
}) {
  return toResource<T>(
    request(
      JSON.stringify({
        query: mutation,
        variables,
      }),
      authMode,
    ),
  );
}

async function request(body: string, authMode: AuthMode) {
  const authHeaders = await getAuthHeaders(authMode);

  if (!('Authorization' in authHeaders)) {
    const credentials = await Auth.currentCredentials();
    const signedParams = Signer.sign(
      {
        url: endpoint,
        method: 'POST',
        headers: {
          ...authHeaders,
          'Content-Type': 'application/json',
        },
        body,
        data: body,
      },
      {
        secret_key: credentials.secretAccessKey,
        access_key: credentials.accessKeyId,
        session_token: credentials.sessionToken,
      },
      {
        region: 'eu-central-1',
        service: 'appsync',
      },
    );
    if (signedParams.data) {
      signedParams.body = signedParams.data;
    }
    delete signedParams.headers['host'];

    const response = await fetch(endpoint, signedParams);

    if (!response.ok) {
      throw new Error('Request not ok');
    }

    return response.json();
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      ...authHeaders,
      'Content-Type': 'application/json',
    },
    body,
  });

  if (!response.ok) {
    throw new Error('Request not ok');
  }

  return response.json();
}

async function getAuthHeaders(
  authMode: AuthMode,
): Promise<{ [key: string]: string }> {
  switch (authMode) {
    case 'auto':
      try {
        return {
          Authorization: (await Auth.currentSession())
            .getAccessToken()
            .getJwtToken(),
        };
      } catch (err) {
        return {};
      }
    case 'cognito':
      return {
        Authorization: (await Auth.currentSession())
          .getAccessToken()
          .getJwtToken(),
      };
    default:
      return {};
  }
}
