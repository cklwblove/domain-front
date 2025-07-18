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
     * @description Create user
This can only be done by the logged in user.
     *
     * @tags user
     * @name createUser
     * @summary Create user
     * @request POST:/user
     */
export default function request(body, options = {}) {
  return NemoCore.fetch(`/user`.trim(), {
    method: 'POST',
    type: 'application/json',
    body,
    ...options
  });
}
