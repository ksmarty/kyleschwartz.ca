import ViteYaml from "@modyfi/vite-plugin-yaml";
import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), ViteYaml()],
};

export default config;
