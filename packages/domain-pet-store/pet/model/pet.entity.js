/**
 * Pet Store 宠物相关实体类
 */

/**
 * 分类实体
 */
export class CategoryEntity {
  constructor(params = {}) {
    this.id = params.id || 0;
    this.name = params.name || '';
  }
}

/**
 * 标签实体
 */
export class TagEntity {
  constructor(params = {}) {
    this.id = params.id || 0;
    this.name = params.name || '';
  }
}

/**
 * 宠物实体
 */
export class PetEntity {
  constructor(params = {}) {
    this.id = params.id || 0;
    this.category = params.category || new CategoryEntity();
    this.name = params.name || '';
    this.photoUrls = params.photoUrls || [];
    this.tags = params.tags || [];
    this.status = params.status || 'available';
  }
}

/**
 * API 响应实体
 */
export class ApiResponseEntity {
  constructor(params = {}) {
    this.code = params.code || 0;
    this.type = params.type || '';
    this.message = params.message || '';
  }
}
