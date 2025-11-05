/**
 * @file - Shared configuration for lint-staged.
 * @author - Jeff Beck.
 * @ref - https://www.npmjs.com/package/lint-staged
 * @ref - https://github.com/lint-staged/lint-staged
 * @packageDocumentation - https://github.com/lint-staged/lint-staged?tab=readme-ov-file#configuration
 */

import asyncConfig from "@jeffsays/lint-staged";
import type { Configuration } from "lint-staged";

const config: Configuration = {
  ...asyncConfig,
  // extend as-needed
};

export default config;
