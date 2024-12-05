import type { Config } from "jest";

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jest-environment-jsdom",

  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
  },
  transform: {
    "^.+\\.(svg)$": "<rootDir>/node_modules/jest-transform-stub",
    ".[jt]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
};

export default config;
