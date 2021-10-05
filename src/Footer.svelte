<script>
	import { Github, Twitter } from "@icons-pack/svelte-simple-icons";
</script>

<footer
	class="footer grid-flow-col items-center p-4 mt-6 bg-neutral text-neutral-content rounded-box"
>
	<div class="items-center grid-flow-col">
		<img class="w-10" src="favicon.svg" alt="Kyle Schwartz Logo" />
		<div class="divider divider-vertical mx-0" />
		<p class="">
			© {new Date().getFullYear()} Kyle Schwartz
		</p>
	</div>
	<div class="grid-flow-col place-self-center justify-self-end">
		<a
			class="btn btn-square btn-ghost"
			href="https://github.com/ksmarty"
			target="_blank"
		>
			<Github />
		</a>
		<a
			class="btn btn-square btn-ghost"
			href="https://twitter.com/_KyleJS"
			target="_blank"
		>
			<Twitter />
		</a>
	</div>
</footer>

<style>
	footer {
		grid-auto-flow: column !important;
	}
</style>
