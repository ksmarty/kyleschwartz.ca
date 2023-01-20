/** @type {import('tailwindcss').Config} */

const cssnano = require("cssnano");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	plugins: [
		require("daisyui"),
		require("@tailwindcss/typography"),
		!dev &&
			cssnano({
				preset: "default",
			}),
	],
	daisyui: {
		themes: ["dark", "light"],
		base: false,
	},
	theme: {
		extend: {
			screens: {
				print: { raw: "print" },
			},
		},
	},
	safelist: [
		{
			pattern: /text-(info|success|error|warning|accent)/,
		},
	],
};
