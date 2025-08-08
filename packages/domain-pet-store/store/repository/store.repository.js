import {
  getInventoryService,
  placeOrderService,
  getOrderByIdService,
  deleteOrderService
} from '../service/store.service';
import { OrderMapper, InventoryMapper } from './mapper/store.mapper';

/**
 * 获取库存信息
 * @param params
 * @returns {Promise<(*|InventoryEntity)[]>}
 */
export async function getInventoryRepository(params) {
  const mapper = new InventoryMapper();
  const [error, result] = await getInventoryService(params);

  if (error) {
    return [error, mapper.mapFrom({})];
  }

  return [null, mapper.mapFrom(result)];
}

/**
 * 下订单
 * @param params
 * @returns {Promise<(*|OrderEntity)[]>}
 */
export async function placeOrderRepository(params) {
  const mapper = new OrderMapper();
  const [error, result] = await placeOrderService(params);

  if (error) {
    return [error, mapper.mapFrom({})];
  }

  return [null, mapper.mapFrom(result)];
}

/**
 * 根据ID获取订单
 * @param params
 * @returns {Promise<(*|OrderEntity)[]>}
 */
export async function getOrderByIdRepository(params) {
  const mapper = new OrderMapper();
  const [error, result] = await getOrderByIdService(params);

  if (error) {
    return [error, mapper.mapFrom({})];
  }

  return [null, mapper.mapFrom(result)];
}

/**
 * 删除订单
 * @param params
 * @returns {Promise<[*,{}]|[null,{state: number}]>}
 */
export async function deleteOrderRepository(params) {
  const [error, result] = await deleteOrderService(params);

  if (error) {
    return [error, { state: -1 }];
  }

  return [null, { state: result ? 1 : -1 }];
}
