import { formatDateString } from '../../../sharedUtils';
import { PetEntity, CategoryEntity, TagEntity, ApiResponseEntity } from '../../model/pet.entity';

/**
 * 分类字段映射
 */
export class CategoryMapper {
  mapFrom(params) {
    return new CategoryEntity({
      id: params.id,
      name: params.name
    });
  }
}

/**
 * 标签字段映射
 */
export class TagMapper {
  mapFrom(params) {
    return new TagEntity({
      id: params.id,
      name: params.name
    });
  }
}

/**
 * 宠物字段映射
 */
export class PetMapper {
  mapFrom(params) {
    const categoryMapper = new CategoryMapper();
    const tagMapper = new TagMapper();

    return new PetEntity({
      id: params.id,
      category: params.category ? categoryMapper.mapFrom(params.category) : new CategoryEntity(),
      name: params.name,
      photoUrls: params.photoUrls || [],
      tags: params.tags ? params.tags.map((tag) => tagMapper.mapFrom(tag)) : [],
      status: params.status
    });
  }
}

/**
 * API 响应字段映射
 */
export class ApiResponseMapper {
  mapFrom(params) {
    return new ApiResponseEntity({
      code: params.code,
      type: params.type,
      message: params.message
    });
  }
}
