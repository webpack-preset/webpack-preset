const webpack = require('webpack')

module.exports = function hmrPreset(config) {
  config.entry.push('webpack-hot-middleware/client')
  config.plugins.push(new webpack.HotModuleReplacementPlugin())

  return config;
};
