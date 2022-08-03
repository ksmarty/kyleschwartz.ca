<script>
	import content from '$lib/Content.yaml';
	import { Download } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import Avatar from '../_components/Avatar.svelte';

	const { home } = content;
</script>

<div
	id="About Me"
	class="flex flex-col space-y-6 w-full lg:space-y-0 lg:space-x-6 xl:space-x-10 lg:flex-row lg:mx-auto lg:w-auto my-6"
>
	<div class="card my-auto">
		<Avatar />
	</div>
	<div class="flex flex-col lg:max-w-lg 2xl:max-w-xl">
		<div class="divider text-3xl mb-8">About Me</div>
		<div class="card border-2 border-base-100 text-neutral-content text-opacity-80 md:text-lg">
			<div class="card-body p-5 lg:p-8 space-y-4">
				<p class="text-justify">
					{home}
				</p>
				<div class="flex flex-row space-x-4">
					<a
						href="./static/resume.pdf"
						download="Kyle Schwartz - Resume.pdf"
						class="btn btn-outline btn-primary flex-grow md:flex-1 flex flex-row px-0"
					>
						<span class="ml-2 md:ml-4 mr-2">Resumé</span>
						<Icon class="h-6 w-6" src={Download} />
					</a>
					<a
						href="./static/cover-letter.pdf"
						download="Kyle Schwartz - Cover Letter.pdf"
						class="btn btn-outline btn-accent flex-grow md:flex-1 flex flex-row px-0"
					>
						<span class="ml-2 md:ml-4 mr-2">Cover Letter</span>
						<Icon class="h-6 w-6" src={Download} />
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.divider::after,
	.divider::before {
		@apply bg-base-100;
	}
</style>
