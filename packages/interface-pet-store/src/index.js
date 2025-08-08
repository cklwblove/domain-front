/**
 * Pet Store Interface SDK
 * 基于 Swagger Petstore API 生成的接口 SDK
 */

import { checkStatus, getGlobalThis, isFunction, responseLog } from '@domain/interface-utils';
import { HttpClient } from '@winner-fed/nemo-engine/nemoCore/axiosHttp';
import cloneDeep from 'lodash.clonedeep';
import Qs from 'qs';
import { API_PETSTORE_PREFIX } from './constant';
import { interceptorsMapByPrefix } from './prefixMap';
import { NemoCore } from './services/petstore/nemoCore.js';

/**
 * 创建 Pet Store HTTP 请求客户端
 * @param {Object} config 配置参数
 * @param {boolean} config.debug 是否开启调试模式
 * @param {boolean} config.mock 是否开启 mock 模式
 * @param {string} config.mockURL mock 服务器地址
 * @param {string} config.requestPrefix Pet Store API 请求前缀，默认使用 https://petstore.swagger.io/v2
 * @param {Function} config.requestInterceptors 请求拦截器
 * @param {Function} config.requestInterceptorsCatch 请求拦截器错误处理
 * @param {Function} config.responseInterceptors 响应拦截器
 * @param {Function} config.responseInterceptorsCatch 响应拦截器错误处理
 */
export default function createPetStoreHttpRequest(config) {
  const {
    debug,
    mock,
    mockURL,
    // Pet Store API 请求前缀
    requestPrefix = API_PETSTORE_PREFIX,
    // 全局拦截器
    requestInterceptors,
    requestInterceptorsCatch,
    responseInterceptors,
    responseInterceptorsCatch
  } = config;

  const httpClient = new HttpClient(config);
  // 是否开启 mock 模式
  getGlobalThis().____MOCK_MODE = mock;
  // 支持自定义配置 Mock URL
  if (mock) {
    getGlobalThis().____MOCK_URL = mockURL;
  }

  // 使用外部传入的请求方法替换默认的fetch请求
  NemoCore.useRequest(httpClient.request);

  /**
   * 请求拦截器配置
   * 添加一个请求拦截器 （于transformRequest之前处理）
   */
  const axiosRequest = {
    success: async (config) => {
      let formatConfig = cloneDeep(config);

      // 设置 Pet Store API 前缀
      formatConfig.prefix = requestPrefix;

      // 支持 promise
      if (requestInterceptors && isFunction(requestInterceptors)) {
        formatConfig = await requestInterceptors(formatConfig);
      }

      const contentType = formatConfig.headers['Content-Type'];

      if (typeof contentType !== 'undefined') {
        if (contentType.indexOf('json') !== -1) {
          // 类型 `application/json`
          // 服务器收到的raw body(原始数据) '{name:'jhon',sex:'man'}'（普通字符串）
          formatConfig.data = JSON.stringify(formatConfig.data);
        } else if (contentType.indexOf('form-urlencoded') !== -1) {
          // 类型 `application/x-www-form-urlencoded`
          // 服务器收到的raw body(原始数据) name=homeway&key=nokey
          formatConfig.data = Qs.stringify(formatConfig.data);
        }
        // multipart/form-data 类型保持原样，通常用于文件上传
      }

      const { beforeRequest } = interceptorsMapByPrefix(formatConfig.prefix);

      return beforeRequest(formatConfig);
    },
    error: (error) => {
      // 请求拦截器错误捕获
      if (requestInterceptorsCatch && isFunction(requestInterceptorsCatch)) {
        return requestInterceptorsCatch(error);
      }
      return Promise.reject(error);
    }
  };

  /**
   * 响应拦截器配置
   * 添加一个返回拦截器 （于transformResponse之后处理）
   * 返回的数据类型默认是json，若是其他类型（text）就会出现问题，因此用try,catch捕获异常
   */
  const axiosResponse = {
    success: (response) => {
      const { afterResponse } = interceptorsMapByPrefix(response.config.prefix);

      if (debug) {
        responseLog(response);
      }

      response = afterResponse(response);

      if (responseInterceptors && isFunction(responseInterceptors)) {
        response = responseInterceptors(response);
      }

      return response;
    },
    error(error) {
      // 响应结果拦截器错误捕获
      if (responseInterceptorsCatch && isFunction(responseInterceptorsCatch)) {
        return responseInterceptorsCatch(error);
      } else {
        // 默认错误处理
        if (error) {
          const { response, code, message } = error || {};
          const err = error.toString();

          if (response) {
            // 请求已发出，但是不在2xx的范围
            // 对返回的错误进行一些处理
            return Promise.reject(checkStatus(response));
          }

          if (code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
            return Promise.reject({
              errorCode: -404,
              errorMsg: '接口请求超时,请刷新页面重试!'
            });
          }

          if (err && err.includes('Network Error')) {
            return Promise.reject({
              errorCode: -404,
              errorMsg: '网络错误'
            });
          }
        }

        return Promise.reject({
          errorCode: -404,
          errorMsg: '未知异常'
        });
      }
    }
  };

  // 这里将 response.data 为 string 做了 JSON.parse 的转换处理
  httpClient.instance.transformResponse = httpClient.instance.defaults.transformResponse.concat(
    function (data) {
      if (typeof data === 'string' && data.length) {
        try {
          return JSON.parse(data);
        } catch (e) {
          console.error('JSON 解析错误:', e);
          return {};
        }
      }
      return data;
    }
  );

  // 应用拦截器
  httpClient.instance.interceptors.request.use(axiosRequest.success, axiosRequest.error);
  httpClient.instance.interceptors.response.use(axiosResponse.success, axiosResponse.error);

  return httpClient;
}
