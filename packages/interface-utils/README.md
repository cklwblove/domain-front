# @domain/interface-utils

接口工具包，提供常用的接口请求和数据处理工具函数。

## 📦 安装

```bash
npm install @domain/interface-utils
# 或
yarn add @domain/interface-utils
# 或
pnpm add @domain/interface-utils
```

## 🚀 功能特性

- ✅ 类型判断工具函数
- ✅ 安全的 JSON 解析
- ✅ HTTP 状态码检查
- ✅ 响应日志记录
- ✅ 全局对象获取
- ✅ 对象扁平化处理
- ✅ 完整的 TypeScript 支持
- ✅ Tree-shaking 友好

## 📖 快速开始

### 基础使用

```javascript
import {
  isString,
  isObject,
  safeJsonParse,
  checkStatus,
  responseLog
} from '@domain/interface-utils';

// 类型判断
console.log(isString('hello')); // true
console.log(isObject({})); // true

// 安全解析 JSON
const [error, data] = safeJsonParse('{"name": "test"}');
if (!error) {
  console.log(data.name); // 'test'
}

// 检查 HTTP 状态
const response = { status: 200, data: {} };
const result = checkStatus(response);
```

### 高级使用

```javascript
import { getGlobalThis, flattenObject, responseLog, isFunction } from '@domain/interface-utils';

// 获取全局对象
const globalThis = getGlobalThis();

// 对象扁平化
const obj = {
  user: {
    profile: {
      name: 'John',
      age: 30
    }
  }
};
const flattened = flattenObject(obj);
// 结果: { 'user.profile.name': 'John', 'user.profile.age': 30 }

// 响应日志记录
responseLog({
  config: { url: '/api/users' },
  data: { users: [] },
  status: 200
});

// 函数类型检查
const fn = () => {};
console.log(isFunction(fn)); // true
```

## 📚 API 文档

### 类型判断函数

#### `is(value: any): string`

获取值的类型字符串。

```javascript
import { is } from '@domain/interface-utils';

is('hello'); // 'String'
is(123); // 'Number'
is({}); // 'Object'
is([]); // 'Array'
is(null); // 'Null'
is(undefined); // 'Undefined'
```

#### `isString(value: any): boolean`

判断是否为字符串。

```javascript
import { isString } from '@domain/interface-utils';

isString('hello'); // true
isString(123); // false
isString(''); // true
```

#### `isNumber(value: any): boolean`

判断是否为数字。

```javascript
import { isNumber } from '@domain/interface-utils';

isNumber(123); // true
isNumber('123'); // false
isNumber(NaN); // false
isNumber(Infinity); // true
```

#### `isBoolean(value: any): boolean`

判断是否为布尔值。

```javascript
import { isBoolean } from '@domain/interface-utils';

isBoolean(true); // true
isBoolean(false); // true
isBoolean('true'); // false
```

#### `isObject(value: any): boolean`

判断是否为对象。

```javascript
import { isObject } from '@domain/interface-utils';

isObject({}); // true
isObject([]); // false
isObject(null); // false
isObject(new Date()); // true
```

#### `isArray(value: any): boolean`

判断是否为数组。

```javascript
import { isArray } from '@domain/interface-utils';

isArray([]); // true
isArray([1, 2, 3]); // true
isArray({}); // false
isArray('array'); // false
```

#### `isFunction(value: any): boolean`

判断是否为函数。

```javascript
import { isFunction } from '@domain/interface-utils';

isFunction(() => {}); // true
isFunction(function () {}); // true
isFunction('function'); // false
```

#### `isDate(value: any): boolean`

判断是否为日期对象。

```javascript
import { isDate } from '@domain/interface-utils';

isDate(new Date()); // true
isDate('2023-01-01'); // false
isDate(Date.now()); // false
```

#### `isPromise(value: any): boolean`

判断是否为 Promise。

```javascript
import { isPromise } from '@domain/interface-utils';

isPromise(Promise.resolve()); // true
isPromise(new Promise(() => {})); // true
isPromise({ then: () => {} }); // false
```

#### `isRegExp(value: any): boolean`

判断是否为正则表达式。

```javascript
import { isRegExp } from '@domain/interface-utils';

isRegExp(/test/); // true
isRegExp(new RegExp('test')); // true
isRegExp('test'); // false
```

#### `isNull(value: any): boolean`

判断是否为 null。

```javascript
import { isNull } from '@domain/interface-utils';

isNull(null); // true
isNull(undefined); // false
isNull(''); // false
```

#### `isUnDef(value: any): boolean`

判断是否为 undefined。

```javascript
import { isUnDef } from '@domain/interface-utils';

isUnDef(undefined); // true
isUnDef(null); // false
isUnDef(''); // false
```

#### `isDef(value: any): boolean`

判断是否已定义（非 null 且非 undefined）。

