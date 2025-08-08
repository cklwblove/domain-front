/**
 * Pet Store 商店相关实体类
 */

/**
 * 订单实体
 */
export class OrderEntity {
  constructor(params = {}) {
    this.id = params.id || 0;
    this.petId = params.petId || 0;
    this.quantity = params.quantity || 1;
    this.shipDate = params.shipDate || '';
    this.status = params.status || 'placed';
    this.complete = params.complete || false;
  }
}

/**
 * 库存实体
 */
export class InventoryEntity {
  constructor(params = {}) {
    // 库存是一个动态对象，包含状态到数量的映射
    Object.assign(this, params);
  }
}
