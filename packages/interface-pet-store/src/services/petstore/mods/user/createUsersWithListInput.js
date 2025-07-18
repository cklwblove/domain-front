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
 * @name createUsersWithListInput
 * @summary Creates list of users with given input array
 * @request POST:/user/createWithList
 */
export default function request(body, options = {}) {
  return NemoCore.fetch(`/user/createWithList`.trim(), {
    method: 'POST',
    type: 'application/json',
    body,
    ...options
  });
}
