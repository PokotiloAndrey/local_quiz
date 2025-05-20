module.exports = {
  testEnvironment: 'jsdom',
  transform: {},
  globals: {
    'window': {}
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  }
};
