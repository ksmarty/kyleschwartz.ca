<script>
	import { Git, Github, Twitter } from "@icons-pack/svelte-simple-icons";
</script>

<footer
	class="footer grid-cols-1 md:grid-cols-3 items-center gap-y-2 p-4 mt-6 bg-neutral text-neutral-content rounded-box justify-items-center md:justify-items-start">
	<div
		class="items-center justify-items-center md:grid-flow-col font-bold md:font-normal">
		<img class="w-10" src="favicon.svg" alt="Kyle Schwartz Logo" />
		<div class="hidden md:flex divider divider-vertical mx-0" />
		<p class="">
			© {new Date().getFullYear()} Kyle Schwartz
		</p>
	</div>
	<div class="md:place-self-center">
		<a
			class="flex items-center link link-hover text-info"
			href="https://github.com/ksmarty/kyleschwartz.ca"
			target="_blank">
			This website is open source!
			<span class="ml-2 hidden md:flex"><Git /></span>
		</a>
	</div>
	<div class="grid-flow-col md:justify-self-end">
		<a
			class="btn btn-square btn-ghost"
			href="https://github.com/ksmarty"
			target="_blank">
			<Github />
		</a>
		<!-- <a
			class="btn btn-square btn-ghost"
			href="https://twitter.com/_KyleJS"
			target="_blank"
		>
			<Twitter />
		</a> -->
	</div>
</footer>

<style lang="postcss">
	@screen md {
		footer {
			grid-auto-flow: column !important;
		}
	}
</style>
