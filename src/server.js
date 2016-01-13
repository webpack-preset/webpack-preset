import express from 'express';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import buildConfig from './config';

const app = express();
const config = buildConfig();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`==> 🌎  listening on port 3000`);
  }
});
