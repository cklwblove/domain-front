import { UserEntity } from '../../model/user.entity';

/**
 * 用户字段映射
 */
export class UserMapper {
  mapFrom(params) {
    return new UserEntity({
      id: params.id,
      username: params.username,
      firstName: params.firstName,
      lastName: params.lastName,
      email: params.email,
      password: params.password,
      phone: params.phone,
      userStatus: params.userStatus
    });
  }
}
