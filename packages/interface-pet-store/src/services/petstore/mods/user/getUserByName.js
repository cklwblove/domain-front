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
 * @description Get user by user name
 *
 * @tags user
 * @name getUserByName
 * @summary Get user by user name
 * @request GET:/user/{username}
 */
export default function request({ username }, options = {}) {
  return NemoCore.fetch(`/user/${username}`.trim(), {
    method: 'GET',
    ...options
  });
}
