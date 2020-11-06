
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
