/**
 * Pet Store API 前缀映射
 */

import { combineURLs } from '@winner-fed/cloud-utils/dist/cloud-utils.esm';
import { API_PETSTORE_PREFIX } from './constant.js';

// Pet Store API 响应数据结构通常比较简单，直接返回数据或错误信息

/**
 * 判断 Pet Store API 请求是否成功
 * Pet Store API 通常使用 HTTP 状态码来表示成功或失败
 */
function isSuccess(response) {
  return response.status >= 200 && response.status < 300;
}

/**
 * 处理 Pet Store API 错误
 */
function handleError(response) {
  return {
    errorCode: response.status || 500,
    errorMsg: response.statusText || 'Unknown error'
  };
}

/**
 * 处理 Pet Store API 数据
 */
function handleData(data) {
  return data;
}

/**
 * Pet Store API 请求响应格式化
 */
function formatPetStoreRequestResponse(prefix) {
  return {
    beforeRequest: (config) => {
      config.url = combineURLs(prefix, config.url);

      // 设置默认 Content-Type
      if (!config.headers['Content-Type']) {
        config.headers['Content-Type'] = 'application/json';
      }

      return config;
    },
    // 业务返回数据处理
    afterResponse: (response) => {
      const result = {};
      const { data } = response;

      if (isSuccess(response)) {
        result.data = handleData(data);
      } else {
        result.error = handleError(response);
      }

      return result;
    }
  };
}

export const PET_STORE_PREFIX_MAP = {
  petstore: 'petstore'
};

export function interceptorsMapByPrefix(prefix) {
  const prefixMap = new Map();

  // Pet Store API 处理
  prefixMap.set(API_PETSTORE_PREFIX, formatPetStoreRequestResponse(API_PETSTORE_PREFIX));

  return prefixMap.get(prefix) || formatPetStoreRequestResponse(prefix);
}
