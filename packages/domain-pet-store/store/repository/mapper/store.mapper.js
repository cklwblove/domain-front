import { formatDateString } from '../../../sharedUtils';
import { InventoryEntity, OrderEntity } from '../../model/store.entity';

/**
 * 订单字段映射
 */
export class OrderMapper {
  mapFrom(params) {
    return new OrderEntity({
      id: params.id,
      petId: params.petId,
      quantity: params.quantity,
      shipDate: formatDateString(params.shipDate),
      status: params.status,
      complete: params.complete
    });
  }
}

/**
 * 库存字段映射
 */
export class InventoryMapper {
  mapFrom(params) {
    return new InventoryEntity(params);
  }
}
