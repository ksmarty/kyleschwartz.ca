/** @type {import("snowpack").SnowpackUserConfig } */
export default {
	mount: {
		public: { url: "/", static: true },
		src: { url: "/_dist_" },
	},
	plugins: [
		"@snowpack/plugin-svelte",
		"@snowpack/plugin-postcss",
		"@snowpack/plugin-typescript",
		"snowpack-plugin-yaml",
	],
	optimize: {
		/* Example: Bundle your final build: */
		bundle: true,
	},
	packageOptions: {
		/* ... */
	},
	devOptions: {
		tailwindConfig: "./tailwind.config.js",
	},
	buildOptions: {
		/* ... */
	},
};
