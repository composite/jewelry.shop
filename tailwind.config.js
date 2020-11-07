
module.exports = {
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
    screens: {
      'xs': {max: '599px'},
      'sm': {min: '600px', max: '1023px'},
      'md': {min: '1024px', max: '1439px'},
      'lg': {min: '1440px', max: '1919px'},
      'xl': {min: '1920px'}
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#b027b0",
        secondary: "#009688",
        error: "#f44336",
        success: "#4caf50",
        alert: "#ff9800",
        dark: "#212121",
      },
      flex: {
        default: '0 0 auto',
        inherit: 'inherit'
      }
    },
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/custom-forms')
  ],
}
