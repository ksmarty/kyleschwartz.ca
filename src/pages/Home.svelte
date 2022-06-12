<script>
	import Avatar from "../components/Avatar.svelte";
	import { home } from "../Content.yaml";
</script>

<div
	id="About Me"
	class="flex flex-col space-y-6 w-full lg:space-y-0 lg:space-x-10 lg:flex-row lg:mx-auto lg:w-auto my-6">
	<div class="card my-auto">
		<Avatar />
	</div>
	<div class="flex flex-col lg:max-w-prose">
		<div class="divider text-3xl mb-8">About Me</div>
		<div
			class="card border-2 border-base-100 text-base-content text-opacity-80 md:text-lg">
			<div class="card-body p-5 lg:p-8 space-y-4">
				<p>
					{home}
				</p>
				<div
					class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
					<a
						href="./static/resume.pdf"
						download="Kyle Schwartz - Resume.pdf"
						class="btn btn-outline btn-primary flex-1">
						Download my Resume
					</a>
					<a
						href="./static/cover-letter.pdf"
						download="Kyle Schwartz - Cover Letter.pdf"
						class="btn btn-outline btn-accent flex-1">
						Download my Cover Letter
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
