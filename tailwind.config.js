module.exports = {
	// mode: "jit",
	purge: ["./public/**/*.html", "./src/**/*.{ts,svelte}"],
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
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
};
