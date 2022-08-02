<script lang="ts">
	import content from '$lib/Content.yaml';

	import {
		AcademicCap,
		Chip,
		DesktopComputer,
		DocumentReport,
		Fire,
		PresentationChartLine,
		UserGroup,
	} from '@steeze-ui/heroicons';

	import { Icon } from '@steeze-ui/svelte-icon';
	import Modal from '../_components/Modal.svelte';

	const icons = {
		AcademicCap,
		Chip,
		DesktopComputer,
		DocumentReport,
		Fire,
		PresentationChartLine,
		UserGroup,
	};

	const { certs } = content;

	const accessIcon = (icon: string) => icon as keyof typeof icons;

	const colors = (i: number) => ['primary', 'secondary', 'accent'][i % 3];
</script>

<div id="Certifications">
	<!-- prettier-ignore -->
	<div class="divider text-3xl mb-8 whitespace-pre-line sm:whitespace-normal text-center h-20 sm:h-auto">
		Awards 
		&
		Certifications
	</div>
	<div class="flex flex-wrap -mx-2 overflow-hidden md:-mx-3">
		{#each certs as { title, description, icon, cert, badge, url, issuer }, index}
			<div class="my-2 px-2 w-full overflow-hidden md:my-3 md:px-3 md:w-1/2 flex-grow">
				<div class="card compact side overflow-visible bg-base-300 h-full border-2 border-base-100">
					<div class="flex-row items-center space-x-4 card-body">
						<div class="">
							<div
								class:cert-badge={badge && url}
								class="w-12 h-12 justify-center transition-all text-{colors(index)}"
							>
								{#if icons[accessIcon(icon)]}
									<Icon src={icons[accessIcon(icon)]} />
								{:else if badge && url}
									<img src="/badges/{badge}" alt="{title} badge" />
								{/if}
							</div>
						</div>
						<div>
							<h2 class="card-title text-{colors(index)}">
								{title}
							</h2>
							<div class="">
								{#if !cert}
									<p class="text-base-content text-opacity-80">
										{description}
									</p>
									{#if url}
										<a
											href={url}
											target="_blank"
											class="btn btn-outline btn-{colors(index)} btn-sm mt-3"
										>
											View Certificate
										</a>
									{/if}
								{:else}
									<Modal {issuer} {index} {cert} />
								{/if}
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

	.cert-badge:hover {
		z-index: 10;
		transform: scale(2.5) translate(0.5rem);
	}
</style>
