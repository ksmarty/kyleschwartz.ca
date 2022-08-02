<script lang="ts">
	import Resume from './_components/Resume.svelte';
	import Tailwind from './_components/Tailwind.svelte';
	import Certs from './_sections/Certs.svelte';
	import Contact from './_sections/Contact.svelte';
	import Education from './_sections/Education.svelte';
	import Experience from './_sections/Experience.svelte';
	import Footer from './_sections/Footer.svelte';
	import Home from './_sections/Home.svelte';
	import Navbar from './_sections/Navbar.svelte';
	import Portfolio from './_sections/Portfolio.svelte';
</script>

<main class="min-h-screen p-3 lg:p-5 flex flex-col print:hidden">
	<Tailwind />
	<Navbar />
	<div class="flex flex-col gap-y-3 lg:gap-y-5 md:px-12 lg:px-24 xl:px-48 2xl:px-64">
		<Home />
		<Experience />
		<Portfolio />
		<Education />
		<Certs />
		<Contact />
	</div>
	<Footer />
</main>

<Resume />

<style global>
	html {
		-webkit-tap-highlight-color: transparent;
		@apply text-base-content;
		@apply bg-base-300;

		/* Hide Scrollbar */
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */

		/* Smooth scrolling */
		scroll-behavior: smooth;
	}

	/* Hide scrollbar for Chrome, Safari and Opera */
	html::-webkit-scrollbar {
		display: none;
	}

	main {
		padding-top: 0% !important;
	}

	@media print {
		html {
			background: none;
		}
	}
</style>
