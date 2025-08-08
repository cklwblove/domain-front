import { petstore } from '@domain/pet-store-sdk/src/services/petstore';
import to from 'await-to-js';
import { formatResponse } from '../../sharedUtils';

const $httpApi = petstore.store;

/**
 * 获取库存信息
 * @param params
 * @returns {Promise<*[]>}
 */
export async function getInventoryService(params) {
  const [error, result] = await to($httpApi.getInventory(params));
  return formatResponse(error, result);
}

/**
 * 下订单
 * @param params
 * @returns {Promise<*[]>}
 */
export async function placeOrderService(params) {
  const [error, result] = await to($httpApi.placeOrder(params));
  return formatResponse(error, result);
}

/**
 * 根据ID获取订单
 * @param params
 * @returns {Promise<*[]>}
 */
export async function getOrderByIdService(params) {
  const [error, result] = await to($httpApi.getOrderById(params));
  return formatResponse(error, result);
}

/**
 * 删除订单
 * @param params
 * @returns {Promise<*[]>}
 */
export async function deleteOrderService(params) {
  const [error, result] = await to($httpApi.deleteOrder(params));
  return formatResponse(error, result);
}
