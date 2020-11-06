// postcss.config.js

const defaultWhitelist = ["html", "body", "stroke-primary", "mode-dark"];
const defaultWhitelistPatterns = [
  // for JS ripple
  /ripple/,
  // date picker
  /w\-.\/7/,
  /svelte-/
];

const tailwind = require('tailwindcss');
const cssnano = require('cssnano');
const url = require("postcss-url")();
const inputRange = require("postcss-input-range")();
const postcssImport = require('postcss-import')({
    plugins: [],
    path: ['./node_modules'],
});
const presetEnv = require('postcss-preset-env')({
  autoprefixer: { },
  features: {
    // enable nesting
    'nesting-rules': true,
  },
});
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.html',
    './src/**/*.svelte'
  ],
  whitelist: [...defaultWhitelist],
  whitelistPatterns: [...defaultWhitelistPatterns],
  whitelistPatternsChildren: [...defaultWhitelistPatterns],

  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});
const plugins =
  process.env.NODE_ENV === 'production'
    ? [postcssImport, url, inputRange, tailwind, presetEnv, cssnano, purgecss]
    : [postcssImport, url, inputRange, tailwind, presetEnv];

module.exports = { plugins };
