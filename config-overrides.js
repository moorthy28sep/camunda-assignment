/* config-overrides.js */
const { injectBabelPlugin } = require("react-app-rewired");
const rewireMobX = require("react-app-rewire-mobx");
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = rewireLess(config, env);
  config = rewireMobX(config, env);
  // with loaderOptions
  // config = rewireLess.withLoaderOptions(someLoaderOptions)(config, env);
  return config;
}