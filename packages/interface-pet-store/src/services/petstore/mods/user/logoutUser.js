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
 * @description Logs out current logged in user session
 *
 * @tags user
 * @name logoutUser
 * @summary Logs out current logged in user session
 * @request GET:/user/logout
 */
export default function request(options = {}) {
  return NemoCore.fetch(`/user/logout`.trim(), { method: 'GET', ...options });
}
