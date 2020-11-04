// svelte.config.js
const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ["src"],
    },
    postcss: {
      plugins: [require('autoprefixer')],
    },
    defaults: {
      // style: 'scss'
    }
  })
};
