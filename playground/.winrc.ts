// http://172.27.24.2:7788/winjs-document/config/config.html
import { defineConfig } from '@winner-fed/winjs';

export default defineConfig({
  npmClient: 'pnpm',
  plugins: ['@winner-fed/plugin-request'],
  /**
   * @name request 配置，可以配置错误处理
   * @description 它基于 axios 和 VueHookPlus 的 useRequest 提供了一套统一的网络请求和错误处理方案。
   * @doc http://172.27.24.2:7788/winjs-document/plugins/request.html
   */
  request: {},
  /**
   * @name appConfig 配置
   * @description 可以配置前端工程运行的配置文件 `config.local.js` 里内容。
   * @doc http://172.27.24.2:7788/winjs-document/config/config.html#appconfig
   */
  appConfig: {
    // 本地调试环境
    development: {
      API_HOME: 'https://api.github.com/',
      API_UPLOAD: 'https://api.github.com/upload'
    },
    // 测试环境
    test: {
      API_HOME: 'https://test.github.com/',
      API_UPLOAD: 'https://test.github.com/upload'
    },
    // 生产环境
    production: {
      API_HOME: 'https://production.github.com/',
      API_UPLOAD: 'https://production.github.com/upload'
    }
  },
  /**
   * @name icons 配置
   * @description svg icon 的相关配置
   * @doc http://172.27.24.2:7788/winjs-document/config/config.html#icons
   */
  icons: {},
  /**
   * @name banner 配置
   * @description 为构建的静态资源（JS、CSS 文件）的头部或尾部注入内容的能力。
   * @doc http://172.27.24.2:7788/winjs-document/config/config.html#banner
   */
  banner: true,
  targets: { chrome: 51, firefox: 54, safari: 10, edge: 15 },
  jsMinifier: 'terser',
  cssMinifier: 'cssnano',
  /**
   * @name <less> less-loader 里的配置
   * @description 全局注入变量及 mixins
   */
  lessLoader: {
    modifyVars: {
      // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
      hack: `true; @import "@/assets/style/variable.less";@import "@winner-fed/magicless/magicless.less";`
    }
  },
  title: 'winjs-template-demo',
  mountElementId: 'winjsTemplateDemo6ca4hmlhht',
  mfsu: {
    shared: {
      vue: {
        singleton: true,
        eager: true
      }
    }
  },
  // 开发使用内联CSS，生产使用构建的CSS文件
  styleLoader: process.env.NODE_ENV === 'production' ? false : {},
  // 开发使用 cheap-source-map
  devtool: process.env.NODE_ENV === 'development' ? 'cheap-source-map' : false
});
