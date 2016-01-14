const loadPackageJSON = require('./json');
const findPresets = require('./presets');

module.exports = function config() {
  const packageJSON = loadPackageJSON();
  const presets = findPresets(packageJSON.dependencies);

  presets.forEach(preset => console.log(require(preset)));

  return {};
}
