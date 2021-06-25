module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/rule-name": "error",
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
};
