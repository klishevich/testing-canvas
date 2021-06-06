module.exports = {
    rootDir: '../..',
    roots: ['./test/e2e', './src'],
    testMatch: ['**/?(*.)+(spec|test).js'],
    testPathIgnorePatterns: ['/node_modules/', 'dist', 'src'],
    testTimeout: 200000,
    preset: 'jest-puppeteer',
    setupFilesAfterEnv: ['./test/e2e/jest.image.js']
}
