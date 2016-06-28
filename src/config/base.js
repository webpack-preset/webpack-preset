const webpack = require('webpack')
const path = require('path')

module.exports = function (entry) {
  entry = entry || 'index.js'

  return {
    entry: [
      './' + path.join('.', entry)
    ],
    output: {
      path: process.cwd(),
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
      loaders: []
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  }
}
