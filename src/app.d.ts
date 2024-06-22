/// <reference types="@sveltejs/kit" />

declare module "@icons-pack/svelte-simple-icons";
declare module "svelte-pdf";
declare module "daisyui";

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
		icon: string;
		issuer: string;
		date: string;
		description: string;
		cred: string | number;
		cert: string;
		badge: string;
		url: string;
	}[];

	const education: {
		start: string[];
		end: string;
		degree: string;
		location: string;
	}[];

	const experience: {
		start: string[];
		end: string;
		title: string[];
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
		start: string[];
		end: string;
		title: string;
		location: string;
		description: string;
	}[];

	const cover: string;

	export { certs, cover, education, experience, home, portfolio, volunteer };
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}
