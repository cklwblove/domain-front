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
     * @description Delete user
This can only be done by the logged in user.
     *
     * @tags user
     * @name deleteUser
     * @summary Delete user
     * @request DELETE:/user/{username}
     */
export default function request({ username }, options = {}) {
  return NemoCore.fetch(`/user/${username}`.trim(), {
    method: 'DELETE',
    ...options
  });
}
