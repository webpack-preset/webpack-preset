const loadPackageJSON = require('./json')
const findPresets = require('./presets')

const baseConfig = require('./base')

module.exports = function config() {
  const packageJSON = loadPackageJSON()
  const presets = findPresets(Object.assign(
    {},
    packageJSON.dependencies,
    packageJSON.devDependencies
  ))

  const config = presets.reduce(
    (config, preset) => require(preset)(config),
    baseConfig(packageJSON.main)
  )

  return config
}
