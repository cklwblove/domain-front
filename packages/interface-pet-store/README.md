# @domain/pet-store-sdk

基于 Swagger Petstore API 生成的接口 SDK，提供完整的宠物商店 API 调用能力。

## 📦 安装

```bash
npm install @domain/pet-store-sdk
# 或
yarn add @domain/pet-store-sdk
# 或
pnpm add @domain/pet-store-sdk
```

## 🚀 功能特性

- ✅ 基于 Swagger 自动生成的 API 接口
- ✅ 完整的 TypeScript 类型支持
- ✅ 请求/响应拦截器支持
- ✅ Mock 模式支持
- ✅ 错误处理机制
- ✅ 调试模式
- ✅ 自定义配置支持

## 📖 快速开始

### 基础使用

```javascript
import createPetStoreHttpRequest from '@domain/pet-store-sdk';

// 创建 HTTP 客户端
const httpClient = createPetStoreHttpRequest({
  debug: true, // 开启调试模式
  requestPrefix: 'https://petstore.swagger.io/v2' // API 前缀
});

// 使用生成的 API 方法
const petService = httpClient.services.petstore.pet;
const storeService = httpClient.services.petstore.store;
const userService = httpClient.services.petstore.user;

// 添加宠物
const [error, pet] = await petService.addPet({
  name: 'Fluffy',
  status: 'available',
  category: { id: 1, name: 'Dogs' }
});

// 查找宠物
const [error, pets] = await petService.findPetsByStatus({
  status: 'available'
});

// 下订单
const [error, order] = await storeService.placeOrder({
  petId: 123,
  quantity: 1,
  shipDate: new Date().toISOString()
});
```

### 高级配置

```javascript
import createPetStoreHttpRequest from '@domain/pet-store-sdk';

const httpClient = createPetStoreHttpRequest({
  // 基础配置
  debug: process.env.NODE_ENV === 'development',
  mock: process.env.NODE_ENV === 'development',
  mockURL: 'http://localhost:3000/mock',
  requestPrefix: 'https://petstore.swagger.io/v2',

  // 请求拦截器
  requestInterceptors: async (config) => {
    // 添加认证头
    config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
  },

  // 请求错误处理
  requestInterceptorsCatch: (error) => {
    console.error('请求错误:', error);
    return Promise.reject(error);
  },

  // 响应拦截器
  responseInterceptors: (response) => {
    // 处理响应数据
    if (response.data && response.data.code === 0) {
      return response.data.data;
    }
    return response;
  },

  // 响应错误处理
  responseInterceptorsCatch: (error) => {
    console.error('响应错误:', error);
    return Promise.reject(error);
  }
});
```

## 🔧 配置选项

### createPetStoreHttpRequest 配置

| 参数                        | 类型       | 默认值                           | 描述               |
| --------------------------- | ---------- | -------------------------------- | ------------------ |
| `debug`                     | `boolean`  | `false`                          | 是否开启调试模式   |
| `mock`                      | `boolean`  | `false`                          | 是否开启 Mock 模式 |
| `mockURL`                   | `string`   | -                                | Mock 服务器地址    |
| `requestPrefix`             | `string`   | `https://petstore.swagger.io/v2` | API 请求前缀       |
| `requestInterceptors`       | `Function` | -                                | 请求拦截器         |
| `requestInterceptorsCatch`  | `Function` | -                                | 请求拦截器错误处理 |
| `responseInterceptors`      | `Function` | -                                | 响应拦截器         |
| `responseInterceptorsCatch` | `Function` | -                                | 响应拦截器错误处理 |

## 📚 API 文档

### Pet API

宠物相关的 API 接口：

```javascript
const petService = httpClient.services.petstore.pet;

// 添加宠物
await petService.addPet(petData);

// 更新宠物
await petService.updatePet(petData);

// 根据状态查找宠物
await petService.findPetsByStatus({ status: 'available' });

// 根据标签查找宠物
await petService.findPetsByTags({ tags: ['friendly', 'playful'] });

// 根据ID获取宠物
await petService.getPetById({ petId: 123 });

// 更新宠物（表单）
await petService.updatePetWithForm({ petId: 123, name: 'New Name' });

// 删除宠物
await petService.deletePet({ petId: 123 });

// 上传文件
await petService.uploadFile({ petId: 123, file: fileData });
```

### Store API

商店相关的 API 接口：

```javascript
const storeService = httpClient.services.petstore.store;

// 获取库存
await storeService.getInventory();

// 下订单
await storeService.placeOrder(orderData);

// 根据ID获取订单
await storeService.getOrderById({ orderId: 123 });

// 删除订单
await storeService.deleteOrder({ orderId: 123 });
```

### User API

用户相关的 API 接口：

```javascript
const userService = httpClient.services.petstore.user;

// 创建用户
await userService.createUser(userData);

// 批量创建用户
await userService.createUsersWithArrayInput(usersArray);
await userService.createUsersWithListInput(usersList);

// 用户登录
await userService.loginUser({ username: 'user', password: 'pass' });

// 用户登出
await userService.logoutUser();

// 根据用户名获取用户
await userService.getUserByName({ username: 'john_doe' });

// 更新用户
await userService.updateUser({ username: 'john_doe', ...userData });

// 删除用户
await userService.deleteUser({ username: 'john_doe' });
```

## 🛠️ 开发

### 生成 API 代码

```bash
# 生成 Nemo 代码
npm run gen:nemo

# 扫描 API 变更
npm run scan:nemo

# 生成文档
npm run gen:docs
```

### 依赖

- `@domain/interface-utils`: 接口工具包
- `@winner-fed/nemo-engine`: Nemo 引擎
- `lodash.clonedeep`: 深拷贝工具
- `qs`: 查询字符串处理

## 🔧 Mock 模式

支持 Mock 模式进行开发测试：

```javascript
// 启用 Mock 模式
const httpClient = createPetStoreHttpRequest({
  mock: true,
  mockURL: 'http://localhost:8000/mock'
});

// 或者全局设置
window.____MOCK_MODE = true;
window.____MOCK_URL = 'http://localhost:8000/mock';
```

## 📄 许可证

Apache-2.0 License

## 🔗 相关链接

- [Pet Store API](https://petstore.swagger.io/)
- [Swagger](https://swagger.io/)
- [Nemo Engine](https://github.com/winner-fed/nemo-engine)
