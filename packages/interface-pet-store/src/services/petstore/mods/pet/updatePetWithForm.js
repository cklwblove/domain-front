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
 * @description Updates a pet in the store with form data
 *
 * @tags pet
 * @name updatePetWithForm
 * @summary Updates a pet in the store with form data
 * @request POST:/pet/{petId}
 */
export default function request({ petId }, form, options = {}) {
  return NemoCore.fetch(`/pet/${petId}`.trim(), {
    method: 'POST',
    type: 'application/x-www-form-urlencoded',
    body: form,
    ...options
  });
}
