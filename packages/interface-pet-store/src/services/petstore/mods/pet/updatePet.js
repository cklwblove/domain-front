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
 * @description Update an existing pet
 *
 * @tags pet
 * @name updatePet
 * @summary Update an existing pet
 * @request PUT:/pet
 */
export default function request(body, options = {}) {
  return NemoCore.fetch(`/pet`.trim(), {
    method: 'PUT',
    type: 'application/json',
    body,
    ...options
  });
}
