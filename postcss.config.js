// postcss.config.js

const tailwind = require('tailwindcss');
const cssnano = require('cssnano');
const postcssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const presetEnv = require('postcss-preset-env')({
  features: {
    // enable nesting
    'nesting-rules': true,
  },
});

const plugins =
  process.env.NODE_ENV === 'production'
    ? [postcssImport, tailwind, presetEnv, cssnano, autoprefixer]
    : [postcssImport, tailwind, presetEnv/*, autoprefixer*/];

module.exports = { plugins };
