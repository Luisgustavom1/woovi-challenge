module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/**/*.{js,jsx}'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/.turbo/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
