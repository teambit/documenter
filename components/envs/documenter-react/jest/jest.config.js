const reactJestConfig = require('@teambit/react/jest/jest.config');
const { generateNodeModulesPattern } = require('@teambit/dependencies.modules.packages-excluder');
const packagesToExclude = ['react-syntax-highlighter'];

module.exports = {
  ...reactJestConfig,
  transformIgnorePatterns: ['^.+.module.(css|sass|scss)$', generateNodeModulesPattern({ packages: packagesToExclude })],
};
