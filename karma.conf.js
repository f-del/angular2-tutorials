// Karma configuration
// Generated on Mon Dec 21 2015 20:25:02 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      {
        pattern: 'node_modules/rxjs/**/*.js',
        included: false,
        watched: false,
        served: true
      },
      {
        pattern: 'node_modules/reflect-metadata/Reflect.js',
        included: true,
        watched: true
      },
      {
        pattern: 'node_modules/zone.js/dist/zone-microtask.js',
        included: true,
        watched: true
      },

      {
        pattern: 'node_modules/es6-shim/es6-shim.js',
        included: true,
        watched: true
      },

      {
        pattern: 'node_modules/systemjs/dist/system.src.js',
        included: true,
        watched: true
      },


      {
        pattern: 'node_modules/angular2/bundles/angular2.js',
        included: true,
        watched: true
      },
      {
        pattern: 'node_modules/angular2/bundles/http.js',
        included: true,
        watched: true
      },
      {
        pattern: 'node_modules/angular2/bundles/testing.dev.js',
        included: true,
        watched: true
      },
      //{pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched:
      //true},
      {pattern: 'karma-test-shim.js', included: true, watched: true},

      // custom test function
      {pattern: 'src/test/matchers.js', included: true, watched: true},
      {pattern: 'src/test/mockHelper.js', included: true, watched: true},

      // paths loaded via module imports
      {pattern: 'src/**/*.js', included: false, watched: true},

      // paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      {pattern: 'src/**/*.html', included: false, watched: true},
      {pattern: 'src/**/*.css', included: false, watched: true},

      // paths to support debugging with source maps in dev tools
      {pattern: 'src/**/*.ts', included: false, watched: false},
      {pattern: 'src/**/*.js.map', included: false, watched: false}
    ],

    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      "/app/": "/base/src/app/",
      "/rxjs/": "/base/node_modules/rxjs/"
    },
 
    
    reporters: ['progress', 'dots', 'html'],

    htmlReporter: {
      outputFile: 'test.html',

      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: 'A sample project description'
    },

    port: 8081,
    colors: true,
    logLevel: config.LOG_ERROR,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}
