<script>
	import Avatar from "./Avatar.svelte";
	import { home } from "./Content.yaml";
</script>

<div
	id="About"
	class="flex flex-col space-y-6 w-full lg:space-y-0 lg:space-x-10 lg:flex-row lg:mx-auto lg:w-auto mb-6"
>
	<div class="card my-auto">
		<Avatar />
	</div>
	<div class="flex flex-col lg:max-w-prose">
		<!-- <div class="card bordered shadow-lg bg-base-100 mb-2 md:mb-4">
			<div class="card-body p-5 lg:pl-8">
				<h2 class="card-title text-xl md:text-3xl mb-0">About Me</h2>
			</div>
		</div> -->
		<div class="divider text-3xl mb-8">About Me</div>
		<div
			class="card shadow-lg border-2 border-base-100 text-base-content text-opacity-80 md:text-lg"
		>
			<div class="card-body p-5 lg:p-8">
				<p>
					{home}
				</p>
			</div>
		</div>
	</div>
</div>

<style>
</style>
