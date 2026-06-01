/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require('./jest.config');

module.exports = {
    ...baseConfig,
    collectCoverage: false,
    testMatch: [
        '<rootDir>/tst/mvp/**/*.test.ts',
        '<rootDir>/tst/experiences/dashboard-experience/**/*.test.ts',
        '<rootDir>/tst/experiences/visual-experience/**/*.test.ts',
        '<rootDir>/tst/experiences/console-experience/**/*.test.ts',
    ],
};
