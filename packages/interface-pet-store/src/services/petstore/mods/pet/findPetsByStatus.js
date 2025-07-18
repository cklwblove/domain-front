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
     * @description Finds Pets by status
Multiple status values can be provided with comma separated strings
     *
     * @tags pet
     * @name findPetsByStatus
     * @summary Finds Pets by status
     * @request GET:/pet/findByStatus
     */
export default function request(query = { status: [] }, options = {}) {
  return NemoCore.fetch(`/pet/findByStatus`.trim(), {
    method: 'GET',
    query,
    ...options
  });
}
