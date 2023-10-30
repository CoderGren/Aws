import * as cdk from 'aws-cdk-lib'
import * as DynamoDB from 'aws-cdk-lib/aws-dynamodb'
import * as Lambda from 'aws-cdk-lib/aws-lambda'
import { Construct } from 'constructs'

export interface HitCounterProps {
    downstream: Lambda.IFunction,
}

export class HitCounter extends Construct {
    public readonly handler: Lambda.Function

    constructor(scope: Construct, id: string, props: HitCounterProps) {
        super(scope, id)

        const table = new DynamoDB.Table(this, 'Hits', {
            tableName: 'hitsTable',
            partitionKey: {
                name: 'path',
                type: DynamoDB.AttributeType.STRING
            },
            removalPolicy: cdk.RemovalPolicy.DESTROY
        })

        this.handler = new Lambda.Function(this, 'hitsLambda', {
            functionName: 'hitsLambda',
            runtime: Lambda.Runtime.NODEJS_18_X,
            handler: 'hitcounter.handler',
            code: Lambda.Code.fromAsset('lambda'),
            environment: {
                DOWNSTREAM_FUNCTION_NAME: props.downstream.functionName,
                HITS_TABLE_NAME: table.tableName
            }
        })

        table.grantReadWriteData(this.handler)
        props.downstream.grantInvoke(this.handler)
    }
}