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
     * @description Find pet by ID
Returns a single pet
     *
     * @tags pet
     * @name getPetById
     * @summary Find pet by ID
     * @request GET:/pet/{petId}
     */
export default function request({ petId }, options = {}) {
  return NemoCore.fetch(`/pet/${petId}`.trim(), { method: 'GET', ...options });
}
