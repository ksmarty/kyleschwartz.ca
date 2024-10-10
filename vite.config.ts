import yaml from "@rollup/plugin-yaml";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, type PluginOption } from "vite";
import { run } from "vite-plugin-run";

export default defineConfig({
	plugins: [
		sveltekit(),
		yaml(),
		run([
			{
				name: "generate resume",
				run: [..."pnpm run pdf".split(" ")],
				pattern: [
					"src/routes/_components/Resume.svelte",
					"src/routes/+layout.svelte",
					"resume-tests/**/*",
					"src/lib/**/",
					"static/badges/**/*",
					"static/certs/**/*",
				],
			},
		]),
	].map((e) => e as PluginOption),
});
