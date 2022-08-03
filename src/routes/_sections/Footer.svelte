<script>
	import { Icon } from '@steeze-ui/svelte-icon';

	const git = {
		default: {
			a: {
				fill: 'rgb(102, 199, 255)',
				viewBox: '0 0 24 24',
				stroke: 'currentColor',
				'aria-hidden': 'true',
			},
			path: [
				{
					'stroke-linecap': 'round',
					'stroke-linejoin': 'round',
					'stroke-width': '0',
					d: 'M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187',
				},
			],
		},
	};

	const github = {
		default: {
			a: {
				fill: 'white',
				viewBox: '0 0 24 24',
				stroke: 'currentColor',
				'aria-hidden': 'true',
			},
			path: [
				{
					'stroke-linecap': 'round',
					'stroke-linejoin': 'round',
					'stroke-width': '0',
					d: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
				},
			],
		},
	};
</script>

<footer
	class="footer bg-base-200 grid-cols-1 md:grid-cols-3 items-center gap-y-2 p-4 mt-6 bg-neutral text-neutral-content rounded-box justify-items-center md:justify-items-start"
>
	<div class="items-center justify-items-center md:grid-flow-col font-bold md:font-normal">
		<img class="w-10" src="favicon.svg" alt="Kyle Schwartz Logo" />
		<div class="hidden md:flex mx-2 w-[0.125rem] h-full bg-neutral-content" />
		<p>
			© {new Date().getFullYear()} Kyle Schwartz
		</p>
	</div>
	<div class="md:place-self-center">
		<a
			class="flex items-center link link-hover text-info"
			href="https://github.com/ksmarty/kyleschwartz.ca"
			target="_blank"
		>
			This website is open source!
			<span class="ml-2 flex">
				<Icon src={git} class="w-6 h-6" />
			</span>
		</a>
	</div>
	<div class="grid-flow-col md:justify-self-end hidden md:block">
		<a class="btn btn-square btn-ghost" href="https://github.com/ksmarty" target="_blank">
			<Icon src={github} class="w-6 h-6" />
		</a>
		<!-- <a class="btn btn-square btn-ghost" href="https://twitter.com/_KyleJS" target="_blank">
			<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<title>Twitter</title>
				<path
					d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
				/>
			</svg>
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
