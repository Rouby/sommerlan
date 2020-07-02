import {
  CfnUserPoolIdentityProvider,
  UserPoolIdentityProviderBase,
  UserPoolIdentityProviderProps,
} from '@aws-cdk/aws-cognito';
import { Construct } from '@aws-cdk/core';

export interface UserPoolIdentityProviderGoogleProps
  extends UserPoolIdentityProviderProps {
  readonly clientId: string;

  readonly clientSecret: string;

  readonly scopes?: string[];
}

export class UserPoolIdentityProviderGoogle extends UserPoolIdentityProviderBase {
  public readonly providerName: string;

  constructor(
    scope: Construct,
    id: string,
    props: UserPoolIdentityProviderGoogleProps,
  ) {
    super(scope, id, props);

    const scopes = props.scopes ?? ['profile'];

    const resource = new CfnUserPoolIdentityProvider(this, 'Resource', {
      userPoolId: props.userPool.userPoolId,
      providerName: 'Google',
      providerType: 'Google',
      providerDetails: {
        client_id: props.clientId,
        client_secret: props.clientSecret,
        authorize_scopes: scopes.join(' '),
      },
      attributeMapping: super.configureAttributeMapping(),
    });

    this.providerName = super.getResourceNameAttribute(resource.ref);
  }
}
