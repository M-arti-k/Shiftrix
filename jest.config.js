/** @type {import('jest').Config} */
export const preset = "ts-jest";
export const testEnvironment = "jsdom";
export const transform = {
  "^.+\\.[tj]sx?$": "babel-jest",
};
export const moduleNameMapper = {
  "^@components/(.*)$": "<rootDir>/src/components/$1",
  "^@styles/(.*)$": "<rootDir>/src/styles/$1",
  "^@interfaces/(.*)$": "<rootDir>/src/interfaces/$1",
  "^.+\\.module\\.(css|scss|sass)$": "identity-obj-proxy",
};
export const setupFilesAfterEnv = ["<rootDir>/src/setupTests.ts"];
export const testPathIgnorePatterns = ["/node_modules/", "/dist/"];
