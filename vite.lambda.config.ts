import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['linked-dep'],
  },
  build: {
    outDir: 'dist/lambda',
    lib: {
      entry: 'server.ts',
      name: 'handler',
      fileName: 'handler',
      formats: ['cjs'],
    },
    rollupOptions: {
      external: ['node:stream', '@remix-run/architect', 'react-dom', 'react'],
    },
    commonjsOptions: {
      include: [/linked-dep/, /node_modules/],
    },
  },
});
