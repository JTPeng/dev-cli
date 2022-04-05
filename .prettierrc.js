module.exports = {
  printWidth: 80, // 超过最大值换行
  tabWidth: 2, // 缩进字节数
  useTabs: false, // // 缩进不使用tab，使用空格
  semi: false, // 句尾添加分号
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed',
  jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
  trailingComma: 'es5', // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格
  jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
  htmlWhitespaceSensitivity: 'ignore',
  vueIndentScriptAndStyle: true,
  arrowParens: 'avoid', // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  endOfLine: 'lf', // 结尾是 \n \r \n\r
}
