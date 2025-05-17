import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  moduleNameMapper: {
    "^@lib/(.*)$": "<rootDir>/src/lib/$1",
    "^@lib$": "<rootDir>/src/lib",
    "^@constants/(.*)$": "<rootDir>/src/lib/constants/$1",
    "^@constants$": "<rootDir>/src/lib/constants",
    "^@local-types/(.*)$": "<rootDir>/src/lib/types/$1",
  },
};

export default config;
