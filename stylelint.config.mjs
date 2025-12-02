/** @type {import("stylelint").Config} */
export default {
	extends: [
		"stylelint-config-standard",
		"stylelint-config-two-dash-bem",
		"stylelint-stylus/standard",
	],
	overrides: [
		{
			files: ["*.stylus", "*.styl", "**/*.stylus", "**/*.styl"],
			customSyntax: "postcss-styl",
		},
	],
};
