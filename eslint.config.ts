/**
 * @file - Shared configuration for eslint.
 * @ref - https://www.npmjs.com/package/eslint
 * @ref - https://github.com/eslint/eslint
 * @packageDocumentation - https://eslint.org/docs/latest/
 */

import baseConfig from "@jeffsays/eslint";
import { defineConfig } from "eslint/config";

/** @type {import("eslint").Config} */
export default defineConfig([baseConfig]);
