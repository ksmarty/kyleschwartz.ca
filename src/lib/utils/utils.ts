import { parse, isFuture } from "date-fns";

export const future = (end: string) => isFuture(parse(end, "MMM yyyy", new Date()));

export const kebab = (str: string) =>
	str
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replace(" ", "-");
