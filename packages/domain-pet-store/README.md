# @domain/domain-pet-store

宠物商店领域设计包，基于领域驱动设计（DDD）模式实现的宠物商店业务逻辑。

## 📦 安装

```bash
npm install @domain/domain-pet-store
# 或
yarn add @domain/domain-pet-store
# 或
pnpm add @domain/domain-pet-store
```

## 🏗️ 架构设计

本包采用领域驱动设计（DDD）模式，包含以下核心组件：

### 目录结构

```
domain-pet-store/
├── pet/                    # 宠物领域
│   ├── adapter/           # 适配器层
│   ├── model/             # 实体模型
│   ├── repository/        # 仓储层
│   └── service/           # 服务层
├── store/                 # 商店领域
│   ├── adapter/           # 适配器层
│   ├── model/             # 实体模型
│   ├── repository/        # 仓储层
│   └── service/           # 服务层
├── user/                  # 用户领域
│   ├── adapter/           # 适配器层
│   ├── model/             # 实体模型
│   ├── repository/        # 仓储层
│   └── service/           # 服务层
├── sharedUtils/           # 共享工具
└── __mock__/              # Mock 数据
```

## 🚀 功能特性

### 宠物管理 (Pet Domain)

- ✅ 添加宠物
- ✅ 更新宠物信息
- ✅ 根据状态查找宠物
- ✅ 根据标签查找宠物
- ✅ 根据 ID 获取宠物
- ✅ 删除宠物
- ✅ 上传宠物图片

### 商店管理 (Store Domain)

- ✅ 获取库存信息
- ✅ 下订单
- ✅ 订单管理

### 用户管理 (User Domain)

- ✅ 创建用户
- ✅ 用户登录
- ✅ 根据用户名获取用户信息

## 📖 使用示例

### 宠物管理

```javascript
import {
  addPetAdapter,
  getPetByIdAdapter,
  findPetsByStatusAdapter
} from '@domain/domain-pet-store';

// 添加宠物
const [error, pet] = await addPetAdapter({
  name: 'Fluffy',
  status: 'available',
  category: { id: 1, name: 'Dogs' }
});

// 根据ID获取宠物
const [error, pet] = await getPetByIdAdapter({ petId: 123 });

// 根据状态查找宠物
const [error, pets] = await findPetsByStatusAdapter({
  status: 'available'
});
```

### 商店管理

```javascript
import { getInventoryAdapter, placeOrderAdapter } from '@domain/domain-pet-store';

// 获取库存信息
const [error, inventory] = await getInventoryAdapter();

// 下订单
const [error, order] = await placeOrderAdapter({
  petId: 123,
  quantity: 1,
  shipDate: new Date().toISOString()
});
```

### 用户管理

```javascript
import { createUserAdapter, loginUserAdapter } from '@domain/domain-pet-store';

// 创建用户
const [error, user] = await createUserAdapter({
  username: 'john_doe',
  email: 'john@example.com',
  password: 'password123'
});

// 用户登录
const [error, loginResult] = await loginUserAdapter({
  username: 'john_doe',
  password: 'password123'
});
```

## 🔧 配置

### Mock 模式

支持 Mock 模式进行开发测试：

```javascript
// 启用 Mock 模式
window.____MOCK_MODE = true;
```

## 📚 API 文档

### Pet Adapter

| 方法                      | 描述             | 参数                              |
| ------------------------- | ---------------- | --------------------------------- |
| `addPetAdapter`           | 添加宠物         | `{ name, status, category, ... }` |
| `updatePetAdapter`        | 更新宠物信息     | `{ id, name, status, ... }`       |
| `getPetByIdAdapter`       | 根据 ID 获取宠物 | `{ petId }`                       |
| `findPetsByStatusAdapter` | 根据状态查找宠物 | `{ status }`                      |
| `findPetsByTagsAdapter`   | 根据标签查找宠物 | `{ tags }`                        |
| `deletePetAdapter`        | 删除宠物         | `{ petId }`                       |
| `uploadFileAdapter`       | 上传宠物图片     | `{ petId, file }`                 |

### Store Adapter

| 方法                  | 描述         | 参数                            |
| --------------------- | ------------ | ------------------------------- |
| `getInventoryAdapter` | 获取库存信息 | `{}`                            |
| `placeOrderAdapter`   | 下订单       | `{ petId, quantity, shipDate }` |

### User Adapter

| 方法                   | 描述               | 参数                                 |
| ---------------------- | ------------------ | ------------------------------------ |
| `createUserAdapter`    | 创建用户           | `{ username, email, password, ... }` |
| `loginUserAdapter`     | 用户登录           | `{ username, password }`             |
| `getUserByNameAdapter` | 根据用户名获取用户 | `{ username }`                       |

## 🛠️ 开发

### 依赖

- `@domain/interface-utils`: 接口工具包
- `lodash-es`: 工具函数库
- `await-to-js`: 异步错误处理

## 📄 许可证

Apache-2.0 License

## 🔗 相关链接

- [Pet Store API](https://petstore.swagger.io/)
- [领域驱动设计](https://martinfowler.com/bliki/DomainDrivenDesign.html)
