const path = require('path')
const fs = require('fs')

const express = require('express')
const webpack = require('webpack')

const buildConfig = require('./config')

const app = express()
const config = buildConfig()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  stats: { colors: true },
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

try {
  fs.accessSync('./static/index.html', fs.R_OK)
  app.use((req, res) => res.sendFile('./static/index.html'))
} catch (e) {
  app.use((req, res) => res.sendFile(path.join(__dirname, '../static/index.html')))
}

app.listen(3000, (err) => {
  /*eslint-disable no-console */
  if (err) {
    console.error(err)
  } else {
    console.info(`==> 🌎  listening on port 3000`)
  }
  /*eslint-enable no-console */
})
