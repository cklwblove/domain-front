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
 * @description Creates list of users with given input array
 *
 * @tags user
 * @name createUsersWithArrayInput
 * @summary Creates list of users with given input array
 * @request POST:/user/createWithArray
 */
export default function request(body, options = {}) {
  return NemoCore.fetch(`/user/createWithArray`.trim(), {
    method: 'POST',
    type: 'application/json',
    body,
    ...options
  });
}
