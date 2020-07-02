import * as cdk from '@aws-cdk/core';
import { AppStack } from '../src';

const app = new cdk.App();

new AppStack(app, 'SommerLAN-App', {
  env: { account: '850057636550', region: 'eu-central-1' },
  googleClientId: process.env.GOOGLE_CLIENT_ID!,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET!,
});

app.synth();
