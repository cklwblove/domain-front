/**
 * Pet Store 商店相关测试
 */

import { describe, expect, it } from 'vitest';
import {
  deleteOrderAdapter,
  getInventoryAdapter,
  getOrderByIdAdapter,
  placeOrderAdapter
} from '../adapter/store.adapter';

describe('Pet Store 商店相关接口测试', () => {
  it('应该能够获取库存信息', async () => {
    const [error, result] = await getInventoryAdapter({});
    expect(error).toBeNull();
    expect(result).toBeDefined();
  });

  it('应该能够下订单', async () => {
    const orderData = {
      petId: 1,
      quantity: 1,
      status: 'placed'
    };

    const [error, result] = await placeOrderAdapter(orderData);
    expect(error).toBeNull();
    expect(result).toBeDefined();
  });

  it('应该能够根据ID获取订单', async () => {
    const params = {
      orderId: 1
    };

    const [error, result] = await getOrderByIdAdapter(params);
    expect(error).toBeNull();
    expect(result).toBeDefined();
  });

  it('应该能够删除订单', async () => {
    const params = {
      orderId: 1
    };

    const [error, result] = await deleteOrderAdapter(params);
    expect(error).toBeNull();
    expect(result).toBeDefined();
  });
});
