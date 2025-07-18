module.exports = {
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'always',
  proseWrap: 'never',
  bracketSameLine: false,
  jsxSingleQuote: false,
  vueIndentScriptAndStyle: true,
  htmlWhitespaceSensitivity: 'strict',
  insertPragma: false,
  requirePragma: false,
  endOfLine: 'lf',
  rangeStart: 0,
  overrides: [
    {
      files: ['*.less', '*.css'],
      options: {
        singleQuote: false
      }
    }
  ]
};
