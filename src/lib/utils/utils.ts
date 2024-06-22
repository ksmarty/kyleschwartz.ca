import { isFuture, parse } from "date-fns";

export const future = (end: string) => isFuture(parse(end, "MMM yyyy", new Date()));

export const kebab = (str: string) =>
	str
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replace(" ", "-");

// https://stackoverflow.com/a/10284006
export const zip = (rows: string[][]) => rows[0].map((_, c) => rows.map((row) => row[c]));
