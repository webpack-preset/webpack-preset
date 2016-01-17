module.exports = function babelPreset(config) {
  config.module.loaders.push({
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel',
    query: {
      presets: [],
      plugins: ['transform-runtime']
    }
  });

  return config;
};
