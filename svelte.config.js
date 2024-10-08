import adapter from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
	kit: {
		adapter: adapter(),
		alias: {
			$components: "src/routes/_components",
			$sections: "src/routes/_sections",
		},
	},
};

export default config;
