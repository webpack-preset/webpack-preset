const path = require('path')
const fs = require('fs')

module.exports = function loadPackageJSON() {
  const packageJSONPath = path.join(process.cwd(), 'package.json')
  return JSON.parse(fs.readFileSync(packageJSONPath))
}
