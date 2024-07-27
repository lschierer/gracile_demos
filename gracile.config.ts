import { defineConfig } from '@gracile/gracile';
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

export default defineConfig({
  vite: {
    plugins: [
      tsconfigPaths(),
    ]
  }
});
