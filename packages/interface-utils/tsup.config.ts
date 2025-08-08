import { defineConfig } from 'tsup';
// @ts-ignore
import pkg from './package.json';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  banner: {
    js: `/** build time: ${new Date()}, build version ${pkg.version}  **/`
  }
});
