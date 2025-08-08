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
     * @description Updated user
This can only be done by the logged in user.
     *
     * @tags user
     * @name updateUser
     * @summary Updated user
     * @request PUT:/user/{username}
     */
export default function request({ username }, body, options = {}) {
  return NemoCore.fetch(`/user/${username}`.trim(), {
    method: 'PUT',
    type: 'application/json',
    body,
    ...options
  });
}
