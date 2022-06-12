<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	const headers = [
		"About Me",
		"Experience",
		"Portfolio",
		"Education",
		"Certifications",
		"Contact",
	];

	let currentHeader: string;

	const getCurrentHeader = () =>
		headers.forEach((header) => {
			const docScrollTop =
				document.getElementsByTagName("html")[0].scrollTop;
			const headerRef = document.getElementById(header);
			const offset = 108;

			if (
				headerRef &&
				headerRef.offsetTop - offset <= docScrollTop &&
				headerRef.offsetTop - offset + headerRef?.offsetHeight >
					docScrollTop &&
				currentHeader !== header
			) {
				currentHeader = header;
			}

			if (
				window.scrollY + window.innerHeight + offset >=
				document.body.scrollHeight
			) {
				currentHeader = headers[headers.length - 1];
			}
		});

	onMount(() => getCurrentHeader());

	window.onscroll = () => getCurrentHeader();
</script>

<div class="container z-10 sticky top-0 pt-5 max-w-none">
	<div class="navbar shadow-lg bg-neutral text-neutral-content rounded-box">
		<div class="flex-none lg:hidden">
			<div class="dropdown dropdown-hover">
				<button tabindex="0" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
				<ul
					transition:fade={{ duration: 100 }}
					tabindex="0"
					class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
				>
					{#each headers as name}
						<li class:text-secondary={name === currentHeader}>
							<a href="#{name}">
								{name}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="px-2 mx-2 justify-start w-full lg:w-1/2">
			<span class="text-lg font-bold"> Kyle Schwartz </span>
		</div>
		<div class="hidden px-2 mx-2 navbar-center lg:flex">
			<div class="flex items-stretch">
				{#each headers as name}
					<button
						class:text-secondary={name === currentHeader}
						class="btn btn-ghost btn-sm rounded-btn transition-color duration-300"
					>
						<a href="#{name}">{name}</a>
					</button>
				{/each}
			</div>
		</div>
		<div class="w-0 lg:w-1/2 justify-end" />
	</div>
</div>

<style>
	:global(html) {
		scroll-padding-top: 6.5rem;
	}

	@media (min-width: 1024px) {
		:global(html) {
			scroll-padding-top: 6.75rem;
		}
	}

	.container {
		background: linear-gradient(to bottom, #16181d 50%, transparent 50%);
	}
</style>
