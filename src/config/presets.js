module.exports = function findPresets(dependencies) {
  return Object.keys(dependencies)
    .filter(dep => /webpack-preset-.*/.test(dep))
}
