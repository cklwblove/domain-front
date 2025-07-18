/**
 * Pet Store 用户相关实体类
 */

/**
 * 用户实体
 */
export class UserEntity {
  constructor(params = {}) {
    this.id = params.id || 0;
    this.username = params.username || '';
    this.firstName = params.firstName || '';
    this.lastName = params.lastName || '';
    this.email = params.email || '';
    this.password = params.password || '';
    this.phone = params.phone || '';
    this.userStatus = params.userStatus || 0;
  }
}
