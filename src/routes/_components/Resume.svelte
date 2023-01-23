<script lang="ts">
	import content from "$lib/Content.yaml";
	import { ExternalLink, Link, Mail, Phone } from "@steeze-ui/heroicons";
	import { Icon } from "@steeze-ui/svelte-icon";
	import Time from "$components/Time.svelte";

	const { certs, cover, education, experience, home, portfolio, volunteer } = content;

	const coverSplit = cover.split("\n");

	const topLinks = [
		{
			link: "mailto:kyle@kyleschwartz.ca",
			icon: Mail,
			text: "kyle@kyleschwartz.ca",
		},
		{
			link: "tel:647-772-7222",
			icon: Phone,
			text: "(647) 772-7222",
		},
		{
			link: "https://kyleschwartz.ca",
			icon: Link,
			text: "kyleschwartz.ca",
		},
	];
</script>

<div
	id="Cover"
	data-theme="light"
	class="hidden print:block text-base-content break-after-page space-y-4"
>
	<h1 class="text-5xl mb-8 font-bold text-base-content">Kyle Schwartz</h1>

	<div class="flex justify-between text-primary">
		{#each topLinks as { link, icon, text }}
			<a class="flex items-center link link-hover" href={link} rel="noreferrer" target="_blank">
				<figure class="flex w-6 mr-1">
					<Icon src={icon} />
				</figure>
				{text}
			</a>
		{/each}
	</div>

	<div class="divider" />

	<div class="text-justify text-sm space-y-2 m-auto p-12">
		{#each coverSplit as para, i}
			<p class="first:font-bold last:font-bold" class:indent-8={i && i < coverSplit.length - 2}>
				{para}
			</p>
		{/each}
	</div>
</div>

<div id="Resume" data-theme="light" class="hidden print:block text-base-content">
	<div class="mb-6">
		<h1 class="text-5xl mb-6 font-bold">Kyle Schwartz</h1>

		<div class="flex justify-between mb-4">
			{#each topLinks as { link, icon, text }}
				<a class="flex items-center link link-hover" href={link} rel="noreferrer" target="_blank">
					<figure class="flex w-6 mr-1">
						<Icon src={icon} />
					</figure>
					{text}
				</a>
			{/each}
		</div>

		<h2>About Me</h2>
		<div class="divider" />

		<p class="text-justify text-sm">
			{home}
		</p>
	</div>

	<div class="flex flex-wrap space-x-8">
		<div class="flex flex-col flex-1 space-y-8">
			<!-- Experience -->
			<div class="space-y-2">
				<div>
					<h2 class="header">Experience</h2>
					<div class="divider" />
				</div>
				{#each experience as { title, start, end, description, location }}
					{@const [company, city] = location.split(", ")}
					<div class="content-node">
						<h3 class="text-lg font-medium text-primary">
							<span>{company}</span>
							<span class="float-right">
								{city}
							</span>
						</h3>
						<h4 class="text-xs font-medium opacity-70">
							{title}
						</h4>
						<h4 class="text-xs font-medium opacity-70">
							<Time {start} {end} />
						</h4>
						<p class="text-sm text-justify mt-1">
							{description}
						</p>
					</div>
				{/each}
			</div>

			<!-- Portfolio -->
			<div class="space-y-2">
				<div>
					<h2 class="header">Portfolio</h2>
					<div class="divider" />
				</div>
				{#each portfolio as { title, description, link }}
					<div class="content-node">
						<a
							href={link}
							rel="noreferrer"
							class="flex items-center link link-hover text-lg font-medium text-primary"
							target="_blank"
						>
							{title}
							<span class="flex w-4 ml-1">
								<Icon src={ExternalLink} />
							</span>
						</a>
						<h4 class="text-sm">{description}</h4>
					</div>
				{/each}
			</div>

			<!-- Education -->
			<div class="space-y-2">
				<div>
					<h2 class="header">Education</h2>
					<div class="divider" />
				</div>
				{#each education as { start, end, degree, location }}
					<div class="content-node">
						{#each degree.split(", ") as part, i}
							<h3 class="text-lg font-medium text-primary">
								{part}{!i && degree.split(", ").length > 1 ? "," : ""}
							</h3>
						{/each}
						<h4 class="text-xs opacity-75">
							<Time {start} {end} />
						</h4>
						<h4 class="text-sm">{location}</h4>
					</div>
				{/each}
			</div>
		</div>

		<div class="flex flex-col flex-1 space-y-8">
			<!-- Certs -->
			<div class="space-y-2">
				<div>
					<h2 class="header">Awards & Certifications</h2>
					<div class="divider" />
				</div>
				{#each certs as { title, description, issuer, date, cred, cert }}
					<div class="content-node">
						<h3 class="text-lg font-medium text-primary">
							{title}
						</h3>
						<h4 class="text-xs opacity-70">
							{issuer}
							{#if cred}
								| Cert ID:
								{#if cert}
									<a
										class="link"
										target="_blank"
										rel="noreferrer"
										href="https://kyleschwartz.ca/static/{cert}.pdf"
									>
										{cred}
									</a>
								{:else}
									{cred}
								{/if}
							{/if}
							| {date}
						</h4>
						<p class="text-sm mt-1 text-justify">
							{!cred ? description : ""}
						</p>
					</div>
				{/each}
			</div>

			<!-- Volunteer -->
			<div class="space-y-2">
				<div>
					<h2 class="header">Volunteer Work</h2>
					<div class="divider" />
				</div>
				{#each volunteer as { title, description, start, end, location }, i}
					<div class="content-node">
						<h3 class="text-lg font-medium text-primary">
							{title}
						</h3>
						<h4 class="text-xs font-medium opacity-70">
							{location}
						</h4>
						<h4 class="text-xs font-medium opacity-70">
							<Time {start} {end} />
						</h4>
						<p class="text-sm text-justify mt-1">
							{description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	h2 {
		@apply text-primary text-xl font-semibold uppercase;
	}

	.divider::after,
	.divider::before {
		@apply bg-primary opacity-10;
	}

	.divider {
		@apply border-t border-primary h-0 opacity-10 -mt-0 mb-1;
	}

	.content-node {
		break-inside: avoid;
		-webkit-break-inside: avoid;
	}
</style>
