import { sveltekit } from "@sveltejs/kit/vite";
import yaml from "@rollup/plugin-yaml";
import { defineConfig, type PluginOption } from "vite";

export default defineConfig({
	plugins: [sveltekit(), yaml()].map((e) => e as PluginOption),
});
