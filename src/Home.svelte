<script>
	import { content } from "./content/Home.yaml";
	import Avatar from "./Avatar.svelte";
</script>

<div class="card compact">
	<figure>
		<Avatar />
	</figure>
</div>
<div class="card col-span-1 shadow-lg md:col-span-2 bg-base-100">
	<div class="card-body">
		<h2 class="card-title">About Me</h2>
		<p>
			{content}
		</p>
	</div>
</div>

<style>
	.card {
		height: min-content;
	}
</style>
