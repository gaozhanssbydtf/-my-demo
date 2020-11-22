/*
 * @author: gaozhan
 * @Date: 2020-11-20 22:47:43
 * @LastEditors: gaozhan
 * @LastEditTime: 2020-11-20 22:59:33
 * @FilePath: \mydemo\.eslintrc.js
 * @Description: In User Settings Edit
 */
// module.exports = {
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": [
//         "plugin:vue/essential",
//         "airbnb-base"
//     ],
//     "parserOptions": {
//         "ecmaVersion": 12,
//         "sourceType": "module"
//     },
//     "plugins": [
//         "vue"
//     ],
//     "rules": {
//         "no-console":"off",
//         "vue/html-self-closing": ["error", {
//             "html": {
//               "void": "any",
//               "normal": "any",
//               "component": "any"
//             },
//             "svg": "always",
//             "math": "always"
//           }]
//     }
// };
module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint'
    },
    env: {
      browser: true
    },
    extends: [
      // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
      // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
      'plugin:vue/essential',
      // https://github.com/standard/standard/blob/master/docs/RULES-en.md
      'standard'
    ],
    // required to lint *.vue files
    plugins: ['vue'],
    // add your custom rules here
    rules: {
      // allow async-await
      'no-console': 'off',
      indent: ['error', 2, { SwitchCase: 1 }],
      semi: ['error', 'always'],
      'space-before-function-paren': [
        'error',
        { anonymous: 'always', named: 'never' }
      ],
      'generator-star-spacing': 'off',
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
  }
  
