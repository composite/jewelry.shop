// svelte.config.js
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from "autoprefixer";

export default {
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ["src"],
    },
    postcss: {
      plugins: [autoprefixer],
    },
  })
};
