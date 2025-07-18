import { TIMEOUT } from './constant';
import { httpRequest, httpResponse } from './services/request';

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 VueHookPlus 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc http://172.27.24.2:7788/winjs-document/plugins/request.html
 */
export const request = {
  timeout: TIMEOUT,
  requestInterceptors: [
    // 一个二元组，第一个元素是 request 拦截器，第二个元素是错误处理
    [
      (config) => {
        console.log('requestInterceptors 1', config);
        return httpRequest.success(config);
      },
      (error) => {
        console.log('error', error);
        return httpRequest.error(error);
      }
    ]
  ],
  responseInterceptors: [
    [
      (response) => {
        console.log('responseInterceptors 1', response);
        return httpResponse.success(response);
      },
      (error) => {
        console.log('responseInterceptors 2', error);
        return httpResponse.error(error);
      }
    ]
  ]
};

export function onRouterCreated({ router }) {
  console.log('onRouterCreated', router);
}

export function onAppCreated({ app }) {
  console.log('onAppCreated', app);
}

export function onMounted({ app, router }) {
  console.log('onMounted', app, router);
}

export const router = {
  // @ts-ignore
  scrollBehavior(to, from) {
    console.log('scrollBehavior', to, from);
  }
};
