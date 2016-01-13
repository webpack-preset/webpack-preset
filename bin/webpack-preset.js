#!/usr/bin/env node

require('babel-register')({
  only: /webpack-preset-.*/
});
require('../src/server');
