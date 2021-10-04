module.exports = {
	mode: "jit",
	purge: ["./public/**/*.html", "./src/**/*.{ts,svelte}"],
	plugins: [require("daisyui")],
};
