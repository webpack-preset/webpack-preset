# Webpack Preset
> Zero config [webpack](https://webpack.github.io/)-powered development!

We're all [pretty tired out](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4#.1p2hp7afi) by Javascript and its tooling. Webpack has [a metric ton of configuration options](https://webpack.github.io/docs/configuration.html) that are particularly overwhelming when starting out, and get tiring after you've set up your eleventy billionth project. This project serves to speed up a lot of the setup process involved with getting webpack up and running.

:warning: **Keep in mind this tool is for quick prototyping and should not be used long-term in your projects.** :warning:   
Once your project has gotten big or is taken seriously enough, you should invest in a full webpack setup, tuned to your specific needs. But if you want to just crank out some code really quickly, this is the best way to get started!

## Installation

Want a nice Babel ES2015 setup? Just install the package and save it to your `package.json` file:

```sh
npm install --save webpack-preset webpack-preset-babel
```

You can run it directly from the `node_modules` install:

```sh
./node_modules/.bin/webpack-preset
```

Or you can add it to your NPM scripts for easy access:

```json
"scripts": {
  "start": "webpack-preset"
}
```
Just run `npm start` and that's it!
