import { defineConfig } from '@winner-fed/winjs';

export default defineConfig({
  npmClient: 'pnpm',
  proxy: {
    '/api': {
      target: 'https://petstore.swagger.io/v2/',
      changeOrigin: true, // 是否允许跨域
      pathRewrite: {
        '^/api': '' // 直接用 'api/接口名' 进行请求.
      }
    }
  },
  icons: {},
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
  mfsu: false,
  // 开发使用内联CSS，生产使用构建的CSS文件
  styleLoader: process.env.NODE_ENV === 'production' ? false : {},
  // 开发使用 cheap-source-map
  devtool: process.env.NODE_ENV === 'development' ? 'cheap-source-map' : false
});
