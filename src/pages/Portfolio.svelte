<script>
	import {
		CloudUpload,
		Cube,
		DocumentDuplicate,
		DocumentText,
		Refresh,
		SwitchHorizontal,
	} from "svelte-hero-icons";
	import Icon from "svelte-hero-icons/Icon.svelte";
	import { portfolio } from "../Content.yaml";

	const icons = {
		DocumentDuplicate,
		DocumentText,
		SwitchHorizontal,
		Cube,
		Refresh,
		CloudUpload,
	};

	const colors = (i) => ["info", "success", "error", "warning"][i % 4];
</script>

<div id="Portfolio">
	<div class="divider text-3xl mb-8">Portfolio</div>
	<div class="flex flex-wrap -mx-2 lg:-mx-3">
		{#each portfolio as { title, description, icon, github, demo }, index}
			<div class="my-2 px-2 w-full md:w-1/2 lg:my-3 lg:px-3 lg:w-1/3">
				<div
					class="card text-center shadow-2xl h-full border-2 border-base-100"
				>
					<figure
						class="px-10 pt-10 w-20 h-20 lg:w-24 lg:h-24 text-{colors(
							index
						)}"
					>
						<Icon src={icons[icon]} />
					</figure>
					<div class="card-body">
						<h2 class="card-title">{title}</h2>
						<p class="mb-auto text-base-content text-opacity-80">
							{description}
						</p>
						<div class="justify-center card-actions">
							<button class="btn btn-outline btn-secondary flex-1"
								><a href={github} target="_blank">GitHub</a
								></button
							>
							{#if demo}
								<button
									class="btn btn-outline btn-accent flex-1"
									><a href={demo} target="_blank">Demo</a
									></button
								>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.divider::after,
	.divider::before {
		@apply bg-base-100;
	}
</style>
