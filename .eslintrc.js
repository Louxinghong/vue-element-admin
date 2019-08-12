module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["eslint:recommended", "plugin:vue/essential"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["vue"],
  rules: {
    semi: ["error", "never"], // 行尾不使用分号
    "no-multi-spaces": 1, //不能用多余的空格,
    "space-before-function-paren": [2, "always"], //函数定义时括号前面要不要有空格
    "no-multiple-empty-lines": [2, { max: 1 }], //空行最多不能超过2行
    quotes: [2, "single"] //引号类型 `` "" ''
  }
};
