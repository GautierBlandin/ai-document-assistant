import { createRequestHandler } from '@remix-run/architect';
import * as aws from '@pulumi/aws';

const handler = createRequestHandler({
  build: require('./build'),
});

export const pulumiHandler = new aws.lambda.CallbackFunction('lambda', {
  callback: handler,
});
