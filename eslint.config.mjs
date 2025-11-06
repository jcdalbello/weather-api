// eslint.config.mjs
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      indent: ["error", 2],
      "max-len": ["error", { code: 120 }],
      "function-paren-newline": ["error", "multiline"],
    },
  },
]);