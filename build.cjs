const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['server.ts'],
    bundle: true, // Bundle all dependencies into one file
    platform: 'node',
    target: 'node20',
    external: ['node:stream'], // Keep Node.js built-ins external
    outfile: 'dist/lambda/ai-book-reader.cjs',
    sourcemap: true,
    format: 'cjs',
  })
  .catch(() => process.exit(1));
