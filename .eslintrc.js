/*
 * @Author      : 吴晓斌
 * @Date        : 2021-07-31 12:34:11
 * @LastEditTime: 2021-08-04 00:42:31
 * @Description :
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off', // 取消函数名后必须加空格的规定
    'no-irregular-whitespace': 'off', // 这禁止掉 空格报错检查
    'no-trailing-spaces': 'off'
  }
}
