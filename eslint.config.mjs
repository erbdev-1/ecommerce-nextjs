// .eslintrc.js
module.exports = {
  ignorePatterns: ["**/*.js"],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  globals: {
    React: "writable",
  },
  rules: {
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": ["warn"],
    // Diğer kuralları ihtiyaca göre ekleyin
  },
};
