import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
	webServer: {
		command: "pnpm dev",
		url: "http://localhost:5173/",
		timeout: 120 * 1000,
		reuseExistingServer: !process.env.CI,
	},
	use: {
		baseURL: "http://localhost:5173/",
		browserName: "chromium",
	},
	testDir: "./resume-tests",
};

export default config;
