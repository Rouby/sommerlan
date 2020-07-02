import { CognitoIdentityServiceProvider } from 'aws-sdk';

const Cognito = new CognitoIdentityServiceProvider({
  region: 'eu-central-1',
  endpoint: process.env.COGNITO_ENDPOINT,
});

type AppSyncLambdaRequest<
  TArgs = { [key: string]: unknown },
  TVars = { [key: string]: unknown }
> = {
  args: TArgs;
  info: {
    fieldName: string;
    variables: TVars;
    parentTypeName: string;
    selectionSetList: string[];
    selectionSetGraphQL: string;
  };
  identity: {
    'cognito:username': string;
    username: string;
  };
  source: any;
};

export async function handler(event: AppSyncLambdaRequest) {
  const { Username, UserAttributes } = await Cognito.adminGetUser({
    UserPoolId: process.env.USERPOOL_ID!,
    Username:
      event.source?.[event.info.fieldName] ??
      event.identity['cognito:username'],
  }).promise();

  return {
    id: Username,
    name: Username,
    ...UserAttributes?.reduce(
      (acc, attribute) => ({ ...acc, [attribute.Name]: attribute.Value }),
      {},
    ),
  };
}
