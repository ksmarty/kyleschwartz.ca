import { test } from "@playwright/test";

const pdfLoc = (str: string) => `./static/cv/${str}.pdf`;
const margin = "0.42in";
const opts = {
	printBackground: true,
	margin: {
		bottom: margin,
		left: margin,
		right: margin,
		top: margin,
	},
};

test("cover-letter", async ({ page }) => {
	await page.goto("/");
	await page.pdf({
		...opts,
		path: pdfLoc("cover-letter"),
		pageRanges: "1",
	});
});

test("resume", async ({ page }) => {
	await page.goto("/");
	await page.pdf({
		...opts,
		path: pdfLoc("resume"),
		pageRanges: "2-3",
	});
});

test("bundle", async ({ page }) => {
	await page.goto("/");
	await page.pdf({
		...opts,
		path: pdfLoc("bundle"),
	});
});
