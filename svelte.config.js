// svelte.config.js
const sveltePreprocess = require('svelte-preprocess');
const autoprefixer = require('autoprefixer');

module.exports = {
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ["src"],
    },
    postcss: {
      plugins: [autoprefixer],
    }
  })
};
