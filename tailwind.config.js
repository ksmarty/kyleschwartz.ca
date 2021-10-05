module.exports = {
	// mode: "jit",
	purge: ["./public/**/*.html", "./src/**/*.{ts,svelte}"],
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: ["dark"],
		base: false,
	},
};
