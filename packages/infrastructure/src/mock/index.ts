import { CfnDataSource, CfnResolver } from '@aws-cdk/aws-appsync';
import { CfnTable, Table } from '@aws-cdk/aws-dynamodb';
import { CfnFunction, Function } from '@aws-cdk/aws-lambda';
import * as cdk from '@aws-cdk/core';
import { IConstruct } from '@aws-cdk/core';
import {
  AmplifyAppSyncSimulator,
  AmplifyAppSyncSimulatorAuthenticationType,
  AppSyncSimulatorDataSourceConfig,
  AppSyncSimulatorUnitResolverConfig,
  RESOLVER_KIND,
} from 'amplify-appsync-simulator';
import { DynamoDB } from 'aws-sdk';
import { readFileSync } from 'fs';
import fetch from 'node-fetch';
import { URLSearchParams } from 'url';
import { AppStack } from '../';
import { NodejsFunction } from '../constructs/NodejsFunction';
import * as Cognito from './Cognito';

console.log('ENV', process.env.DYNAMO_ENDPOINT);
const dynamoClient = new DynamoDB({
  endpoint: process.env.DYNAMO_ENDPOINT,
  region: 'eu-central-1',
});

start().catch((err) => {
  console.log(err);
  process.exit(1);
});

async function start() {
  const simulator = new AmplifyAppSyncSimulator({ port: 5000, wsPort: 5005 });

  Cognito.start();
  process.env.COGNITO_ENDPOINT = Cognito.endpoint;

  console.log('');
  console.log(`Cognito Mock: ${process.env.COGNITO_ENDPOINT}`);

  const { tables, ...config } = analyzeStack();

  console.log('');
  console.log('Mocked DataSources:');
  [...config.dataSources]
    .sort((a, b) =>
      a.type < b.type ? -1 : a.type === b.type ? (a.name < b.name ? -1 : 1) : 1,
    )
    .forEach((ds) => console.log(`  * ${ds.name} (${ds.type})`));
  console.log('');
  console.log('Mocked Resolvers:');
  [...config.resolvers]
    .sort((a, b) =>
      a.typeName < b.typeName
        ? -1
        : a.typeName === b.typeName
        ? a.fieldName < b.fieldName
          ? -1
          : 1
        : 1,
    )
    .forEach((r) =>
      console.log(`  * ${r.typeName}.${r.fieldName} (-> ${r.dataSourceName})`),
    );
  console.log('');

  simulator.init({
    appSync: {
      name: 'Mock',
      defaultAuthenticationType: {
        authenticationType:
          AmplifyAppSyncSimulatorAuthenticationType.AMAZON_COGNITO_USER_POOLS,
        cognitoUserPoolConfig: {},
      },
      additionalAuthenticationProviders: [
        {
          authenticationType: AmplifyAppSyncSimulatorAuthenticationType.AWS_IAM,
        },
      ],
    },
    schema: {
      content: readFileSync(require.resolve('@sommerlan/schema'), 'utf8'),
    },
    ...config,
  });

  for (const table of tables) {
    const KeySchema = table.keySchema.map<DynamoDB.KeySchemaElement>((d) => ({
      AttributeName: d.attributeName,
      KeyType: d.keyType,
    }));
    const AttributeDefinitions = table.attributeDefinitions.map<
      DynamoDB.AttributeDefinition
    >((d) => ({
      AttributeName: d.attributeName,
      AttributeType: d.attributeType,
    }));

    try {
      await dynamoClient
        .describeTable({
          TableName: table.name,
        })
        .promise();

      // TODO recreate table if KeySchema changes?

      await dynamoClient
        .updateTable({
          TableName: table.name,
          BillingMode: 'PAY_PER_REQUEST',
          AttributeDefinitions,
        })
        .promise();
    } catch (err) {
      if (err.code !== 'ResourceNotFoundException') {
        throw err;
      }

      await dynamoClient
        .createTable({
          TableName: table.name,
          BillingMode: 'PAY_PER_REQUEST',
          KeySchema,
          AttributeDefinitions,
        })
        .promise();
    }
  }

  await simulator.start();

  console.log(`Simulator running on ${simulator.url}`);
}

