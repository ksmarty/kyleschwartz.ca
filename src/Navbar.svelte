<script lang="ts">
	import { fade } from "svelte/transition";

	const headers = [
		"About Me",
		"Experience",
		"Portfolio",
		"Education",
		"Awards",
		"Contact",
	];
</script>

<div class="navbar mb-6 shadow-lg bg-neutral text-neutral-content rounded-box">
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
					<li>
						<a href="#{name}">{name}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="px-2 mx-2 navbar-start">
		<span class="text-lg font-bold"> Kyle Schwartz </span>
	</div>
	<div class="hidden px-2 mx-2 navbar-center lg:flex">
		<div class="flex items-stretch">
			{#each headers as name}
				<button class="btn btn-ghost btn-sm rounded-btn">
					<a href="#{name}">{name}</a>
				</button>
			{/each}
		</div>
	</div>
	<div class="navbar-end" />
</div>

<style>
	/* .navbar {
		height: min-content;
	} */
</style>
