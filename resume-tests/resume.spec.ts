import { test } from "@playwright/test";

const pdfLoc = (str: string) => `./static/${str}.pdf`;
const margin = "0.42in";
const opts = {
	printBackground: false,
	margin: {
		bottom: margin,
		left: margin,
		right: margin,
		top: margin,
	},
};

test("resume", async ({ page }) => {
	await page.goto("/");
	await page.pdf({
		...opts,
		path: pdfLoc("Kyle Schwartz - Resume"),
	});
});
