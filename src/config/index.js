const loadPackageJSON = require('./json');
const findPresets = require('./presets');

const baseConfig = require('./base');

module.exports = function config() {
  const packageJSON = loadPackageJSON();
  const presets = findPresets(packageJSON.dependencies);

  const config = presets.reduce(
    (config, preset) => require(preset)(config),
    baseConfig
  );

  return config;
}
