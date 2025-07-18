// https://stylelint.io/
// https://stylelint.docschina.org/ 中文网站，注意版本是否和官网一致
module.exports = {
  extends: ['@winner-fed/stylelint-config-win', 'stylelint-config-prettier'],
  // Less 语法检测
  customSyntax: 'postcss-less',
  overrides: [
    {
      files: ['*.html', '**/*.html', '*.htm', '**/*.htm', '*.vue', '**/*.vue'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    'font-family-no-missing-generic-family-keyword': 'off'
  }
};
