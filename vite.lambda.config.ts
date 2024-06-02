import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist/lambda',
    lib: {
      entry: 'server.ts',
      name: 'handler',
      fileName: 'handler',
      formats: ['cjs'],
    },
    rollupOptions: {
      external: ['node:stream'],
    },
  },
});
