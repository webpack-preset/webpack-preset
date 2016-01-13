import loadPackageJSON from './json';
import findPresets from './presets';

export default function config() {
  const packageJSON = loadPackageJSON();
  const presets = findPresets(packageJSON.dependencies);

  presets.forEach(preset => console.log(require(preset)));

  return {};
}
