import type { Config } from "tailwindcss";

const cssnano = require("cssnano");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

export default {
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
			fontFamily: {
				sans: ["Inter Variable"],
			},
		},
	},
	safelist: [
		{
			pattern: /text-(info|success|error|warning|accent)/,
		},
	],
} satisfies Config;
