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
 * @description Deletes a pet
 *
 * @tags pet
 * @name deletePet
 * @summary Deletes a pet
 * @request DELETE:/pet/{petId}
 */
export default function request({ petId }, options = {}) {
  return NemoCore.fetch(`/pet/${petId}`.trim(), {
    method: 'DELETE',
    ...options
  });
}
