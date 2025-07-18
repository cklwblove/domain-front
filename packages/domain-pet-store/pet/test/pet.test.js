/**
 * Pet Store 宠物相关测试
 */

import { describe, expect, it } from 'vitest';
import {
  addPetAdapter,
  deletePetAdapter,
  findPetsByStatusAdapter,
  getPetByIdAdapter
} from '../adapter/pet.adapter';

describe('Pet Store 宠物相关接口测试', () => {
  it('应该能够添加新的宠物', async () => {
    const petData = {
      name: 'doggie',
      photoUrls: ['http://example.com/photo.jpg'],
      status: 'available'
    };

    const [error, result] = await addPetAdapter(petData);
    expect(error).toBeNull();
    expect(result).toBeDefined();
  });

  it('应该能够根据状态查找宠物', async () => {
    const params = {
      status: ['available']
    };

    const [error, result] = await findPetsByStatusAdapter(params);
    expect(error).toBeNull();
    expect(Array.isArray(result)).toBe(true);
  });

  it('应该能够根据ID获取宠物', async () => {
    const params = {
      petId: 1
    };

    const [error, result] = await getPetByIdAdapter(params);
    expect(error).toBeNull();
    expect(result).toBeDefined();
  });

  it('应该能够删除宠物', async () => {
    const params = {
      petId: 1
    };

    const [error, result] = await deletePetAdapter(params);
    expect(error).toBeNull();
    expect(result).toBeDefined();
  });
});
