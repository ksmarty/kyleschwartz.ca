<script lang="ts">
	import Time from "$components/Time.svelte";
	import { education } from "$lib/Content.yaml";
</script>

<div id="Education">
	<div class="divider text-3xl mb-8">Education</div>
	<div class="flex flex-wrap -mx-2 overflow-hidden md:-mx-3">
		{#each education as { start, end, degree, location }}
			<div class="my-2 px-2 w-full overflow-hidden md:my-3 md:px-3 md:w-1/2 flex-grow">
				<div class="card text-center border-2 border-base-100 h-full">
					<div class="card-body">
						<div class="my-auto">
							{#each start as startDate}
								<div class="text-sm mb-2 text-base-content text-opacity-60">
									<Time start={startDate} {end} />
								</div>
							{/each}
							<h2 class="block card-title text-2xl text-primary mb-3">
								{degree}
							</h2>
							<div class="text-base-content text-opacity-90">
								{location}
							</div>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
