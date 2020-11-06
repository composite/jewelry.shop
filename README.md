# Jewelry.shop

Commerce meets social, project with [Sapper](https://github.com/sveltejs/sapper).

## Project info

SSR!

### Project Environment

- node.js (lastest LTS, [`nvm`](https://github.com/nvm-sh/nvm) recommended.)
- `npm` (`yarn` is having some issue of this project)
- `git` (on Windows: Git for Windows or WSL. WSL2 is recommended.)
- Visual Studio Code (or suitable IDE such as Webstorm...)

### Frameworks / Libraries

- Svelte
- Sapper
- IBM Plex Sans (and mono)
- IBM Plex Sans KR
- Rollup
- Polka
- Sirv
- PostCSS
- Tailwind
- Autoprefixer

### Project setup

1. Typical: `git clone https://github.com/composite/jewelry.shop.git`
   - SSH: `git clone git@github.com:composite/jewelry.shop.git`
2. `npm i` (`npm ci` if you want clean project dependency)

### Project live development

1. `npm run css:pcss` (only run each edit `src/styles/global.pcss` file.)
2. `npm run dev:run` (Auto reload when edit any files in `src`.)

### Project test

- TODO

### Project Build

1. `npm run build`

### Project Export

1. `npm run export`

### Proejct test

1. `npm run start`

## TODO

- IBM Plex: Using CDN instead of local (service worker storage issue)

### VS Code extensions

**BOLD is strongly recommended for dev!!!**

- **Auto Close Tag**
- **Auto Rename Tag**
- **Auto Complete Tag**
- Better Comments
- Bracket Pair Colorizer
- Debugger for Chrome
- **PostCSS Syntax**
- **Auto Import**
- Bookmarks
- **EditorConfig for VS Code**
- Git History
- GitLens
- HTML CSS Support
- Import Cost
- intent-rainbow
- IntelliSense for CSS class in HTML
- **Markdown All in One**
- markdownlint
- **npm**
- **npm IntelliSense**
- **Path Intellisense**
- REST Client
- **stylelint**
- **Svelte for VS Code**
- **Svelte Auto Import**
- **Svelte Intellisense**
- **Tailwind CSS IntelliSense**
- Terminal

### Recommend settings for VS Code (`settings.json`)

- obtain node path for `which node` on *nix, `where node` for windows.

```json
{
    "telemetry.enableTelemetry": false,
    "css.validate": false,
    "scss.validate": false,
    "less.validate": false,
    "svelte.language-server.runtime": "/absolute/path/to/node",
    "svelte.plugin.css.diagnostics.enable": false,
}
```

Why should disable validation CSS feature? because of svelte CSS diagnostics issue.

## FAQs

- `Cannot find module 'polka'` when build/dev sapper.
  - It uses bleeding edge version of `polka` module, sometimes its status may be missing or corrupted.
  - just type `npm i` in console again and retry. It should be okay.
- It seems edited contents are not changed. even clicking refresh page.
  - It's known issue of Service Worker cache mechanism. open devtools and try clean cache and reload.

## Styling Strategy

[Made with SVELTE](https://madewithsvelte.com/)

- [Tailwind CSS](https://tailwindcss.com/)
  - [Smelte](https://smeltejs.com/)
  - [Notus Svelte - FREE TAILWIND CSS UI KIT AND ADMIN](https://www.creative-tim.com/product/notus-svelte?affiliate_id=104113)
    - [Github](https://github.com/creativetimofficial/notus-svelte)
    - [Live Preview](https://demos.creative-tim.com/notus-svelte/)
    - [Docs](https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus)

## Directory structure

Sapper expects to find two directories in the root of your project — `src` and `static`.

### src

The [src](src) directory contains the entry points for your app — `client.js`, `server.js` and (optionally) a `service-worker.js` — along with a `template.html` file and a `routes` directory.

#### src/routes

This is the heart of your Sapper app. There are two kinds of routes — _pages_, and _server routes_.

**Pages** are Svelte components written in `.svelte` files. When a user first visits the application, they will be served a server-rendered version of the route in question, plus some JavaScript that 'hydrates' the page and initialises a client-side router. From that point forward, navigating to other pages is handled entirely on the client for a fast, app-like feel. (Sapper will preload and cache the code for these subsequent pages, so that navigation is instantaneous.)

**Server routes** are modules written in `.js` files, that export functions corresponding to HTTP methods. Each function receives Express `request` and `response` objects as arguments, plus a `next` function. This is useful for creating a JSON API, for example.

There are three simple rules for naming the files that define your routes:

- A file called `src/routes/about.svelte` corresponds to the `/about` route. A file called `src/routes/blog/[slug].svelte` corresponds to the `/blog/:slug` route, in which case `params.slug` is available to the route
- The file `src/routes/index.svelte` (or `src/routes/index.js`) corresponds to the root of your app. `src/routes/about/index.svelte` is treated the same as `src/routes/about.svelte`.
- Files and directories with a leading underscore do _not_ create routes. This allows you to colocate helper modules and components with the routes that depend on them — for example you could have a file called `src/routes/_helpers/datetime.js` and it would _not_ create a `/_helpers/datetime` route.

#### src/node_modules/images

Images added to `src/node_modules/images` can be imported into your code using `import 'images/<filename>'`. They will be given a dynamically generated filename containing a hash, allowing for efficient caching and serving the images on a CDN.

See [`index.svelte`](src/routes/index.svelte) for an example.

#### src/node_modules/@sapper

This directory is managed by Sapper and generated when building. It contains all the code you import from `@sapper` modules.

### static

The [static](static) directory contains static assets that should be served publicly. Files in this directory will be available directly under the root URL, e.g. an `image.jpg` will be available as `/image.jpg`.

The default [service-worker.js](src/service-worker.js) will preload and cache these files, by retrieving a list of `files` from the generated manifest:

```js
import { files } from "@sapper/service-worker";
```

If you have static files you do not want to cache, you should exclude them from this list after importing it (and before passing it to `cache.addAll`).

Static files are served using [sirv](https://github.com/lukeed/sirv).

## Bundler configuration

Sapper uses Rollup or webpack to provide code-splitting and dynamic imports, as well as compiling your Svelte components. With webpack, it also provides hot module reloading. As long as you don't do anything daft, you can edit the configuration files to add whatever plugins you'd like.

## Production mode and deployment

To start a production version of your app, run `npm run build && npm start`. This will disable live reloading, and activate the appropriate bundler plugins.

You can deploy your application to any environment that supports Node 10 or above. As an example, to deploy to [Vercel Now](https://vercel.com) when using `sapper export`, run these commands:

```bash
npm install -g vercel
vercel
```

If your app can't be exported to a static site, you can use the [now-sapper](https://github.com/thgh/now-sapper) builder. You can find instructions on how to do so in its [README](https://github.com/thgh/now-sapper#basic-usage).

## Using external components

When using Svelte components installed from npm, such as [@sveltejs/svelte-virtual-list](https://github.com/sveltejs/svelte-virtual-list), Svelte needs the original component source (rather than any precompiled JavaScript that ships with the component). This allows the component to be rendered server-side, and also keeps your client-side app smaller.

Because of that, it's essential that the bundler doesn't treat the package as an _external dependency_. You can either modify the `external` option under `server` in [rollup.config.js](rollup.config.js) or the `externals` option in [webpack.config.js](webpack.config.js), or simply install the package to `devDependencies` rather than `dependencies`, which will cause it to get bundled (and therefore compiled) with your app:

```bash
npm install -D @sveltejs/svelte-virtual-list
```
