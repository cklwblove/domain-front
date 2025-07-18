import { fetchMockJson, isMockMode } from '../../sharedUtils';
import {
  addPetRepository,
  deletePetRepository,
  findPetsByStatusRepository,
  findPetsByTagsRepository,
  getPetByIdRepository,
  updatePetRepository,
  updatePetWithFormRepository,
  uploadFileRepository
} from '../repository/pet.repository';

/**
 * 添加新的宠物
 * @param params
 * @returns {Promise<[*,PetEntity]|[null,PetEntity]>}
 */
export async function addPetAdapter(params) {
  if (isMockMode()) {
    return [null, await fetchMockJson('pet/addPetAdapter')];
  }
  return await addPetRepository(params);
}

/**
 * 更新宠物信息
 * @param params
 * @returns {Promise<[*,PetEntity]|[null,PetEntity]>}
 */
export async function updatePetAdapter(params) {
  if (isMockMode()) {
    return [null, await fetchMockJson('pet/updatePetAdapter')];
  }
  return await updatePetRepository(params);
}

/**
 * 根据状态查找宠物
 * @param params
 * @returns {Promise<(*|*[])[]|*[]>}
 */
export async function findPetsByStatusAdapter(params) {
  if (isMockMode()) {
    return [null, await fetchMockJson('pet/findPetsByStatusAdapter')];
  }
  return await findPetsByStatusRepository(params);
}

/**
 * 根据标签查找宠物
 * @param params
 * @returns {Promise<(*|*[])[]|*[]>}
 */
export async function findPetsByTagsAdapter(params) {
  if (isMockMode()) {
    return [null, await fetchMockJson('pet/findPetsByTagsAdapter')];
  }
  return await findPetsByTagsRepository(params);
}

/**
 * 根据ID获取宠物
 * @param params
 * @returns {Promise<[*,PetEntity]|[null,PetEntity]>}
 */
export async function getPetByIdAdapter(params) {
  if (isMockMode()) {
    return [null, await fetchMockJson('pet/getPetByIdAdapter')];
  }
  return await getPetByIdRepository(params);
}

/**
 * 用表单数据更新宠物
 * @param params
 * @returns {Promise<[*,{}]|[null,{state}]>}
 */
export async function updatePetWithFormAdapter(params) {
  if (isMockMode()) {
    return [null, await fetchMockJson('pet/updatePetWithFormAdapter')];
  }
  return await updatePetWithFormRepository(params);
}

/**
 * 删除宠物
 * @param params
 * @returns {Promise<[*,{}]|[null,{state}]>}
 */
export async function deletePetAdapter(params) {
  if (isMockMode()) {
    return [null, await fetchMockJson('pet/deletePetAdapter')];
  }
  return await deletePetRepository(params);
}

/**
 * 上传宠物图片
 * @param params
 * @return {Promise<*[]>}
 */
export async function uploadFileAdapter(params) {
  if (isMockMode()) {
    return [null, await fetchMockJson('pet/uploadFileAdapter')];
  }
  return await uploadFileRepository(params);
}
