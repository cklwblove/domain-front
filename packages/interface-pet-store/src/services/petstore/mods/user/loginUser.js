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
 * @description Logs user into the system
 *
 * @tags user
 * @name loginUser
 * @summary Logs user into the system
 * @request GET:/user/login
 */
export default function request(query = { username: '', password: '' }, options = {}) {
  return NemoCore.fetch(`/user/login`.trim(), {
    method: 'GET',
    query,
    ...options
  });
}
