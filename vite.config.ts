import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 51274,
    proxy: {
      '/': {
        target: 'https://petstore.swagger.io/v2/',
        changeOrigin: true // 是否允许跨域
      }
    }
  }
});
