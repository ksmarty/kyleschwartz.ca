<script lang="ts">
	import '$lib/css/app.css';
</script>

<slot />

<style global>
	html {
		-webkit-tap-highlight-color: transparent;
		@apply text-primary-content;
		@apply bg-neutral;

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
