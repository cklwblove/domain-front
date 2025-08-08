/**
 * Pet Store 共享常量
 */

export const PET_STATUS = {
  AVAILABLE: 'available',
  PENDING: 'pending',
  SOLD: 'sold'
};

export const ORDER_STATUS = {
  PLACED: 'placed',
  APPROVED: 'approved',
  DELIVERED: 'delivered'
};

export const USER_STATUS = {
  ACTIVE: 1,
  INACTIVE: 0
};

export const API_ERROR_CODES = {
  INVALID_INPUT: 405,
  INVALID_ID: 400,
  NOT_FOUND: 404,
  VALIDATION_EXCEPTION: 405
};
