import * as apigateway from '@pulumi/aws-apigateway';
import { pulumiHandler } from './server';

// Create an API Gateway REST API
const remixApi = new apigateway.RestAPI('remix-api', {
  routes: [
    {
      path: '/{proxy+}',
      method: 'ANY',
      eventHandler: pulumiHandler,
    },
  ],
});

// Export the API Gateway URL
export const apiUrl = remixApi.url;
