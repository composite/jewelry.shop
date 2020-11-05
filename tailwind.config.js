const smelte = require('smelte/tailwind.config');

module.exports = smelte({
  future: {
    removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  experimental: {
    uniformColorPalette: true,
    extendedFontSizeScale: true,
    // currently Sapper dev server chokes on this
    // applyComplexClasses: true,
  },
  purge: false,
  // purge: {
  //   // needs to be set if we want to purge all unused
  //   // @tailwind/typography styles
  //   mode: 'all',
  //   content: ['./src/**/*.svelte', './src/**/*.html'],
  // },
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
})
