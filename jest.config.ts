/** @jest-config-loader ts-node */
/** @jest-config-loader-options {"transpileOnly": true} */

import { defaults } from "jest-config";
import { createDefaultEsmPreset, type DefaultEsmPreset, type JestConfigWithTsJest } from "ts-jest";

const presetConfig: DefaultEsmPreset = createDefaultEsmPreset({
  // coverage
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.(t|j)s"],
  coverageDirectory: "var/coverage/test",
  coveragePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
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
  moduleDirectories: [...defaults.moduleDirectories, "<rootDir>/node_modules", "src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
    "^@src/(.*)$": "<rootDir>/src/$1", // Example for an alias @src
  },
  modulePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],

  // environment
  extensionsToTreatAsEsm: [".mts", ".ts"],
  globals: {
    "ts-jest": {
      isolatedModules: true,
      tsconfig: "<rootDir>/tsconfig.test.json",
      useESM: true,
    },
  },
  preset: "ts-jest/presets/default-esm",
  resolver: "ts-jest-resolver",
  rootDir: ".",

  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
  testPathIgnorePatterns: ["/dist/", "/node_modules/"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        diagnostics: {
          pretty: true,
        },
        isolatedModules: true,
        tsconfig: "<rootDir>/tsconfig.test.json",
        useESM: true,
      },
    ],
  },

  // other
  reporters: [
    [
      "github-actions",
      {
        silent: false,
      },
    ],
    "summary",
  ],
  verbose: true,
});

const jestConfig: JestConfigWithTsJest = {
  ...presetConfig,
};

export default jestConfig;
