<script>
	import {
		Cube,
		DocumentDuplicate,
		DocumentText,
		Refresh,
		SwitchHorizontal,
	} from "svelte-hero-icons";
	import Icon from "svelte-hero-icons/Icon.svelte";
	import { portfolio } from "./Content.yaml";

	const icons = {
		DocumentDuplicate,
		DocumentText,
		SwitchHorizontal,
		Cube,
		Refresh,
	};
</script>

{#each portfolio as { title, description, icon, github, demo }}
	<div class="card text-center shadow-2xl">
		<figure class="px-10 pt-10 w-24 h-24">
			<Icon src={icons[icon]} />
		</figure>
		<div class="card-body">
			<h2 class="card-title">{title}</h2>
			<p>
				{description}
			</p>
			<div class="justify-center card-actions">
				<button class="btn btn-outline btn-secondary flex-1"
					><a href={github} target="_blank">GitHub</a></button
				>
				{#if demo}
					<button class="btn btn-outline btn-accent flex-1"
						><a href={demo} target="_blank">Demo</a></button
					>
				{/if}
			</div>
		</div>
	</div>
{/each}

<style>
	.card {
		height: min-content;
	}
</style>
