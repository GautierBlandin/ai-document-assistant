import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';
import * as apigateway from '@pulumi/aws-apigateway';

const assumeRole = aws.iam.getPolicyDocument({
  statements: [
    {
      effect: 'Allow',
      principals: [
        {
          type: 'Service',
          identifiers: ['lambda.amazonaws.com'],
        },
      ],
      actions: ['sts:AssumeRole'],
    },
  ],
});

const iamForLambda = new aws.iam.Role('iam_for_lambda', {
  name: 'iam_for_lambda',
  assumeRolePolicy: assumeRole.then((assumeRole) => assumeRole.json),
});

const lambda = new aws.lambda.Function('myLambda', {
  code: new pulumi.asset.AssetArchive({
    '.': new pulumi.asset.FileArchive('./dist/lambda'),
  }),
  handler: 'handler.handler',
  runtime: aws.lambda.Runtime.NodeJS20dX,
  role: iamForLambda.arn,
});

// Create an API Gateway REST API
const remixApi = new apigateway.RestAPI('remix-api', {
  routes: [
    {
      path: '/{proxy+}',
      method: 'ANY',
      eventHandler: lambda,
    },
  ],
});

// Export the API Gateway URL
export const apiUrl = remixApi.url;
