<script>
	import { ExternalLink, Link, Mail, Phone } from "svelte-hero-icons";
	import Icon from "svelte-hero-icons/Icon.svelte";
	import {
		awards,
		education,
		experience,
		home,
		portfolio,
		volunteer,
	} from "./Content.yaml";
</script>

<div
	id="Resume"
	data-theme="light"
	class="hidden print:block text-base-content"
>
	<div class="content-node mb-4">
		<h1 class="text-5xl mb-4 font-bold">Kyle Schwartz</h1>

		<div class="flex space-x-4 mb-6">
			<a
				class="flex items-center link link-hover"
				href="mailto:kyle@kyleschwartz.ca"
				target="_blank"
			>
				<figure class="flex w-6 mr-1">
					<Icon src={Mail} />
				</figure>
				kyle@kyleschwartz.ca
			</a>
			<a
				class="flex items-center link link-hover"
				href="tel:647-772-7222"
				target="_blank"
				><figure class="flex w-6 mr-1">
					<Icon src={Phone} />
				</figure>
				(647) 772-7222
			</a>
			<a
				class="flex items-center link link-hover"
				href="https://kyleschwartz.ca"
				target="_blank"
			>
				<figure class="flex w-6 mr-1">
					<Icon src={Link} />
				</figure>
				kyleschwartz.ca
			</a>
		</div>

		<h2>About Me</h2>
		<div class="divider -mt-2 mb-0" />

		<p class="text-justify text-sm">
			{home}
		</p>
	</div>

	<div class="flex flex-wrap w-full space-x-8">
		<div class="flex flex-col flex-1">
			<div class="flex flex-wrap -mx-2">
				<div class="my-2 px-2 w-full">
					<!-- Experience -->
					<div class="space-y-2">
						{#each experience as { title, description, timeperiod: time, location }, i}
							<div class="content-node">
								{#if !i}
									<h2 class="header">Experience</h2>
									<div class="divider -mt-2 mb-0" />
								{/if}
								<h3
									class="text-lg font-medium text-primary w-full"
								>
									<span>{location.split(", ")[0]}</span>
									<span class="float-right"
										>{location.split(", ")[1]}</span
									>
								</h3>
								<h4 class="text-xs font-medium opacity-70">
									{title}
								</h4>
								<h4 class="text-xs font-medium opacity-70">
									{time}
								</h4>
								<p class="text-sm text-justify mt-1">
									{description}
								</p>
							</div>
						{/each}
					</div>
				</div>

				<div class="my-2 px-2 w-full">
					<!-- Portfilio -->
					<div class="space-y-2">
						{#each portfolio as { title, description, link }, i}
							<div class="content-node">
								{#if !i}
									<h2 class="header">Portfolio</h2>
									<div class="divider -mt-2 mb-0" />
								{/if}
								<a
									href={link}
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
				</div>

				<div class="my-2 px-2 w-full">
					<!-- Education -->
					<div class="space-y-2">
						{#each education as { timeperiod: time, degree, location }, i}
							<div class="content-node">
								{#if !i}
									<h2 class="header">Education</h2>
									<div class="divider -mt-2 mb-0" />
								{/if}
								{#each degree.split(", ") as part, i}
									<h3
										class="text-lg font-medium text-primary"
									>
										{part}{!i &&
										degree.split(", ").length > 1
											? ","
											: ""}
									</h3>
								{/each}
								<h4 class="text-xs opacity-75">{time}</h4>
								<h4 class="text-sm">{location}</h4>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div class="flex flex-col flex-1 space-y-4">
			<!-- Awards -->
			<div class="space-y-2">
				{#each awards as { title, description, issuer, date, cred, cert }, i}
					<div class="content-node">
						{#if !i}
							<h2 class="header">Awards & Certifications</h2>
							<div class="divider -mt-2 mb-0" />
						{/if}
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
										href="https://kyleschwartz.ca/static/{cert}.pdf"
										>{cred}</a
									>
								{:else}
									{cred}
								{/if}
							{/if}
							| {date}
						</h4>
						<p class="text-sm mt-1">
							{!cred ? description : ""}
						</p>
					</div>
				{/each}
			</div>

			<!-- Volunteer -->
			<div class="space-y-2">
				{#each volunteer as { title, description, timeperiod: time, location }, i}
					<div class="content-node">
						{#if !i}
							<h2 class="header">Volunteer Work</h2>
							<div class="divider -mt-2 mb-0" />
						{/if}
						<h3 class="text-lg font-medium text-primary">
							{title}
						</h3>
						<h4 class="text-xs font-medium opacity-70">
							{location}
						</h4>
						<h4 class="text-xs font-medium opacity-70">
							{time}
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
		@apply text-primary;
		@apply text-xl;
		@apply font-semibold;
		@apply uppercase;
	}

	.divider::after,
	.divider::before {
		@apply bg-primary;
		@apply opacity-10;
	}

	.content-node {
		display: inline-block;
	}

	h2,
	h3,
	h4,
	a,
	figure,
	span {
		break-inside: avoid;
		break-after: auto;
		-webkit-column-break-inside: avoid;
		-webkit-break-after: auto;
	}
</style>