function analyzeStack(): {
  resolvers: AppSyncSimulatorUnitResolverConfig[];
  dataSources: AppSyncSimulatorDataSourceConfig[];
  tables: {
    name: string;
    keySchema: CfnTable.KeySchemaProperty[];
    attributeDefinitions: CfnTable.AttributeDefinitionProperty[];
  }[];
} {
  const app = new cdk.App();

  process.env.NO_BUNDLE = 'true';

  const stack = new AppStack(app, 'SommerLAN-App', {
    env: { account: '850057636550', region: 'eu-central-1' },
    googleClientId: process.env.GOOGLE_CLIENT_ID!,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  });

  const relevantResources = stack.node.children.reduce(toResources, []);

  const dataSources = relevantResources
    .filter(isDataSource)
    .map<AppSyncSimulatorDataSourceConfig>((ds) => {
      switch (ds.type) {
        case 'AMAZON_DYNAMODB':
          return {
            type: ds.type,
            name: ds.name,
            config: {
              tableName: toTableName(
                resolveValue(ds.dynamoDbConfig)?.tableName!,
              ),
              endpoint: process.env.DYNAMO_ENDPOINT!,
              region: 'eu-central-1',
            },
          };
        case 'AWS_LAMBDA': {
          const lambda = relevantResources
            .filter(isFunction)
            .find(
              (f) =>
                f.functionArn ===
                resolveValue(ds.lambdaConfig)?.lambdaFunctionArn,
            );
          let invoke: (
            event: any,
            context: any,
          ) => Promise<unknown> = async () => {
            throw new Error('Not implemented');
          };
          if (isNodejsFunction(lambda)) {
            const envVariables = {
              ...process.env,
              ...resolveValue(
                resolveValue(
                  (lambda.node.defaultChild as CfnFunction).environment,
                )?.variables,
              ),
            };
            invoke = async (event, context) => {
              console.log(`Invoking ${lambda.packageName}`);
              const originalEnv = process.env;
              process.env = envVariables || {};
              const { handler } = await import(lambda.packageName);
              const result = await handler(event, context);
              process.env = originalEnv;
              return result;
            };
          }
          return {
            type: ds.type,
            name: ds.name,
            invoke,
          };
        }
        case 'HTTP':
        default: {
          const endpoint = resolveValue(ds.httpConfig)?.endpoint;
          return {
            type: 'AWS_LAMBDA',
            name: ds.name,
            invoke: async (event: any) => {
              const queryParams = new URLSearchParams(
                event.params.query || {},
              ).toString();
              // TODO replace with more generic code?
              console.log(
                'Invoking mocked HTTP source: %s',
                `${endpoint}${event.resourcePath}?${queryParams}`,
              );
              const resp = await fetch(
                `${endpoint}${event.resourcePath}?${queryParams}`,
                {
                  headers: { ...event.params.headers },
                },
              );
              const data = await resp.json();
              return data.games;
            },
          };
        }
      }
    });

  const resolvers = relevantResources
    .filter(isResolver)
    .map<AppSyncSimulatorUnitResolverConfig>((r) => ({
      kind: RESOLVER_KIND.UNIT,
      typeName: r.typeName,
      fieldName: r.fieldName,
      ...(relevantResources
        .filter(isDataSource)
        .find((ds) => ds.name === r.dataSourceName)?.type === 'HTTP'
        ? {
            requestMappingTemplate: `{"version": "2017-02-28", "operation": "Invoke", "payload": ${r.requestMappingTemplate}}`,
            responseMappingTemplate: '$util.toJson($ctx.result)',
          }
        : {
            requestMappingTemplate:
              r.requestMappingTemplate ??
              '{"version": "2017-02-28", "operation": "Invoke", "payload": {}}',
            responseMappingTemplate: r.responseMappingTemplate ?? '$ctx.result',
          }),
      dataSourceName: r.dataSourceName!,
    }));

  return {
    resolvers,
    dataSources,
    tables: dataSources
      .filter((s) => s.type === 'AMAZON_DYNAMODB')
      .map((dc) => {
        const table = relevantResources
          .filter(isTable)
          .find(
            (t) => toTableName(t.tableName) === (dc as any).config.tableName,
          );
        return {
          name: toTableName(`${table?.tableName}`),
          keySchema: resolveValue(
            (table?.node.defaultChild as CfnTable).keySchema,
          )!.map((d) => resolveValue(d)!),
          attributeDefinitions: resolveValue(
            (table?.node.defaultChild as CfnTable).attributeDefinitions,
          )!.map((d) => resolveValue(d)!),
        };
      }),
  };

  // function getMappingTemplateLocation(key: string, template: string) {
  //   mappingTemplates.push({ path: key, content: template });
  //   return key;
  // }
}

type CfnResource = CfnResolver | CfnDataSource | Table | Function;

function toResources(
  resources: CfnResource[],
  construct: IConstruct,
): CfnResource[] {
  if (
    isDataSource(construct) ||
    isResolver(construct) ||
    isTable(construct) ||
    isFunction(construct)
  ) {
    resources = [...resources, construct];
  }
  return construct.node.children.reduce(toResources, resources);
}

function isDataSource(c: cdk.IConstruct): c is CfnDataSource {
  return c instanceof CfnDataSource;
}
function isResolver(c: cdk.IConstruct): c is CfnResolver {
  return c instanceof CfnResolver;
}
function isTable(c: cdk.IConstruct): c is Table {
  return c instanceof Table;
}
function isFunction(c: cdk.IConstruct): c is Function {
  return c instanceof Function;
}
function isNodejsFunction(c: Function | undefined): c is NodejsFunction {
  return c instanceof NodejsFunction;
}

function resolveValue<T>(c: cdk.IResolvable | T): T | undefined {
  if (typeof (c as cdk.IResolvable)?.resolve === 'function') {
    return (c as cdk.IResolvable)?.resolve({} as any);
  }
  return c as T;
}

function toTableName(s: string): string {
  return s.replace(/[[\]${}]/g, '-');
}
