/* Use this file to declare any custom file extensions for importing */
/* Use this folder to also add/extend a package d.ts file, if needed. */

// declare module "*.yaml";
declare module "@icons-pack/svelte-simple-icons";
declare module "svelte-pdf";

interface Portfolio {
	title: string;
	description: string;
	icon: string;
	link: string;
	demo: string;
}

declare module "*/Content.yaml" {
	const certs: {
		title: string;
		description: string;
		icon: string;
		cert: string;
		badge: string;
		url: string;
		issuer: string;
	}[];

	const education: {
		timeperiod: string;
		degree: string;
		location: string;
	}[];

	const experience: {
		timeperiod: string;
		title: string;
		location: string;
		description: string;
	}[];

	const home: string;

	const portfolio: {
		title: string;
		description: string;
		icon: string;
		link: string;
		demo: string;
	}[];

	const volunteer: {
		timeperiod: string;
		title: string;
		location: string;
		description: string;
	}[];

	export { certs, education, experience, home, portfolio, volunteer };
}

/* CSS MODULES */
declare module "*.module.css" {
	const classes: { [key: string]: string };
	export default classes;
}
declare module "*.module.scss" {
	const classes: { [key: string]: string };
	export default classes;
}
declare module "*.module.sass" {
	const classes: { [key: string]: string };
	export default classes;
}
declare module "*.module.less" {
	const classes: { [key: string]: string };
	export default classes;
}
declare module "*.module.styl" {
	const classes: { [key: string]: string };
	export default classes;
}

/* CSS */
declare module "*.css";
declare module "*.scss";
declare module "*.sass";
declare module "*.less";
declare module "*.styl";

/* IMAGES */
declare module "*.svg" {
	const ref: string;
	export default ref;
}
declare module "*.bmp" {
	const ref: string;
	export default ref;
}
declare module "*.gif" {
	const ref: string;
	export default ref;
}
declare module "*.jpg" {
	const ref: string;
	export default ref;
}
declare module "*.jpeg" {
	const ref: string;
	export default ref;
}
declare module "*.png" {
	const ref: string;
	export default ref;
}

/* CUSTOM: ADD YOUR OWN HERE */
