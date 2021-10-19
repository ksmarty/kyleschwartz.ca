const config = {
	webServer: {
		command: "yarn start",
		port: 8080,
		timeout: 120 * 1000,
		reuseExistingServer: !process.env.CI,
	},
	testDir: "./resume",
};
module.exports = config;
