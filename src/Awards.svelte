<script lang="ts">
	import { Digitalocean } from "@icons-pack/svelte-simple-icons";
	import {
	AcademicCap,
	Chip,
	DesktopComputer,
	DocumentReport,
	PresentationChartLine,
	UserGroup
	} from "svelte-hero-icons";
	import Icon from "svelte-hero-icons/Icon.svelte";
	import { awards } from "./Content.yaml";

	// Typescript funness
	const newAwards = awards as {
		title: string;
		description: string;
		icon: string;
		cert: string;
	}[];

	const icons = {
		AcademicCap,
		DocumentReport,
		Chip,
		DesktopComputer,
		PresentationChartLine,
		UserGroup,
	} as any;

	const colors = (i: number) => ["primary", "secondary", "accent"][i % 3];

	let modalToggle = false;
	let modal: HTMLElement;

	// Disable scroll when modal is open
	$: document.body.style.overflow = modalToggle ? "hidden" : "auto";

	const leaveModal = (e: Event) => {
		if (e.target === modal) modalToggle = false;
	};
</script>

<div id="Awards">
	<div class="divider text-3xl mb-8">Awards</div>
	<div class="flex flex-wrap -mx-2 overflow-hidden md:-mx-3">
		{#each newAwards as { title, description, icon, cert }, index}
			<div
				class="my-2 px-2 w-full overflow-hidden md:my-3 md:px-3 md:w-1/2 flex-grow"
			>
				<div
					class="card shadow-lg compact side bg-base-300 h-full border-2 border-base-100"
				>
					<div class="flex-row items-center space-x-4 card-body">
						<div>
							<div
								class="avatar w-12 h-12 items-center justify-center text-{colors(
									index
								)}"
							>
								{#if icons[icon]}
									<Icon src={icons[icon]} />
								{:else}
									<Digitalocean size="40" />
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
								{:else}
									<!-- Modal Open Button -->
									<label
										for="my-modal-2"
										class="btn btn-outline btn-{colors(
											index
										)} btn-sm modal-button"
										>View Certificate</label
									>
									<!-- Modal toggle -->
									<input
										bind:checked={modalToggle}
										type="checkbox"
										id="my-modal-2"
										class="modal-toggle"
									/>
									<!-- Modal -->
									<div
										class="modal"
										on:click={leaveModal}
										bind:this={modal}
									>
										<div class="modal-box max-w-3xl">
											<img
												src="./static/{cert}.png"
												alt="Certificate"
											/>
											<div class="modal-action">
												<a
													href="./static/{cert}.pdf"
													target="_blank"
													for="my-modal-2"
													class="btn btn-primary"
													>View File</a
												>
												<label
													for="my-modal-2"
													class="btn">Close</label
												>
											</div>
										</div>
									</div>
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
	.modal {
		transition-property: inherit;
	}
</style>
