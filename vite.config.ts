import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from '@rollup/plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';
import jsonServer from 'vite-plugin-simple-json-server';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    jsonServer(),
    {
      ...eslint({
        include: 'src/**/*.+(ts|tsx)',
      }),
      enforce: 'pre',
    },
    tsconfigPaths(),
  ],
});
