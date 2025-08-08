import { resolve } from 'path';
import { defineConfig } from 'vitest/config';
import vitestBaseConfig from './vitest.base.config';

export default defineConfig({
  // @ts-ignore
  test: {
    ...vitestBaseConfig,
    setupFiles: [resolve(__dirname, 'packages/domain-pet-store/.test/setup.js')],
    include: ['packages/domain-pet-store/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
  }
});
