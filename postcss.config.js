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
const syntax = 'postcss-scss'

const plugins =
  process.env.NODE_ENV === 'production'
    ? [postcssImport, tailwind, presetEnv, cssnano]
    : [postcssImport, tailwind, presetEnv];

module.exports = { syntax, plugins };
