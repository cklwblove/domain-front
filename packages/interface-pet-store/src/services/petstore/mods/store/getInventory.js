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
     * @description Returns pet inventories by status
Returns a map of status codes to quantities
     *
     * @tags store
     * @name getInventory
     * @summary Returns pet inventories by status
     * @request GET:/store/inventory
     */
export default function request(options = {}) {
  return NemoCore.fetch(`/store/inventory`.trim(), {
    method: 'GET',
    ...options
  });
}
