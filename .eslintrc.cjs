require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  env: {
    // 浏览器环境
    browser: true,
    // Node环境
    node: true,
    // 启用除了modules以外的所有 ECMAScript 6 特性
    es2021: true,
  },
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    './.eslintrc-auto-import.json',
  ],
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-debugger': 'warn', // 禁止出现 debugger
    'vue/multi-word-component-names': 0,
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
  },
};
