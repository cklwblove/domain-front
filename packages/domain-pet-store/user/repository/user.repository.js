import {
  createUserService,
  createUsersWithArrayInputService,
  createUsersWithListInputService,
  deleteUserService,
  getUserByNameService,
  loginUserService,
  logoutUserService,
  updateUserService
} from '../service/user.service';
import { UserMapper } from './mapper/user.mapper';

/**
 * 创建用户
 * @param params
 * @returns {Promise<[*,{}]|[null,{state: number}]>}
 */
export async function createUserRepository(params) {
  const [error, result] = await createUserService(params);

  if (error) {
    return [error, { state: -1 }];
  }

  return [null, { state: result ? 1 : -1 }];
}

/**
 * 批量创建用户（数组方式）
 * @param params
 * @returns {Promise<[*,{}]|[null,{state: number}]>}
 */
export async function createUsersWithArrayInputRepository(params) {
  const [error, result] = await createUsersWithArrayInputService(params);

  if (error) {
    return [error, { state: -1 }];
  }

  return [null, { state: result ? 1 : -1 }];
}

/**
 * 批量创建用户（列表方式）
 * @param params
 * @returns {Promise<[*,{}]|[null,{state: number}]>}
 */
export async function createUsersWithListInputRepository(params) {
  const [error, result] = await createUsersWithListInputService(params);

  if (error) {
    return [error, { state: -1 }];
  }

  return [null, { state: result ? 1 : -1 }];
}

/**
 * 用户登录
 * @param params
 * @returns {Promise<[*,{}]|[null,{token: string, success: boolean}]>}
 */
export async function loginUserRepository(params) {
  const [error, result] = await loginUserService(params);

  if (error) {
    return [error, { success: false, token: '' }];
  }

  return [null, { success: true, token: result || '' }];
}

/**
 * 用户登出
 * @param params
 * @returns {Promise<[*,{}]|[null,{state: number}]>}
 */
export async function logoutUserRepository(params) {
  const [error, result] = await logoutUserService(params);

  if (error) {
    return [error, { state: -1 }];
  }

  return [null, { state: result ? 1 : -1 }];
}

/**
 * 根据用户名获取用户
 * @param params
 * @returns {Promise<(*|UserEntity)[]>}
 */
export async function getUserByNameRepository(params) {
  const mapper = new UserMapper();
  const [error, result] = await getUserByNameService(params);

  if (error) {
    return [error, mapper.mapFrom({})];
  }

  return [null, mapper.mapFrom(result)];
}

/**
 * 更新用户信息
 * @param params
 * @returns {Promise<[*,{}]|[null,{state: number}]>}
 */
export async function updateUserRepository(params) {
  const [error, result] = await updateUserService(params);

  if (error) {
    return [error, { state: -1 }];
  }

  return [null, { state: result ? 1 : -1 }];
}

/**
 * 删除用户
 * @param params
 * @returns {Promise<[*,{}]|[null,{state: number}]>}
 */
export async function deleteUserRepository(params) {
  const [error, result] = await deleteUserService(params);

  if (error) {
    return [error, { state: -1 }];
  }

  return [null, { state: result ? 1 : -1 }];
}
