import { getGlobalThis } from '@domain/interface-utils';

/**
 * 检查是否为 mock 模式
 */
export function isMockMode() {
  return getGlobalThis().____MOCK_MODE;
}

/**
 * 获取 mock 数据
 * @param {string} mockPath
 */
export async function fetchMockJson(mockPath) {
  const module = await import(`../__mock__/${mockPath}.json`);
  return module.default;
}

/**
 * 格式化响应数据
 * @param {Error} error
 * @param {object} result
 * @returns {Array}
 */
export function formatResponse(error, result) {
  if (error) {
    return [error, null];
  }
  return [null, result?.data || result];
}

/**
 * 格式化日期字符串
 * @param {string} dateString
 * @returns {string}
 */
export function formatDateString(dateString) {
  if (!dateString) return '';
  try {
    return new Date(dateString).toISOString();
  } catch (e) {
    return dateString;
  }
}
