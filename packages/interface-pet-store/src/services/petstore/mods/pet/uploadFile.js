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
 * @description uploads an image
 *
 * @tags pet
 * @name uploadFile
 * @summary uploads an image
 * @request POST:/pet/{petId}/uploadImage
 */
export default function request({ petId }, form, options = {}) {
  return NemoCore.fetch(`/pet/${petId}/uploadImage`.trim(), {
    method: 'POST',
    type: 'multipart/form-data',
    body: form,
    ...options
  });
}
