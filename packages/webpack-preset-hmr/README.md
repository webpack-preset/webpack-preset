# Webpack Hot Module Reloading Preset
> Zero config [hot module reloading](http://webpack.github.io/docs/hot-module-replacement-with-webpack.html)!

[![npm version](https://img.shields.io/npm/v/webpack-preset-hmr.svg?style=flat-square)](https://www.npmjs.com/package/webpack-preset-hmr)
[![npm downloads](https://img.shields.io/npm/dm/webpack-preset-hmr.svg?style=flat-square)](https://www.npmjs.com/package/webpack-preset-hmr)
[![webpack channel on discord](https://img.shields.io/badge/discord-%23webpack%20%40%20reactiflux-61dafb.svg?style=flat-square)](https://discord.gg/0ZcbPKXt5bVrknv7)

Sets up hot module reloading in Webpack, which automatically exchanges any module without a page reload. This isn't a magic bullet (React support requires react-transform), but works out of the box with pure Javascript functions and static assets, such as CSS or images. 

**Requires [webpack-preset](https://github.com/webpack-preset/webpack-preset)**

## Installation

```sh
npm install --save webpack-preset webpack-preset-hmr
```
