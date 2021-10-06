<script lang="ts">
	import Awards from "./Awards.svelte";
	import Education from "./Education.svelte";
	import Footer from "./Footer.svelte";
	import Home from "./Home.svelte";
	import Navbar from "./Navbar.svelte";
	import Portfolio from "./Portfolio.svelte";
	import Tailwind from "./Tailwind.svelte";
	import Experience from "./Experience.svelte";

	// Other
	let page = "Home";
</script>

<Tailwind />
<main class="min-h-screen p-3 md:p-5 flex flex-col">
	<Navbar bind:page />
	<div class="flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
		<!-- {#if page === "Home"} -->
		<Home />
		<!-- {:else if page === "Portfolio"} -->
		<Portfolio />
		<!-- {:else if page === "Awards"} -->
		<Awards />
		<!-- {:else if page === "Education"} -->
		<Education />
		<!-- {:else if page === "Experience"} -->
		<Experience />
		<!-- {/if} -->
	</div>
	<Footer />
</main>

<style global>
	html {
		-webkit-tap-highlight-color: transparent;
		@apply text-base-content;
		@apply bg-base-300;

		/* Hide Scrollbar */
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	/* Hide scrollbar for Chrome, Safari and Opera */
	html::-webkit-scrollbar {
		display: none;
	}
</style>
