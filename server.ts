import { createRequestHandler } from '@remix-run/architect';
import * as build from './build/server';

export const handler = createRequestHandler({
  build,
});
