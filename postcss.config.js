// postcss.config.js

const tailwind = require('tailwindcss');
const flexbugs_fixes = require('postcss-flexbugs-fixes');
const presetEnv = require('postcss-preset-env')({
  autoprefixer: {
    flexbox: 'no-2009',
    grid: 'autoplace'
  },
  stage: 3,
  features: {
    'custom-properties': false
  }
});

const plugins =
  process.env.NODE_ENV === 'development'
    ? [tailwind]
    : [tailwind, flexbugs_fixes, presetEnv];

module.exports = { plugins };
