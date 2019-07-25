module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential"],
  rules: {
    "no-return-await": "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
