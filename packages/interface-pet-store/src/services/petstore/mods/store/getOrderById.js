/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA NEMO-ENGINE         ##
 * ##                                                ##
 * ## AUTHOR: cklwblove                              ##
 * ## SOURCE: Pet Store API                          ##
 * ---------------------------------------------------------------
 */

import { NemoCore } from '../../nemoCore';

/**
     * @description Find purchase order by ID
For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
     *
     * @tags store
     * @name getOrderById
     * @summary Find purchase order by ID
     * @request GET:/store/order/{orderId}
     */
export default function request({ orderId }, options = {}) {
  return NemoCore.fetch(`/store/order/${orderId}`.trim(), {
    method: 'GET',
    ...options
  });
}
