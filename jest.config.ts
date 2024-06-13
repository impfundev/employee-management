import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/*.type.ts",
    "!<rootDir>/.next/**",
    "!<rootDir>/prisma/**",
    "!<rootDir>/*.config.ts",
    "!<rootDir>/src/app/api/**",
    "!<rootDir>/src/middleware.ts",
    "!<rootDir>/src/services/prisma_client.ts",
    "!<rootDir>/public/**",
  ],
};

export default createJestConfig(config);
