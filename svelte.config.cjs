const { resolve } = require('path');

const sveltePreprocess = require('svelte-preprocess');
const node = require('@sveltejs/adapter-node');
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			defaults: {
				style: "postcss",
			},
			postcss: true
		}),
	],
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: node(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
      resolve: {
        alias: {
          $components: resolve('src/components'),
          $layout: resolve('src/layout'),
          $utils: resolve('src/utils'),
          $assets: resolve('src/assets')
        }
      },
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};
