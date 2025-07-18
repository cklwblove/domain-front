import { petstore } from '@domain/pet-store-sdk/src/services/petstore';
import to from 'await-to-js';
import { formatResponse } from '../../sharedUtils';

const $httpApi = petstore.pet;
/**
 * 添加新的宠物
 * @param params
 * @returns {Promise<*[]>}
 */
export async function addPetService(params) {
  const [error, result] = await to($httpApi.addPet(params));
  return formatResponse(error, result);
}

/**
 * 更新宠物信息
 * @param params
 * @returns {Promise<*[]>}
 */
export async function updatePetService(params) {
  const [error, result] = await to($httpApi.updatePet(params));
  return formatResponse(error, result);
}

/**
 * 根据状态查找宠物
 * @param params
 * @returns {Promise<*[]>}
 */
export async function findPetsByStatusService(params) {
  const [error, result] = await to($httpApi.findPetsByStatus(params));
  return formatResponse(error, result);
}

/**
 * 根据标签查找宠物
 * @param params
 * @returns {Promise<*[]>}
 */
export async function findPetsByTagsService(params) {
  const [error, result] = await to($httpApi.findPetsByTags(params));
  return formatResponse(error, result);
}

/**
 * 根据ID获取宠物
 * @param params
 * @returns {Promise<*[]>}
 */
export async function getPetByIdService(params) {
  const [error, result] = await to($httpApi.getPetById(params));
  return formatResponse(error, result);
}

/**
 * 用表单数据更新宠物
 * @param params
 * @returns {Promise<*[]>}
 */
export async function updatePetWithFormService(params) {
  const [error, result] = await to($httpApi.updatePetWithForm(params));
  return formatResponse(error, result);
}

/**
 * 删除宠物
 * @param params
 * @returns {Promise<*[]>}
 */
export async function deletePetService(params) {
  const [error, result] = await to($httpApi.deletePet(params));
  return formatResponse(error, result);
}

/**
 * 上传宠物图片
 * @param params
 * @returns {Promise<*[]>}
 */
export async function uploadFileService(params) {
  const [error, result] = await to($httpApi.uploadFile(params));
  return formatResponse(error, result);
}
