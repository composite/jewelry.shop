// postcss.config.js

const tailwind = require('tailwindcss');
const cssnano = require('cssnano');
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

  whitelistPatterns: [/svelte-/],

  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});
const plugins =
  process.env.NODE_ENV === 'production'
    ? [postcssImport, tailwind, presetEnv, cssnano, purgecss]
    : [postcssImport, tailwind, presetEnv];

module.exports = { plugins };
