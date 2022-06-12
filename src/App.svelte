<script lang="ts">
	import Certs from "./pages/Certs.svelte";
	import Education from "./pages/Education.svelte";
	import Experience from "./pages/Experience.svelte";
	import Footer from "./pages/Footer.svelte";
	import Home from "./pages/Home.svelte";
	import Navbar from "./pages/Navbar.svelte";
	import Portfolio from "./pages/Portfolio.svelte";
	import Contact from "./pages/Contact.svelte";

	import Tailwind from "./components/Tailwind.svelte";
	import Resume from "./components/Resume.svelte";
</script>

<main class="min-h-screen p-3 lg:p-5 flex flex-col print:hidden">
	<Tailwind />
	<Navbar />
	<Home />
	<div class="flex flex-col gap-y-3 lg:gap-y-5 lg:px-24">
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
