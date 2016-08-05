/* eslint-disable */
/* global require, module */
let EmberApp = require('ember-cli/lib/broccoli/ember-app');
let shim = require('flexi/lib/pod-templates-shim');

shim(EmberApp);

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-animatable': {
      include: ['bounceIn']
    },
    'ember-font-awesome': {
      useScss: true
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  if (!process.env.EMBER_CLI_FASTBOOT) {
    app.import(app.bowerDirectory + '/gsap/src/uncompressed/TimelineLite.js');
    app.import(app.bowerDirectory + '/svg-injector/svg-injector.js');
  }

  return app.toTree();
};

/* eslint-enable */
