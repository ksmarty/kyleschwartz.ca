<script lang="ts">
	import content from '$lib/Content.yaml';
	import {
		Calendar,
		CloudUpload,
		Cube,
		DocumentDuplicate,
		DocumentText,
		Refresh,
	} from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';

	const icons = {
		Calendar,
		CloudUpload,
		Cube,
		DocumentDuplicate,
		DocumentText,
		Refresh,
	};

	const { portfolio } = content;

	const colors = (i: number) => ['info', 'success', 'error', 'warning'][i % 4];

	const accessIcon = (icon: string) => icon as keyof typeof icons;
</script>

<div id="Portfolio">
	<div class="divider text-3xl mb-8">Portfolio</div>
	<div class="flex flex-wrap -mx-2 lg:-mx-3">
		{#each portfolio as { title, description, icon, link, demo }, index}
			<div class="my-2 px-2 w-full md:w-1/2 lg:my-3 lg:px-3 lg:w-1/3">
				<div class="card text-center h-full border-2 border-base-100">
					<div class="card-body place-content-between p-4 lg:p-6">
						<div class="flex items-center lg:block">
							<figure class="lg:px-10 lg:pb-4 w-20 h-20 text-{colors(index)}">
								<Icon src={icons[accessIcon(icon)]} />
							</figure>
							<div class="text pl-4 lg:pl-0">
								<h2 class="card-title lg:block mb-3">{title}</h2>
								<p class="mb-auto text-base-content text-opacity-80">
									{description}
								</p>
							</div>
						</div>
						<div class="justify-center card-actions mt-6">
							<a href={link} target="_blank" class="btn btn-outline btn-secondary flex-1">
								GitHub
							</a>
							{#if demo}
								<a href={demo} target="_blank" class="btn btn-outline btn-accent flex-1"> Demo </a>
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

	figure {
		width: 25% !important;
	}
	@media (min-width: 1024px) {
		figure {
			width: unset !important;
		}
	}

	.text {
		width: 75% !important;
	}
	@media (min-width: 1024px) {
		.text {
			width: unset !important;
		}
	}
</style>
