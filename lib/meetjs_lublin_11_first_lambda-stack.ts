import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs';


export class MeetjsLublin11FirstLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda Definition
    const mdyFirstLambdaFunction = new lambda.NodejsFunction(this, 'my-first-lambda-function', {
      handler: 'handler',
      entry: path.join(__dirname, '/functions/my_first_lambda/main.ts'),
    });
  }
}
