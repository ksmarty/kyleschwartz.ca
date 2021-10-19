const { test } = require("@playwright/test");

test("resume", async ({ page }) => {
	await page.goto("http://localhost:8080");
	await page.pdf({
		printBackground: true,
		margin: {
			bottom: "0.5in",
			left: "0.5in",
			right: "0.5in",
			top: "0.5in",
		},
		path: "./public/static/resume.pdf",
	});
});
