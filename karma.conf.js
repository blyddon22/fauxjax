module.exports = function(config) {
  config.set({
    frameworks: ['qunit'],
    browsers: ['PhantomJS'],
    reporters: ['progress', 'coverage'],
    files: [
      "node_modules/qunit-special-blend/qunit-special-blend.js",
      "node_modules/jquery/dist/jquery.js",
      "src/lodash-4.6.1.js",
      "src/fauxjax.js",
      "test/js/tests.min.js",
      "node_modules/qunit-special-blend/run-qunit-special-blend.js"
    ],
    preprocessors:{
        "src/fauxjax.js": "coverage"
    },
    coverageReporter: {
        type: "lcov",
        dir: "coverage/"
    },
    plugins: [
      "karma-coverage",
      "karma-qunit",
      "karma-phantomjs-launcher"
    ],
    logLevel: config.LOG_ERROR,
    autoWatch: false,
    singleRun: true
  });
};
