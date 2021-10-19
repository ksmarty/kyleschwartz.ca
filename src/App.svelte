<script lang="ts">
	import Awards from "./Awards.svelte";
	import Education from "./Education.svelte";
	import Experience from "./Experience.svelte";
	import Footer from "./Footer.svelte";
	import Home from "./Home.svelte";
	import Navbar from "./Navbar.svelte";
	import Portfolio from "./Portfolio.svelte";
	import Resume from "./Resume.svelte";
	import Tailwind from "./Tailwind.svelte";
</script>

<main class="min-h-screen p-3 lg:p-5 flex flex-col print:hidden">
	<Tailwind />
	<Navbar />
	<Home />
	<div class="flex flex-col gap-y-3 lg:gap-y-5 lg:px-24">
		<Experience />
		<Portfolio />
		<Education />
		<Awards />
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

	@media print {
		html {
			background: none;
		}
	}
</style>
