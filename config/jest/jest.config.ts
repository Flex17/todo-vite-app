/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";
import path from "path";

const config: Config = {
    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,

    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: [
        "\\\\node_modules\\\\",
    ],

    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: ["node_modules", "src"],

    // The test environment that will be used for testing
    testEnvironment: "jsdom",

    // An array of file extensions your modules use
    moduleFileExtensions: [
        "js",
        "mjs",
        "cjs",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node",
    ],

    // The root directory that Jest should scan for tests and modules within
    rootDir: "../../",

    // The glob patterns Jest uses to detect test files
    testMatch: [
        "<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)",
    ],

    setupFilesAfterEnv: [
        "<rootDir>/config/jest/setupTests.tsx",
    ],

    moduleNameMapper: {
        "\\.(s?css)$": "identity-obj-proxy",
        "\\.svg": path.resolve(__dirname, "jestEmptyComponent.tsx"),
        "\\.png": path.resolve(__dirname, "jestEmptyComponent.tsx"),
        "^pages/(.*)": "<rootDir>/src/pages/$1",
        "^widgets/(.*)": "<rootDir>/src/widgets/$1",
        "^features/(.*)": "<rootDir>/src/features/$1",
        "^entities/(.*)": "<rootDir>/src/entities/$1",
        "^shared/(.*)": "<rootDir>/src/shared/$1",
    },
};

export default config;
