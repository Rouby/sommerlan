import { DnsValidatedCertificate } from '@aws-cdk/aws-certificatemanager';
import {
  CloudFrontWebDistribution,
  ViewerCertificate,
} from '@aws-cdk/aws-cloudfront';
import { ARecord, IHostedZone, RecordTarget } from '@aws-cdk/aws-route53';
import { CloudFrontTarget } from '@aws-cdk/aws-route53-targets';
import { Bucket, HttpMethods } from '@aws-cdk/aws-s3';
import {
  BucketDeployment,
  CacheControl,
  Source,
} from '@aws-cdk/aws-s3-deployment';
import * as cdk from '@aws-cdk/core';
import { Duration, RemovalPolicy } from '@aws-cdk/core';
import { dirname } from 'path';

export class FrontendStack extends cdk.NestedStack {
  constructor(
    scope: cdk.Construct,
    id: string,
    props: cdk.NestedStackProps & {
      hostedZone: IHostedZone;
      domainName: string;
    },
  ) {
    super(scope, id, props);

    const webappBucket = new Bucket(this, 'Webapp', {
      removalPolicy: RemovalPolicy.DESTROY,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'index.html',
      publicReadAccess: true,
      cors: [
        {
          allowedOrigins: ['*'],
          allowedMethods: [HttpMethods.GET],
        },
      ],
    });

    const certificate = new DnsValidatedCertificate(this, 'SiteCertificate', {
      region: 'us-east-1',
      domainName: props.domainName,
      hostedZone: props.hostedZone,
    });

    const distribution = new CloudFrontWebDistribution(
      this,
      'WebappDistribution',
      {
        viewerCertificate: ViewerCertificate.fromAcmCertificate(certificate, {
          aliases: [props.domainName],
        }),
        originConfigs: [
          {
            s3OriginSource: { s3BucketSource: webappBucket },
            behaviors: [{ isDefaultBehavior: true }],
          },
        ],
        errorConfigurations: [
          {
            errorCode: 403,
            errorCachingMinTtl: 0,
            responseCode: 200,
            responsePagePath: '/index.html',
          },
          {
            errorCode: 404,
            errorCachingMinTtl: 0,
            responseCode: 200,
            responsePagePath: '/index.html',
          },
        ],
      },
    );

    new BucketDeployment(this, 'DeployReactApp', {
      destinationBucket: webappBucket,
      sources: [Source.asset(dirname(require.resolve('@sommerlan/app')))],
      distribution,
      retainOnDelete: false,
      cacheControl: [CacheControl.maxAge(Duration.days(365))],
    });

    new ARecord(this, 'WebappRecord', {
      target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
      zone: props.hostedZone,
    });
  }
}
