module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/attributes-order': 'off',
    'vue/no-confusing-v-for-v-if': 'off',
    'vue/no-v-html': 'off',
    'vue/order-in-components': 'off',
    'vue/this-in-template': 'off'
  },

  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ]
}
