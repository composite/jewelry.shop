module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": ["global"]
      }
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
  },
  "ignoreFiles": ["*", ".*", "**/*.js", "**/*.ts", "**/*.cjs", "static/global.css"]
};
