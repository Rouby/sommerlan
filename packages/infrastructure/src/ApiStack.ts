import {
  AuthorizationType,
  GraphQLApi,
  MappingTemplate,
  PrimaryKey,
  Values,
} from '@aws-cdk/aws-appsync';
import { UserPool } from '@aws-cdk/aws-cognito';
import { AttributeType, BillingMode, Table } from '@aws-cdk/aws-dynamodb';
import { Effect, Policy, PolicyStatement, Role } from '@aws-cdk/aws-iam';
import * as cdk from '@aws-cdk/core';
import { NodejsFunction } from './constructs/NodejsFunction';

export class ApiStack extends cdk.NestedStack {
  constructor(
    scope: cdk.Construct,
    id: string,
    props: cdk.NestedStackProps & {
      userPool: UserPool;
      authRole: Role;
      unauthRole: Role;
    },
  ) {
    super(scope, id, props);

    const api = new GraphQLApi(this, 'Api', {
      name: 'sommerlan-api',
      schemaDefinitionFile: require.resolve('@sommerlan/schema'),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: AuthorizationType.USER_POOL,
          userPoolConfig: {
            userPool: props.userPool,
          },
        },
        additionalAuthorizationModes: [
          {
            authorizationType: AuthorizationType.IAM,
          },
        ],
      },
    });

    props.authRole.attachInlinePolicy(
      new Policy(this, 'AuthInline', {
        statements: [
          new PolicyStatement({
            effect: Effect.ALLOW,
            actions: ['appsync:GraphQL'],
            resources: [`${api.arn}/*`],
          }),
        ],
      }),
    );

    props.unauthRole.attachInlinePolicy(
      new Policy(this, 'UnauthInline', {
        statements: [
          new PolicyStatement({
            effect: Effect.ALLOW,
            actions: ['appsync:GraphQL'],
            resources: [
              `${api.arn}/types/Query/fields/getBoardgames`,
              `${api.arn}/types/Mutation/fields/addPushSubscription`,
              `${api.arn}/types/Mutation/fields/removePushSubscription`,
            ],
          }),
        ],
      }),
    );

    // const authRole = new Role(this, 'AuthRole', {
    //   assumedBy:
    // })

    const boardgamesTable = new Table(this, 'BoardgamesTable', {
      billingMode: BillingMode.PAY_PER_REQUEST,
      partitionKey: {
        name: 'id',
        type: AttributeType.STRING,
      },
    });

    const boardgamesDynamoDB = api.addDynamoDbDataSource(
      'BoardgamesDynamoDB',
      'The boardgames data source',
      boardgamesTable,
    );

    boardgamesDynamoDB.createResolver({
      typeName: 'Query',
      fieldName: 'getBoardgames',
      requestMappingTemplate: MappingTemplate.dynamoDbScanTable(),
      responseMappingTemplate: MappingTemplate.dynamoDbResultList(),
    });

    boardgamesDynamoDB.createResolver({
      typeName: 'Mutation',
      fieldName: 'addBoardgame',
      requestMappingTemplate: MappingTemplate.dynamoDbPutItem(
        PrimaryKey.partition('id').auto(),
        Values.projecting('boardgame')
          .attribute('owner')
          .is('$ctx.identity.username'),
      ),
      responseMappingTemplate: MappingTemplate.dynamoDbResultItem(),
    });

    boardgamesDynamoDB.createResolver({
      typeName: 'Mutation',
      fieldName: 'removeBoardgame',
      requestMappingTemplate: MappingTemplate.dynamoDbDeleteItem('id', 'id'),
      responseMappingTemplate: MappingTemplate.dynamoDbResultItem(),
    });

    const boardgameatlasAPI = api.addHttpDataSource(
      'BoardgamesatlasAPI',
      'boardgameatlas api',
      'https://www.boardgameatlas.com',
    );

    boardgameatlasAPI.createResolver({
      typeName: 'Query',
      fieldName: 'searchBoardgames',
      requestMappingTemplate: MappingTemplate.fromString(`{
        "version": "2018-05-29",
        "method": "GET",
        "resourcePath": $util.toJson("/api/search"),
        "params":{
            "query": {
              "client_id": "PC0TlOrMTV",
              "name": $utils.toJson($ctx.args.name),
              "limit": $utils.toJson($util.defaultIfNullOrEmpty($ctx.args.limit, "10")),
              "skip": $utils.toJson($util.defaultIfNullOrEmpty($ctx.args.skip, "0"))
            },
            "headers":{
                "Content-Type": "application/json"
            }
        }
      }`),
      responseMappingTemplate: MappingTemplate.fromString(`
        #if($ctx.error)
          $util.error($ctx.error.message, $ctx.error.type)
        #end
        #if($ctx.result.statusCode == 200)
            $utils.toJson($util.parseJson($ctx.result.body).games)
        #else
            ## If response is not 200, append the response to error block.
            $utils.appendError($ctx.result.body, "$ctx.result.statusCode")
        #end
      `),
    });

    const userResolveFunction = new NodejsFunction(this, 'userResolver', {
      packageName: '@sommerlan/function-user-resolver',
      logRetention: 7,
      environment: {
        USERPOOL_ID: props.userPool.userPoolId,
      },
    });
    userResolveFunction.addToRolePolicy(
      new PolicyStatement({
        effect: Effect.ALLOW,
        actions: ['cognito-idp:AdminGetUser'],
        resources: [props.userPool.userPoolArn],
      }),
    );

    const userLambda = api.addLambdaDataSource(
      'UserCognitoLoader',
      'Loads users from cognito',
      userResolveFunction,
    );

    userLambda.createResolver({
      typeName: 'Boardgame',
      fieldName: 'owner',
      requestMappingTemplate: MappingTemplate.lambdaRequest(),
      responseMappingTemplate: MappingTemplate.lambdaResult(),
    });

    userLambda.createResolver({
      typeName: 'Query',
      fieldName: 'user',
      requestMappingTemplate: MappingTemplate.lambdaRequest(),
      responseMappingTemplate: MappingTemplate.lambdaResult(),
    });

    const subscriptionsTable = new Table(this, 'SubscriptionsTable', {
      billingMode: BillingMode.PAY_PER_REQUEST,
      partitionKey: {
        name: 'id',
        type: AttributeType.STRING,
      },
    });

    const subscriptionsDynamoDB = api.addDynamoDbDataSource(
      'SubscriptionsDynamoDB',
      'Stores users push notifications',
      subscriptionsTable,
    );

    subscriptionsDynamoDB.createResolver({
      typeName: 'Mutation',
      fieldName: 'addPushSubscription',
      requestMappingTemplate: MappingTemplate.dynamoDbPutItem(
        PrimaryKey.partition('id').is('subscription.endpoint'),
        Values.projecting('subscription')
          .attribute('owner')
          .is('$ctx.identity.username'),
      ),
      responseMappingTemplate: MappingTemplate.dynamoDbResultItem(),
    });

    subscriptionsDynamoDB.createResolver({
      typeName: 'Mutation',
      fieldName: 'removePushSubscription',
      requestMappingTemplate: MappingTemplate.dynamoDbDeleteItem(
        'id',
        'endpoint',
      ),
      responseMappingTemplate: MappingTemplate.dynamoDbResultItem(),
    });
  }
}
