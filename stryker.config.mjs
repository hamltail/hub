/** @type {import("@stryker-mutator/api/core").PartialStrykerOptions} */
const config = {
  mutate: ["src/lib/scroll.ts"],
  ignorePatterns: ["reports/security/**"],
  testRunner: "vitest",
  checkers: ["typescript"],
  tsconfigFile: "tsconfig.json",
  reporters: ["progress", "clear-text", "html"],
};

export default config;
