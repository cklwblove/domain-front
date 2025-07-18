import { map } from 'lodash-es';
import {
  addPetService,
  deletePetService,
  findPetsByStatusService,
  findPetsByTagsService,
  getPetByIdService,
  updatePetService,
  updatePetWithFormService,
  uploadFileService
} from '../service/pet.service';
import { ApiResponseMapper, PetMapper } from './mapper/pet.mapper';

/**
 * 添加新的宠物
 * @param params
 * @returns {Promise<(*|PetEntity)[]>}
 */
export async function addPetRepository(params) {
  const mapper = new PetMapper();
  const [error, result] = await addPetService(params);

  if (error) {
    return [error, mapper.mapFrom({})];
  }

  return [null, mapper.mapFrom(result)];
}

/**
 * 更新宠物信息
 * @param params
 * @returns {Promise<(*|PetEntity)[]>}
 */
export async function updatePetRepository(params) {
  const mapper = new PetMapper();
  const [error, result] = await updatePetService(params);

  if (error) {
    return [error, mapper.mapFrom({})];
  }

  return [null, mapper.mapFrom(result)];
}

/**
 * 根据状态查找宠物
 * @param params
 * @returns {Promise<(*|*[])[]>}
 */
export async function findPetsByStatusRepository(params) {
  const mapper = new PetMapper();
  const [error, result] = await findPetsByStatusService(params);

  if (error) {
    return [error, []];
  }

  return [null, map(result, mapper.mapFrom)];
}

/**
 * 根据标签查找宠物
 * @param params
 * @returns {Promise<(*|*[])[]>}
 */
export async function findPetsByTagsRepository(params) {
  const mapper = new PetMapper();
  const [error, result] = await findPetsByTagsService(params);

  if (error) {
    return [error, []];
  }

  return [null, map(result, mapper.mapFrom)];
}

/**
 * 根据ID获取宠物
 * @param params
 * @returns {Promise<(*|PetEntity)[]>}
 */
export async function getPetByIdRepository(params) {
  const mapper = new PetMapper();
  const [error, result] = await getPetByIdService(params);

  if (error) {
    return [error, mapper.mapFrom({})];
  }

  return [null, mapper.mapFrom(result)];
}

/**
 * 用表单数据更新宠物
 * @param params
 * @returns {Promise<[*,{}]|[null,{state: number}]>}
 */
export async function updatePetWithFormRepository(params) {
  const [error, result] = await updatePetWithFormService(params);

  if (error) {
    return [error, { state: -1 }];
  }

  return [null, { state: result ? 1 : -1 }];
}

/**
 * 删除宠物
 * @param params
 * @returns {Promise<[*,{}]|[null,{state: number}]>}
 */
export async function deletePetRepository(params) {
  const [error, result] = await deletePetService(params);

  if (error) {
    return [error, { state: -1 }];
  }

  return [null, { state: result ? 1 : -1 }];
}

/**
 * 上传宠物图片
 * @param params
 * @returns {Promise<(*|ApiResponseEntity)[]>}
 */
export async function uploadFileRepository(params) {
  const mapper = new ApiResponseMapper();
  const [error, result] = await uploadFileService(params);

  if (error) {
    return [error, mapper.mapFrom({})];
  }

  return [null, mapper.mapFrom(result)];
}
