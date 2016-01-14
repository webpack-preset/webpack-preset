const loadPackageJSON = require('./json');
const findPresets = require('./presets');

const baseConfig = require('./base');

module.exports = function config() {
  const packageJSON = loadPackageJSON();
  const presets = findPresets(packageJSON.dependencies);

  presets.forEach(preset => console.log(require(preset)));

  return baseConfig;
}
