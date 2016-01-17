module.exports = function babelPreset(config) {
  config.module.loaders
    .filter(loader => loader.loader == 'babel')[0]
    .query.presets.push('stage-0');

  return config;
};
