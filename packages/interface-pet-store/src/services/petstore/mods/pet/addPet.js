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
 * @description Add a new pet to the store
 *
 * @tags pet
 * @name addPet
 * @summary Add a new pet to the store
 * @request POST:/pet
 */
export default function request(body, options = {}) {
  return NemoCore.fetch(`/pet`.trim(), {
    method: 'POST',
    type: 'application/json',
    body,
    ...options
  });
}
