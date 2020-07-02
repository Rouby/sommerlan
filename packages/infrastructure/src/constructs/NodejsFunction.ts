import { Code, Function, FunctionProps, Runtime } from '@aws-cdk/aws-lambda';
import { Construct } from '@aws-cdk/core';
import { processingSync } from '@rouby/lambda-pack';

export class NodejsFunction extends Function {
  public packageName: string;

  constructor(
    scope: Construct,
    id: string,
    props: Omit<FunctionProps, 'code' | 'handler' | 'runtime'> & {
      packageName: string;
      handler?: string;
      runtime?: Runtime;
    },
  ) {
    const zipPath = process.env.NO_BUNDLE
      ? '.'
      : processingSync(props.packageName);

    super(scope, id, {
      ...props,
      code: Code.fromAsset(zipPath),
      runtime: props.runtime ?? Runtime.NODEJS_12_X,
      handler: props.handler ?? 'main.handler',
    });

    this.packageName = props.packageName;
  }
}
