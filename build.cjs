// build.js

const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['server.ts'], // Entry file
    bundle: true, // Bundle all dependencies into one file
    platform: 'node', // Specify the platform (node for Node.js)
    target: 'node20', // Target version of Node.js
    external: ['node:stream'], // Keep Node.js built-ins external
    outfile: 'dist/lambda/ai-book-reader.js', // Output file
    sourcemap: true, // Generate source map
    format: 'cjs', // Output format as CommonJS
  })
  .catch(() => process.exit(1));
