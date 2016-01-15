# Webpack Preset <img src="logo.png" align="right" width="150" />
> Zero config [webpack](https://webpack.github.io/)-powered development!

[![npm version](https://img.shields.io/npm/v/webpack-preset.svg?style=flat-square)](https://www.npmjs.com/package/webpack-preset)
[![npm downloads](https://img.shields.io/npm/dm/webpack-preset.svg?style=flat-square)](https://www.npmjs.com/package/webpack-preset)
[![webpack channel on discord](https://img.shields.io/badge/discord-%23webpack%20%40%20reactiflux-61dafb.svg?style=flat-square)](https://discord.gg/0ZcbPKXt5bVrknv7)

We're all [pretty tired out](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4#.1p2hp7afi) by Javascript and its tooling. Webpack has [a metric ton of configuration options](https://webpack.github.io/docs/configuration.html) that are particularly overwhelming when starting out, and get tiring after you've set up your eleventy billionth project. This project serves to speed up a lot of the setup process involved with getting webpack up and running.

:warning: **Keep in mind this tool is for quick prototyping and should not be used long-term in your projects.** :warning:   
Once your project has gotten big or is taken seriously enough, you should invest in a full webpack setup, tuned to your specific needs. But if you want to just crank out some code really quickly, this is the best way to get started!

## Installation

Want a nice Babel ES2015 setup? Just install the package and save it to your `package.json` file:

```sh
npm install --save webpack-preset webpack-preset-babel
```

## Getting Started

Webpack Preset runs a small web server on port 3000 with Webpack embedded within it. It's started via the `webpack-preset` binary and starts a small web server to develop against.

It will look for an entry point in your `package.json`'s `main` definition, falling back to a `index.js` file next to your `package.json` file.

It also serves up a small HTML file with the Webpack bundle included and a `div#root` for convenience. You can use your own HTML by creating a `static/index.html` file and you can place any other static files in that folder.

`webpack-preset` can be run directly from the `node_modules` folder:
```sh
./node_modules/.bin/webpack-preset
```
Or you can add it to your NPM scripts for easy access:
```json
"scripts": {
  "start": "webpack-preset"
}
```
Just run `npm start` and that's it! You can access the page at [http://localhost:3000](http://localhost:3000)

## Roadmap

- [ ] Userland config options via `package.json`
- [ ] More CLI options (list installed presets, install more presets)
- [ ] Globally installable

## Thanks

Bits of this project were inspired by @pirelentio's awesome [sagui project](https://github.com/pirelenito/sagui). Go check it out!

## License

MIT