```javascript
import { isDef } from '@domain/interface-utils';

isDef('hello'); // true
isDef(0); // true
isDef(null); // false
isDef(undefined); // false
```

#### `isElement(value: any): boolean`

判断是否为 DOM 元素。

```javascript
import { isElement } from '@domain/interface-utils';

isElement(document.createElement('div')); // true
isElement({ tagName: 'div' }); // false
```

#### `isClient(): boolean`

判断是否在客户端环境。

```javascript
import { isClient } from '@domain/interface-utils';

isClient(); // true (在浏览器中)
```

#### `isServer(): boolean`

判断是否在服务端环境。

```javascript
import { isServer } from '@domain/interface-utils';

isServer(); // true (在 Node.js 中)
```

#### `isWindow(value: any): boolean`

判断是否为 window 对象。

```javascript
import { isWindow } from '@domain/interface-utils';

isWindow(window); // true (在浏览器中)
isWindow({}); // false
```

#### `isURLSearchParams(value: any): boolean`

判断是否为 URLSearchParams 对象。

```javascript
import { isURLSearchParams } from '@domain/interface-utils';

isURLSearchParams(new URLSearchParams()); // true
isURLSearchParams('?a=1'); // false
```

### 数据处理函数

#### `safeJsonParse(json: string): [Error | null, any]`

安全地解析 JSON 字符串，返回错误和数据的元组。

```javascript
import { safeJsonParse } from '@domain/interface-utils';

// 成功解析
const [error1, data1] = safeJsonParse('{"name": "test"}');
console.log(error1); // null
console.log(data1); // { name: 'test' }

// 解析失败
const [error2, data2] = safeJsonParse('invalid json');
console.log(error2); // SyntaxError
console.log(data2); // undefined
```

#### `flattenObject(obj: object, prefix?: string): object`

将嵌套对象扁平化。

```javascript
import { flattenObject } from '@domain/interface-utils';

const obj = {
  user: {
    profile: {
      name: 'John',
      age: 30
    },
    settings: {
      theme: 'dark'
    }
  }
};

const flattened = flattenObject(obj);
// 结果:
// {
//   'user.profile.name': 'John',
//   'user.profile.age': 30,
//   'user.settings.theme': 'dark'
// }
```

### HTTP 相关函数

#### `checkStatus(response: any): any`

检查 HTTP 响应状态码。

```javascript
import { checkStatus } from '@domain/interface-utils';

const response = { status: 200, data: { success: true } };
const result = checkStatus(response);
// 如果状态码正常，返回 response
// 如果状态码异常，抛出错误

// 错误响应示例
const errorResponse = { status: 404, data: { message: 'Not Found' } };
try {
  checkStatus(errorResponse);
} catch (error) {
  console.log(error); // 包含错误信息的对象
}
```

#### `responseLog(response: any): void`

记录响应日志。

```javascript
import { responseLog } from '@domain/interface-utils';

responseLog({
  config: {
    url: '/api/users',
    method: 'GET',
    headers: {}
  },
  data: { users: [] },
  status: 200,
  statusText: 'OK'
});
// 在控制台输出格式化的响应日志
```

### 环境相关函数

#### `getGlobalThis(): any`

获取全局对象，兼容不同环境。

```javascript
import { getGlobalThis } from '@domain/interface-utils';

const globalThis = getGlobalThis();
// 在浏览器中返回 window
// 在 Node.js 中返回 global
// 在 Web Workers 中返回 self
```

### 常量

#### `codeMessage: Record<number, string>`

HTTP 状态码对应的消息映射。

```javascript
import { codeMessage } from '@domain/interface-utils';

console.log(codeMessage[200]); // '服务器成功返回请求的数据。'
console.log(codeMessage[404]); // '服务器找不到请求的资源。'
console.log(codeMessage[500]); // '服务器发生错误，请检查服务器。'
```

#### `TIMEOUT: number`

默认超时时间（毫秒）。

```javascript
import { TIMEOUT } from '@domain/interface-utils';

console.log(TIMEOUT); // 10000 (10秒)
```

## 🛠️ 开发

### 构建

```bash
# 构建项目
npm run build

# 发布
npm run release
```

### 依赖

- `qs`: 查询字符串处理

### 开发依赖

- `@types/node`: Node.js 类型定义
- `tsup`: TypeScript 构建工具

## 📦 打包信息

- **主入口**: `dist/index.js`
- **类型定义**: `dist/index.d.ts`
- **CommonJS**: `dist/index.cjs`
- **ES Module**: `dist/index.js`

支持 Tree-shaking，可以按需导入：

```javascript
// 只导入需要的函数
import { isString, safeJsonParse } from '@domain/interface-utils';
```

## 📄 许可证

Apache-2.0 License

## 🔗 相关链接

- [qs](https://github.com/ljharb/qs) - 查询字符串处理库
- [tsup](https://github.com/egoist/tsup) - TypeScript 构建工具
