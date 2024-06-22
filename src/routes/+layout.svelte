<script lang="ts">
	import "$lib/css/app.css";

	import Navbar from "./_components/Navbar.svelte";
	import Resume from "./_components/Resume.svelte";
	import Footer from "./_sections/Footer.svelte";
</script>

<main class="min-h-screen p-3 lg:p-5 flex flex-col !pt-0 print:hidden">
	<Navbar />
	<slot />
	<Footer />
</main>

<Resume />

<style global>
	html {
		/* Smooth scrolling */
		scroll-behavior: smooth;
	}

	main {
		-webkit-tap-highlight-color: transparent;
		@apply text-primary-content;
		@apply bg-neutral;

		/* Hide Scrollbar */
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	/* Hide scrollbar for Chrome, Safari and Opera */
	html::-webkit-scrollbar {
		display: none;
	}

	.card.compact .card-title {
		margin-bottom: 0.25rem;
	}

	.card-title {
		margin-bottom: 0.75rem;
		display: block;
	}

	@media print {
		html {
			background: none;
		}
	}

	.divider::after,
	.divider::before {
		@apply bg-base-100;
	}
</style>
