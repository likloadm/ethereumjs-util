module.exports = function(config) {
  config.set({
    frameworks: ['tap', 'karma-typescript'],
    files: ['src/**/*.ts', 'test/**/*.ts'],
    preprocessors: {
      '**/*.ts': ['karma-typescript']
    },
    karmaTypescriptConfig: {
      bundlerOptions: {
        entrypoints: /\.spec\.ts$/
      },
      tsconfig: './tsconfig.json'
    },
    colors: true,
    reporters: ['progress', 'karma-typescript'],
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: 1,
    // Fail after timeout
    browserDisconnectTimeout: 100000,
    browserNoActivityTimeout: 100000
  })
}
