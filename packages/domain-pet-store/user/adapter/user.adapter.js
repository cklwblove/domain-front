import { fetchMockJson, isMockMode } from '../../sharedUtils';
import {
  createUserRepository,
  createUsersWithArrayInputRepository,
  createUsersWithListInputRepository,
  deleteUserRepository,
  getUserByNameRepository,
  loginUserRepository,
  logoutUserRepository,
  updateUserRepository
} from '../repository/user.repository';

/**
 * 创建用户
 * @param params
 * @returns {Promise<[*,{}]|[null,{state}]>}
 */
export async function createUserAdapter(params) {
  if (isMockMode()) {
    return [null, await fetchMockJson('user/createUserAdapter')];
  }
  return await createUserRepository(params);
}

/**
 * 批量创建用户（数组方式）
 * @param params
 * @returns {Promise<[*,{}]|[null,{state}]>}
 */
export async function createUsersWithArrayInputAdapter(params) {
  if (isMockMode()) {
    return [null, await fetchMockJson('user/createUsersWithArrayInputAdapter')];
  }
  return await createUsersWithArrayInputRepository(params);
}

/**
 * 批量创建用户（列表方式）
 * @param params
 * @returns {Promise<[*,{}]|[null,{state}]>}
 */
export async function createUsersWithListInputAdapter(params) {
  if (isMockMode()) {
    return [null, await fetchMockJson('user/createUsersWithListInputAdapter')];
  }
  return await createUsersWithListInputRepository(params);
}

/**
 * 用户登录
 * @param params
 * @returns {Promise<[*,{}]|[null,{token, success}]>}
 */
export async function loginUserAdapter(params) {
  if (isMockMode()) {
    return [null, await fetchMockJson('user/loginUserAdapter')];
  }
  return await loginUserRepository(params);
}

/**
 * 用户登出
 * @param params
 * @returns {Promise<[*,{}]|[null,{state}]>}
 */
export async function logoutUserAdapter(params) {
  if (isMockMode()) {
    return [null, await fetchMockJson('user/logoutUserAdapter')];
  }
  return await logoutUserRepository(params);
}

/**
 * 根据用户名获取用户
 * @param params
 * @returns {Promise<[*,UserEntity]|[null,UserEntity]>}
 */
export async function getUserByNameAdapter(params) {
  if (isMockMode()) {
    return [null, await fetchMockJson('user/getUserByNameAdapter')];
  }
  return await getUserByNameRepository(params);
}

/**
 * 更新用户信息
 * @param params
 * @returns {Promise<[*,{}]|[null,{state}]>}
 */
export async function updateUserAdapter(params) {
  if (isMockMode()) {
    return [null, await fetchMockJson('user/updateUserAdapter')];
  }
  return await updateUserRepository(params);
}

/**
 * 删除用户
 * @param params
 * @returns {Promise<[*,{}]|[null,{state}]>}
 */
export async function deleteUserAdapter(params) {
  if (isMockMode()) {
    return [null, await fetchMockJson('user/deleteUserAdapter')];
  }
  return await deleteUserRepository(params);
}
