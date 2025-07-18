import { fetchMockJson, isMockMode } from '../../sharedUtils';
import {
  getInventoryRepository,
  placeOrderRepository,
  getOrderByIdRepository,
  deleteOrderRepository
} from '../repository/store.repository';

/**
 * 获取库存信息
 * @param params
 * @returns {Promise<[*,InventoryEntity]|[null,InventoryEntity]>}
 */
export async function getInventoryAdapter(params) {
  if (isMockMode()) {
    return [null, await fetchMockJson('store/getInventoryAdapter')];
  }
  return await getInventoryRepository(params);
}

/**
 * 下订单
 * @param params
 * @returns {Promise<[*,OrderEntity]|[null,OrderEntity]>}
 */
export async function placeOrderAdapter(params) {
  if (isMockMode()) {
    return [null, await fetchMockJson('store/placeOrderAdapter')];
  }
  return await placeOrderRepository(params);
}

/**
 * 根据ID获取订单
 * @param params
 * @returns {Promise<[*,OrderEntity]|[null,OrderEntity]>}
 */
export async function getOrderByIdAdapter(params) {
  if (isMockMode()) {
    return [null, await fetchMockJson('store/getOrderByIdAdapter')];
  }
  return await getOrderByIdRepository(params);
}

/**
 * 删除订单
 * @param params
 * @returns {Promise<[*,{}]|[null,{state}]>}
 */
export async function deleteOrderAdapter(params) {
  if (isMockMode()) {
    return [null, await fetchMockJson('store/deleteOrderAdapter')];
  }
  return await deleteOrderRepository(params);
}
