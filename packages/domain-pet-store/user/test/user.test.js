/**
 * Pet Store 用户相关测试
 */

import { describe, expect, it } from 'vitest';
import {
  createUserAdapter,
  deleteUserAdapter,
  getUserByNameAdapter,
  loginUserAdapter,
  updateUserAdapter
} from '../adapter/user.adapter';

describe('Pet Store 用户相关接口测试', () => {
  it('应该能够创建用户', async () => {
    const userData = {
      username: 'testuser',
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      password: 'password123'
    };

    const [error, result] = await createUserAdapter(userData);
    expect(error).toBeNull();
    expect(result).toBeDefined();
  });

  it('应该能够用户登录', async () => {
    const loginData = {
      username: 'testuser',
      password: 'password123'
    };

    const [error, result] = await loginUserAdapter(loginData);
    expect(error).toBeNull();
    expect(result).toBeDefined();
  });

  it('应该能够根据用户名获取用户', async () => {
    const params = {
      username: 'testuser'
    };

    const [error, result] = await getUserByNameAdapter(params);
    expect(error).toBeNull();
    expect(result).toBeDefined();
  });

  it('应该能够更新用户信息', async () => {
    const userData = {
      username: 'testuser',
      firstName: 'Updated',
      lastName: 'User'
    };

    const [error, result] = await updateUserAdapter(userData);
    expect(error).toBeNull();
    expect(result).toBeDefined();
  });

  it('应该能够删除用户', async () => {
    const params = {
      username: 'testuser'
    };

    const [error, result] = await deleteUserAdapter(params);
    expect(error).toBeNull();
    expect(result).toBeDefined();
  });
});
