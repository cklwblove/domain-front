# WinJS PC Web 模板

一个基于 WinJS 框架的现代化 PC 端 Web 应用模板，提供完整的开发工具链和最佳实践配置。

## 📋 项目简介

本模板专为 PC 端 Web 应用开发而设计，集成了现代前端开发的最佳实践，包括代码规范、构建优化、开发体验等方面的完整解决方案。

## 🚀 技术栈

### 核心框架

- **Vue 3.2.x** - 渐进式 JavaScript 框架
- **Vue Router 4.x** - 官方路由管理器
- **WinJS** - 企业级前端开发框架

### 开发工具

- **TypeScript 5.x** - 类型安全的 JavaScript 超集
- **Vite** - 下一代前端构建工具
- **Less** - CSS 预处理器

### 代码质量

- **ESLint** - JavaScript/TypeScript 代码检查
- **Prettier** - 代码格式化工具
- **Stylelint** - CSS/Less 样式检查
- **F2ELint** - 前端代码规范工具
- **Husky** - Git hooks 管理
- **Lint-staged** - 暂存文件检查

### 工程化

- **Cross-env** - 跨平台环境变量设置
- **Commitlint** - Git 提交信息规范检查

## ✨ 功能特性

- 🎯 **开箱即用** - 预配置完整的开发环境
- 🔧 **工程化完备** - 集成代码规范、构建优化、部署流程
- 📱 **响应式设计** - 适配不同屏幕尺寸
- 🌐 **网络请求** - 基于 axios 的统一请求封装
- 🎨 **样式方案** - Less + CSS Modules 支持
- 📦 **模块联邦** - 支持微前端架构
- 🔍 **开发调试** - 完善的 Source Map 和热更新
- 🚀 **构建优化** - 代码分割、压缩、缓存策略

## 🛠️ 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0 或 yarn >= 1.22.0

### 安装依赖

```bash
# 使用 npm
npm install

# 使用 yarn
yarn install
```

### 开发调试

```bash
# 启动开发服务器
npm run dev

# 或者
npm start
```

访问 http://localhost:8000 查看应用

### 构建部署

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 📁 项目结构

```
├── src/                    # 源代码目录
│   ├── assets/            # 静态资源
│   ├── icons/             # SVG 图标
│   ├── layouts/           # 布局组件
│   ├── pages/             # 页面组件
│   │   ├── hello/         # 示例页面
│   │   ├── index.vue      # 首页
│   │   └── docs.vue       # 文档页面
│   ├── services/          # 服务层
│   ├── app.js             # 应用配置
│   ├── constant.js        # 常量定义
│   └── global.less        # 全局样式
├── .winrc.ts              # WinJS 配置文件
├── package.json           # 项目依赖配置
├── tsconfig.json          # TypeScript 配置
├── .eslintrc.js           # ESLint 配置
├── .prettierrc.js         # Prettier 配置
├── .stylelintrc.js        # Stylelint 配置
└── README.md              # 项目说明文档
```

## 🔧 开发指南

### 代码规范

项目集成了完整的代码规范工具链：

```bash
# 代码检查
npm run lint

# 代码格式化
npm run format

# F2ELint 扫描
npm run f2elint-scan

# F2ELint 修复
npm run f2elint-fix
```

### 环境配置

在 `.winrc.ts` 中配置不同环境的 API 地址：

```typescript
appConfig: {
  development: {
    API_HOME: 'https://api.github.com/',
    API_UPLOAD: 'https://api.github.com/upload'
  },
  test: {
    API_HOME: 'https://test.github.com/',
    API_UPLOAD: 'https://test.github.com/upload'
  },
  production: {
    API_HOME: 'https://production.github.com/',
    API_UPLOAD: 'https://production.github.com/upload'
  }
}
```

### 网络请求

使用统一的请求封装，支持拦截器配置：

```javascript
// 在 app.js 中配置请求拦截器
export const request = {
  timeout: TIMEOUT,
  requestInterceptors: [
    [
      (config) => {
        // 请求前处理
        return httpRequest.success(config);
      },
      (error) => {
        // 请求错误处理
        return httpRequest.error(error);
      }
    ]
  ],
  responseInterceptors: [
    [
      (response) => {
        // 响应成功处理
        return httpResponse.success(response);
      },
      (error) => {
        // 响应错误处理
        return httpResponse.error(error);
      }
    ]
  ]
};
```

### 样式开发

- 支持 Less 预处理器
- 集成 MagicLess 工具库
- 支持全局变量和 mixins

```less
// 在 .winrc.ts 中配置 Less
lessLoader: {
  modifyVars: {
    'hack': `true; @import "@/assets/style/variable.less";@import "@winner-fed/magicless/magicless.less";`
  }
}
```

## 📦 构建配置

### 浏览器兼容性

```javascript
targets: {
  chrome: 51,
  firefox: 54,
  safari: 10,
  edge: 15
}
```

### 构建优化

- **代码压缩**: 使用 Terser 压缩 JavaScript，cssnano 压缩 CSS
- **模块联邦**: 支持微前端架构
- **Source Map**: 开发环境使用 cheap-source-map
- **样式处理**: 开发环境内联 CSS，生产环境提取 CSS 文件

## 🔍 调试与测试

### 开发调试

- 热更新支持
- Source Map 调试
- 详细的错误信息

### 代码质量检查

项目配置了多层代码质量保障：

1. **提交前检查**: 通过 Husky 和 lint-staged 在提交前自动检查代码
2. **实时检查**: 编辑器集成 ESLint、Prettier、Stylelint
3. **CI/CD 集成**: 支持持续集成环境的代码检查

## 📚 相关文档

- [WinJS 官方文档](https://winjs-dev.github.io/winjs-docs/)
- [Vue 3 官方文档](https://vuejs.org/)
- [Vue Router 4 文档](https://router.vuejs.org/)
- [TypeScript 文档](https://www.typescriptlang.org/)

## 🆘 问题反馈

如果您在使用过程中遇到问题，请通过以下方式反馈：

1. 提交 Issue
2. 联系维护团队
3. 查阅官方文档

---

**Happy Coding! 🎉**
