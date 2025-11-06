// eslint.config.mjs
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      indent: ["error", 2],
      "max-len": ["error", { code: 120 }],
      "function-paren-newline": ["error", "multiline"], // forces one param per line when multiline
      "function-call-argument-newline": ["error", "consistent"], // consistent argument formatting
    },
  },
]);
