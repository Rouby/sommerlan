import {
  CfnIdentityPool,
  CfnIdentityPoolRoleAttachment,
  CfnUserPoolClient,
  CfnUserPoolGroup,
  UserPool,
  UserPoolClientIdentityProvider,
  UserPoolDomain,
} from '@aws-cdk/aws-cognito';
import { Role, WebIdentityPrincipal } from '@aws-cdk/aws-iam';
import * as cdk from '@aws-cdk/core';
import { UserPoolIdentityProviderGoogle } from './constructs/UserPoolIdentityProviderGoogle';

export class AuthStack extends cdk.NestedStack {
  public userPool: UserPool;
  public identityPool: CfnIdentityPool;

  public authRole: Role;
  public unauthRole: Role;

  constructor(
    scope: cdk.Construct,
    id: string,
    props: cdk.NestedStackProps & {
      domainName: string;
      googleClientId: string;
      googleClientSecret: string;
    },
  ) {
    super(scope, id, props);

    this.userPool = new UserPool(this, 'UserPool', {});

    new CfnUserPoolGroup(this, 'Verified', {
      userPoolId: this.userPool.userPoolId,
      groupName: 'Verified',
    });

    new CfnUserPoolGroup(this, 'NewsEditors', {
      userPoolId: this.userPool.userPoolId,
      groupName: 'NewsEditors',
    });

    new UserPoolDomain(this, 'UserPoolDomain', {
      userPool: this.userPool,
      cognitoDomain: { domainPrefix: 'sommerlan' },
    });

    const googleIDP = new UserPoolIdentityProviderGoogle(this, 'GoogleIDP', {
      clientId: props.googleClientId,
      clientSecret: props.googleClientSecret,
      userPool: this.userPool,
      scopes: ['profile', 'email', 'openid'],
      attributeMapping: {
        email: { attributeName: 'email' },
        profilePicture: { attributeName: 'picture' },
        locale: { attributeName: 'locale' },
        givenName: { attributeName: 'given_name' },
        familyName: { attributeName: 'family_name' },
        fullname: { attributeName: 'name' },
        preferredUsername: { attributeName: 'name' },
      },
    });

    const userPoolClient = this.userPool.addClient('UserPoolClient', {
      supportedIdentityProviders: [
        UserPoolClientIdentityProvider.custom('Google'),
      ],
    });

    (userPoolClient.node.defaultChild as CfnUserPoolClient).callbackUrLs = [
      `https://${props.domainName}/`,
      'http://localhost:3000/', // TODO remove?
    ];
    userPoolClient.node.addDependency(googleIDP);

    this.identityPool = new CfnIdentityPool(this, 'IdentityPool', {
      allowUnauthenticatedIdentities: true,
      cognitoIdentityProviders: [
        {
          providerName: this.userPool.userPoolProviderName,
          clientId: userPoolClient.userPoolClientId,
        } as CfnIdentityPool.CognitoIdentityProviderProperty,
      ],
    });

    this.authRole = new Role(this, 'AuthRole', {
      assumedBy: new WebIdentityPrincipal('cognito-identity.amazonaws.com', {}),
    });

    this.unauthRole = new Role(this, 'UnauthRole', {
      assumedBy: new WebIdentityPrincipal('cognito-identity.amazonaws.com', {}),
    });

    new CfnIdentityPoolRoleAttachment(this, 'AttachAuthRole', {
      identityPoolId: this.identityPool.ref,
      roles: {
        authenticated: this.authRole.roleArn,
        unauthenticated: this.unauthRole.roleArn,
      },
    });
  }
}
