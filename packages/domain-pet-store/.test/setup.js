import createPetStoreHttpRequest from '@domain/pet-store-sdk';
import { beforeAll } from 'vitest';

// 需要与 vite.config.ts 里的 proxy 保持一致
beforeAll(() => {
  // 初始化程序
  createPetStoreHttpRequest({
    baseURL: 'http://localhost:51274',
    debug: false,
    mock: false,
    requestInterceptors(config) {
      config.headers['Content-Type'] = 'application/json; charset=UTF-8';

      return config;
    },
    responseInterceptors(response) {
      return response;
    }
  });
});
