/** @type {import("stylelint").Config} */
export default {
  "extends": ["stylelint-config-standard", "stylelint-stylus/standard",],
  "overrides": [
    {
      "files": ["*.stylus", "*.styl", "**/*.stylus", "**/*.styl"],
      "customSyntax": "postcss-styl",
    },
  ],
};
