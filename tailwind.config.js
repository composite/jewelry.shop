
module.exports = {
  corePlugins: {
    // disable grid by default due to lack of customize
    gridAutoFlow: false,
    gridTemplateColumns: false,
    gridAutoColumns: false,
    gridColumn: false,
    gridColumnStart: false,
    gridColumnEnd: false,
    gridTemplateRows: false,
    gridAutoRows: false,
    gridRow: false,
    gridRowStart: false,
    gridRowEnd: false,
    gap: false
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: {
    uniformColorPalette: true,
    extendedFontSizeScale: true,
    // currently Sapper dev server chokes on this
    // applyComplexClasses: true,
  },
  purge: {
    enabled: process.env.NODE_ENV !== 'development',
    content: ['./src/**/*.svelte', './src/**/*.html'],
    options: {
      whitelist: ["html", "body", "stroke-primary", "mode-dark"],
      whitelistPatterns: [
        // for JS ripple
        /ripple/,
        // date picker
        /w\-.\/7/,
        /svelte-/
      ],
    }
  },
  theme: {
    screens: {
      xs: { max: '599px' },

      // 'sm': {min: '600px', max: '1023px'},
      sx: { max: '1023px' },
      sn: { min: '600px' },

      // 'md': {min: '1024px', max: '1439px'},
      mx: { max: '1439px' },
      mn: { min: '1024px' },

      // 'lg': {min: '1440px', max: '1919px'},
      lx: { max: '1919px' },
      ln: { min: '1440px' },

      xl: { min: '1920px' }
    },
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: '#b027b0',
        secondary: '#009688',
        error: '#f44336',
        success: '#4caf50',
        alert: '#ff9800',
        dark: '#212121'
      },
      flex: {
        default: '0 0 auto',
        inherit: 'inherit'
      }
    }
  },
  variants: {
    accessibility: ['responsive', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundClip: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundImage: ['responsive', 'hover', 'focus'],
    gradientColorStops: ['responsive', 'hover', 'focus'],
    backgroundOpacity: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive', 'hover', 'focus'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive', 'hover', 'focus'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderOpacity: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive', 'hover', 'focus'],
    boxShadow: ['responsive', 'hover', 'focus'],
    boxSizing: ['responsive'],
    container: ['responsive'],
    cursor: ['responsive', 'focus'],
    display: ['responsive', 'focus'],
    divideColor: ['responsive'],
    divideOpacity: ['responsive'],
    divideStyle: ['responsive'],
    divideWidth: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    clear: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontVariantNumeric: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    justifyItems: ['responsive'],
    justifySelf: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'focus'],
    order: ['responsive'],
    outline: ['responsive', 'hover', 'focus'],
    overflow: ['responsive'],
    overscrollBehavior: ['responsive'],
    padding: ['responsive'],
    placeContent: ['responsive'],
    placeItems: ['responsive'],
    placeSelf: ['responsive'],
    placeholderColor: ['responsive', 'focus'],
    placeholderOpacity: ['responsive', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    space: ['responsive'],
    stroke: ['responsive'],
    strokeWidth: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textOpacity: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive', 'hover', 'focus'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive', 'focus'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    scale: ['responsive', 'hover', 'focus'],
    rotate: ['responsive', 'hover', 'focus'],
    translate: ['responsive', 'hover', 'focus'],
    skew: ['responsive', 'hover', 'focus'],
    transitionProperty: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDuration: ['responsive'],
    transitionDelay: ['responsive'],
    animation: ['responsive']
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/custom-forms')
  ]
}
