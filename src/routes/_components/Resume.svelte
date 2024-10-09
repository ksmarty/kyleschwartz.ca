<script lang="ts">
	import Time from "$components/Time.svelte";
	import content from "$lib/Content.yaml";
	import { zip } from "$lib/utils/utils";
	import { ArrowTopRightOnSquare, Envelope, Link } from "@steeze-ui/heroicons";
	import { Icon } from "@steeze-ui/svelte-icon";

	const { certs, education, experience, home, portfolio } = content;

	const topLinks = [
		{
			link: "mailto:kyle@kyleschwartz.ca",
			icon: Envelope,
			text: "kyle@kyleschwartz.ca",
		},
		{
			link: "https://kyleschwartz.ca",
			icon: Link,
			text: "kyleschwartz.ca",
		},
	];
</script>

<div id="Resume" data-theme="light" class="hidden print:block text-base-content font-light">
	<div class="mb-6">
		<div class="flex justify-between mb-4">
			<h1 class="text-4xl font-bold">Kyle Schwartz</h1>

			<div class="flex flex-col justify-between">
				{#each topLinks as { link, icon, text }}
					<a
						class="flex justify-end items-center link link-hover"
						href={link}
						rel="noreferrer"
						target="_blank"
					>
						{text}
						<figure class="flex w-6 ml-2">
							<Icon src={icon} />
						</figure>
					</a>
				{/each}
			</div>
		</div>

		<h2 class="header">About Me</h2>
		<div class="divider" />

		<p class="text-justify text-sm">
			{home}
		</p>
	</div>

	<div class="flex flex-wrap space-x-8">
		<div class="flex flex-col flex-1 space-y-6">
			<!-- Experience -->
			<div class="space-y-2">
				<div>
					<h2 class="header">Experience</h2>
					<div class="divider" />
				</div>
				{#each experience as { title, start, end, description, location }}
					{@const [company, city] = location.split(", ")}
					{@const roles = [...zip([start, title])].reverse()}

					<div class="content-node">
						<h3 class="text-lg font-medium text-primary">
							<span>{company}</span>
							<span class="float-right">
								{city}
							</span>
						</h3>
						<div class="space-y-2">
							{#each roles as [rStart, rTitle], index}
								<div>
									<h4 class="text-xs font-medium opacity-70">
										{rTitle}
									</h4>
									<h4 class="text-xs font-medium opacity-70">
										<Time start={rStart} end={end || roles[index - 1]?.[0]} />
									</h4>
								</div>
							{/each}
						</div>
						<p class="text-sm text-justify mt-1">
							{description}
						</p>
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
						<h3 class="text-lg font-medium text-primary">
							{degree}
						</h3>
						{#each start as startDate}
							<h4 class="text-xs opacity-75">
								<Time start={startDate} {end} />
							</h4>
						{/each}
						<h4 class="text-sm">{location}</h4>
					</div>
				{/each}
			</div>
		</div>

		<div class="flex flex-col flex-1 space-y-6">
			<!-- Certs -->
			<div class="space-y-2">
				<div>
					<h2 class="header">Certifications</h2>
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
								<Icon src={ArrowTopRightOnSquare} />
							</span>
						</a>
						<h4 class="text-sm">{description}</h4>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	h2.header {
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
