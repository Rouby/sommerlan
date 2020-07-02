import { HostedZone } from '@aws-cdk/aws-route53';
import * as cdk from '@aws-cdk/core';
import { ApiStack } from './ApiStack';
import { AuthStack } from './AuthStack';
import { FrontendStack } from './FrontendStack';

export class AppStack extends cdk.Stack {
  constructor(
    scope: cdk.Construct,
    id: string,
    props: cdk.StackProps & {
      googleClientId: string;
      googleClientSecret: string;
    },
  ) {
    super(scope, id, props);

    const zoneName = 'sommerlan.rocks';
    const domainName = `${zoneName}`;
    const hostedZone = HostedZone.fromHostedZoneAttributes(
      this,
      'SommerLANZone',
      { hostedZoneId: 'Z0976126CCOCS62CCA8U', zoneName },
    );

    const auth = new AuthStack(this, 'auth', {
      domainName,
      googleClientId: props.googleClientId,
      googleClientSecret: props.googleClientSecret,
    });
    new ApiStack(this, 'api', {
      userPool: auth.userPool,
      authRole: auth.authRole,
      unauthRole: auth.unauthRole,
    });
    new FrontendStack(this, 'frontend', { hostedZone, domainName });
  }
}
