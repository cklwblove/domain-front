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
     * @description Finds Pets by tags
Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     *
     * @tags pet
     * @name findPetsByTags
     * @summary Finds Pets by tags
     * @request GET:/pet/findByTags
     */
export default function request(query = { tags: [] }, options = {}) {
  return NemoCore.fetch(`/pet/findByTags`.trim(), {
    method: 'GET',
    query,
    ...options
  });
}
