import { petstore } from '@domain/pet-store-sdk/src/services/petstore';
import to from 'await-to-js';
import { formatResponse } from '../../sharedUtils';

const $httpApi = petstore.user;

/**
 * 创建用户
 * @param params
 * @returns {Promise<*[]>}
 */
export async function createUserService(params) {
  const [error, result] = await to($httpApi.createUser(params));
  return formatResponse(error, result);
}

/**
 * 批量创建用户（数组方式）
 * @param params
 * @returns {Promise<*[]>}
 */
export async function createUsersWithArrayInputService(params) {
  const [error, result] = await to($httpApi.createUsersWithArrayInput(params));
  return formatResponse(error, result);
}

/**
 * 批量创建用户（列表方式）
 * @param params
 * @returns {Promise<*[]>}
 */
export async function createUsersWithListInputService(params) {
  const [error, result] = await to($httpApi.createUsersWithListInput(params));
  return formatResponse(error, result);
}

/**
 * 用户登录
 * @param params
 * @returns {Promise<*[]>}
 */
export async function loginUserService(params) {
  const [error, result] = await to($httpApi.loginUser(params));
  return formatResponse(error, result);
}

/**
 * 用户登出
 * @param params
 * @returns {Promise<*[]>}
 */
export async function logoutUserService(params) {
  const [error, result] = await to($httpApi.logoutUser(params));
  return formatResponse(error, result);
}

/**
 * 根据用户名获取用户
 * @param params
 * @returns {Promise<*[]>}
 */
export async function getUserByNameService(params) {
  const [error, result] = await to($httpApi.getUserByName(params));
  return formatResponse(error, result);
}

/**
 * 更新用户信息
 * @param params
 * @returns {Promise<*[]>}
 */
export async function updateUserService(params) {
  const [error, result] = await to($httpApi.updateUser(params));
  return formatResponse(error, result);
}

/**
 * 删除用户
 * @param params
 * @returns {Promise<*[]>}
 */
export async function deleteUserService(params) {
  const [error, result] = await to($httpApi.deleteUser(params));
  return formatResponse(error, result);
}
