module.exports = {
  resetMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  coveragePathIgnorePatterns: [],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/.turbo/'],
  moduleDirectories: ['node_modules'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};
