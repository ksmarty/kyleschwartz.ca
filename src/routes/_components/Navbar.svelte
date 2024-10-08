<script lang="ts">
	import { onMount } from "svelte";

	const headers = ["About Me", "Experience", "Portfolio", "Education", "Certifications", "Contact"];

	let currentHeader: string,
		isDropdownOpen = false,
		dropdownVisibility = "none",
		dropdownOpacity = 0;

	const getCurrentHeader = () => {
		headers.forEach((header) => {
			const docScrollTop = document.getElementsByTagName("html")[0].scrollTop;
			const headerRef = document.getElementById(header);
			const offset = 108;

			if (
				headerRef &&
				headerRef.offsetTop - offset <= docScrollTop &&
				headerRef.offsetTop - offset + headerRef?.offsetHeight > docScrollTop &&
				currentHeader !== header
			) {
				currentHeader = header;
			}

			if (window.scrollY + window.innerHeight + offset >= document.body.scrollHeight) {
				currentHeader = headers[headers.length - 1];
			}
		});

		dropdownHide();
	};

	onMount(() => {
		getCurrentHeader();
		window.onscroll = () => getCurrentHeader();
	});

	// @ts-ignore
	const dropdownLostFocus = ({ relatedTarget, currentTarget }) => {
		if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return;
		dropdownHide();
	};

	const dropdownToggle = () => (isDropdownOpen = !isDropdownOpen);
	const dropdownHide = () => (isDropdownOpen = false);

	$: {
		if (isDropdownOpen) {
			dropdownVisibility = "flex";
			setTimeout(() => (dropdownOpacity = 1), 5);
		} else {
			setTimeout(() => (dropdownVisibility = "none"), 150);
			dropdownOpacity = 0;
		}
	}
</script>

<div class="container z-50 sticky top-0 pt-5 max-w-none">
	<div class="navbar bg-base-100 rounded-box">
		<div class="flex-none lg:hidden">
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div class="dropdown" on:focusout={dropdownLostFocus} on:mouseleave={dropdownLostFocus}>
				<button class="btn btn-square btn-ghost" on:click={dropdownToggle}>
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
					style:display={dropdownVisibility}
					style:opacity={dropdownOpacity}
					class="p-2 menu dropdown-content bg-base-100 rounded-box w-52 transition-all"
				>
					{#each headers as name}
						<li class:text-secondary={name === currentHeader}>
							<button
								class="rounded-xl"
								on:click={() => document.getElementById(name)?.scrollIntoView()}
							>
								{name}
							</button>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="px-2 mx-2 justify-start w-full lg:w-1/2">
			<span id="navbarName" class="text-lg font-bold"> Kyle Schwartz </span>
		</div>
		<div class="hidden px-2 mx-2 navbar-center lg:flex">
			<div class="flex items-stretch">
				{#each headers as name}
					<a href="#{name}">
						<button
							class:text-secondary={name === currentHeader}
							class="btn btn-ghost btn-sm rounded-btn transition-color duration-300"
						>
							{name}
						</button>
					</a>
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
		background: linear-gradient(to bottom, rgb(25, 29, 36) 50%, transparent 50%);
	}

	.btn-ghost:focus and :not(.btn-ghost:hover) {
		box-shadow: none !important;
		background: transparent !important;
	}

	@media (pointer: coarse) {
		.btn-ghost:focus {
			box-shadow: none !important;
			background: transparent !important;
		}
	}
</style>
