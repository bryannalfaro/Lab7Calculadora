module.exports = {
  setupFilesAfterEnv: [
    './jest.setup.js',
  ],
  moduleNameMapper: {
    '\\.css$': '<rootDir>./src/__mock__/css.mock.js',

  },
}
