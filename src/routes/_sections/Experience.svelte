<script lang="ts">
	import Time from "$components/Time.svelte";
	import { experience } from "$lib/Content.yaml";
	import { zip } from "$lib/utils/utils";
</script>

<div id="Experience">
	<div class="divider text-3xl mb-8">Experience</div>
	<div class="flex flex-wrap -mx-2 overflow-hidden md:-mx-3">
		{#each experience as { start, end, title, location, description }, index}
			{@const roles = [...zip([start, title])].reverse()}

			<div
				class="my-2 px-2 overflow-hidden md:my-3 md:px-3 {index === 0 ? 'md:w-full' : 'md:w-1/2'}"
			>
				<div class="card text-center border-2 border-base-100 h-full">
					<div class="card-body p-5 lg:p-8">
						<div>
							{#each roles as [rStart, rTitle], index}
								<div class="text-sm text-base-content text-opacity-60">
									<Time start={rStart} end={end || roles[index - 1]?.[0]} offsetEnd={!!index} />
								</div>
								<h2 class="card-title block text-2xl text-secondary mb-1">
									{rTitle}
								</h2>
							{/each}
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
