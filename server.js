import { createRequestHandler } from '@remix-run/architect';
import * as build from './build/server/index.js';

const requestHandler = createRequestHandler({
  build,
});

export const handler = (...args) => {
  console.log(`Original args: ${JSON.stringify(args, null, 2)}`);

  // Check if args has the expected structure and modify paths
  if (args.length > 0 && args[0]) {
    if (args[0].rawPath) {
      args[0].rawPath = args[0].rawPath.replace(/^\/dev/, '');
    }
    if (args[0].requestContext && args[0].requestContext.http && args[0].requestContext.http.path) {
      args[0].requestContext.http.path = args[0].requestContext.http.path.replace(/^\/dev/, '');
    }
  }

  console.log(`Modified args: ${JSON.stringify(args, null, 2)}`);
  return requestHandler(...args);
};
