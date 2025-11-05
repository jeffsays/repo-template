/** @jest-config-loader ts-node */
/** @jest-config-loader-options {"transpileOnly": true} */

import type { Config } from "jest";
import { defaults } from "jest-config";
import { createDefaultEsmPreset } from "ts-jest";

const presetConfig = createDefaultEsmPreset({
  // coverage
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*.ts"],
  coverageDirectory: "var/coverage/test",
  coveragePathIgnorePatterns: ["/node_modules/", "/dist/"],
  coverageReporters: ["json-summary", "text", "lcov"],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },

  // mocks
  clearMocks: true,
  restoreMocks: true,
  resetMocks: true,

  // module
  moduleDirectories: [...defaults.moduleDirectories, ".", "node_modules"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  // moduleNameMapper: ,
  modulePathIgnorePatterns: ["<rootDir>/dist/"],

  // environment
  extensionsToTreatAsEsm: [".mts", ".ts"],
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  // preset: "ts-jest",
  resolver: "ts-jest-resolver",

  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
  testPathIgnorePatterns: ["/dist/", "/node_modules/"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        diagnostics: {
          pretty: true,
        },
        isolatedModules: true,
        tsconfig: "tsconfig.test.json",
        useESM: true,
      },
    ],
  },

  // other
  reporters: [["github-actions", { silent: false }], "summary"],
  verbose: true,
});

export default {
  ...presetConfig,
} satisfies Config;
