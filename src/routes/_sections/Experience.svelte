<script lang="ts">
	import content from '$lib/Content.yaml';
	const { experience, volunteer } = content;
</script>

<div id="Experience">
	<div class="divider text-3xl mb-8">Experience</div>
	<div class="flex flex-wrap -mx-2 overflow-hidden md:-mx-3">
		{#each [...experience, ...volunteer] as { timeperiod, title, location, description }}
			<div class="my-2 px-2 w-full overflow-hidden md:my-3 md:px-3 md:w-1/2">
				<div class="card text-center border-2 border-base-100 h-full">
					<div class="card-body p-5 lg:p-8">
						<div class="">
							<div class="text-sm text-base-content text-opacity-60">
								{timeperiod}
							</div>
							<h2 class="card-title block text-2xl text-secondary mb-1">
								{title}
							</h2>
							<div class="mb-3 text-primary">
								{location}
							</div>
							<div class="text-justify text-base-content text-opacity-80">
								{description}
							</div>
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
