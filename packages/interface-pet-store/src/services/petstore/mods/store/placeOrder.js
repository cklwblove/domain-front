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
 * @description Place an order for a pet
 *
 * @tags store
 * @name placeOrder
 * @summary Place an order for a pet
 * @request POST:/store/order
 */
export default function request(body, options = {}) {
  return NemoCore.fetch(`/store/order`.trim(), {
    method: 'POST',
    type: 'application/json',
    body,
    ...options
  });
}
