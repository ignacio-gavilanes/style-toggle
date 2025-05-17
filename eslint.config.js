const { defineConfig } = require("eslint/config");
const raycastConfig = require("@raycast/eslint-config");

module.exports = defineConfig([
  ...raycastConfig,
 {
    rules: {
      semi: ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
    },
  },
]);
