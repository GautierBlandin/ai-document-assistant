import { createRequestHandler } from '@remix-run/architect';
import * as build from './build/server/index.js';

const requestHandler = createRequestHandler({
  build,
});

export const handler = (...args: Parameters<typeof requestHandler>) => {
  return requestHandler(...args);
};
