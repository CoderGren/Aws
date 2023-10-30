import { Stack, StackProps } from 'aws-cdk-lib';
import * as APIGW from 'aws-cdk-lib/aws-apigateway'
import * as IAM from 'aws-cdk-lib/aws-iam'
import * as Lambda from 'aws-cdk-lib/aws-lambda'
import { Construct } from 'constructs';
import {HitCounter} from "./hitcounter";
import {TableViewer} from "cdk-dynamo-table-viewer";

export class CdkWorkshopStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const lambdaRole = new IAM.Role(this, 'lambdaRole', {
      assumedBy: new IAM.ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [
          IAM.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole')
      ],
    })

    const helloLambda = new Lambda.Function(this, 'helloLambda', {
      functionName: `helloLambda`,
      runtime: Lambda.Runtime.NODEJS_18_X,
      code: Lambda.Code.fromAsset('lambda'),
      handler: 'hello.handler',
      role: lambdaRole,
    })

    const helloLambdaWithCounter = new HitCounter(this, 'helloLambdaHitCounter', {
      downstream: helloLambda,
    })

    new APIGW.LambdaRestApi(this, 'Endpoint', {
      handler: helloLambdaWithCounter.handler
    })

    new TableViewer(this, 'ViewHits', {
      title: 'Hits Table Viewer',
      table: helloLambdaWithCounter.table,
      sortBy: '-hits'
    })

  }
}
