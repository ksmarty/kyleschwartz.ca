<script lang="ts">
	import {
		AcademicCap,
		Chip,
		DesktopComputer,
		DocumentReport,
		PresentationChartLine,
		UserGroup,
		Icon,
	} from "svelte-hero-icons";
	import { certs } from "../Content.yaml";

	const icons = {
		AcademicCap,
		DocumentReport,
		Chip,
		DesktopComputer,
		PresentationChartLine,
		UserGroup,
	};

	const accessIcon = (icon: string) => icon as keyof typeof icons;

	const colors = (i: number) => ["primary", "secondary", "accent"][i % 3];

	let modal: HTMLElement;
	let modalToggle = false;

	// Disable scroll when modal is open
	$: document.body.style.overflow = modalToggle ? "hidden" : "auto";

	const leaveModal = (e: Event) => (modalToggle = e.target !== modal);

	$: console.log(document.getElementsByClassName("cert-badge")[0]);
</script>

<div id="Certifications">
	<!-- prettier-ignore -->
	<div class="divider text-3xl mb-8 whitespace-pre-line sm:whitespace-normal text-center h-20 sm:h-auto">
		Awards 
		&
		Certifications
	</div>
	<div class="flex flex-wrap -mx-2 overflow-hidden md:-mx-3">
		{#each certs as { title, description, icon, cert, badge, url, issuer }, index}
			<div
				class="my-2 px-2 w-full overflow-hidden md:my-3 md:px-3 md:w-1/2 flex-grow">
				<div
					class="card compact side overflow-visible bg-base-300 h-full border-2 border-base-100">
					<div class="flex-row items-center space-x-4 card-body">
						<div class="">
							<div
								class:cert-badge={badge && url}
								class="w-12 h-12 justify-center transition-all text-{colors(
									index
								)}">
								{#if icons[accessIcon(icon)]}
									<Icon src={icons[accessIcon(icon)]} />
								{:else if badge && url}
									<img src={badge} alt={`${title} badge`} />
								{/if}
							</div>
						</div>
						<div>
							<h2 class="card-title text-{colors(index)}">
								{title}
							</h2>
							<div class="">
								{#if !cert}
									<p
										class="text-base-content text-opacity-80">
										{description}
									</p>
									{#if url}
										<a
											href={url}
											target="_blank"
											class="btn btn-outline btn-{colors(
												index
											)} btn-sm mt-3">
											View Certificate
										</a>
									{/if}
								{:else}
									<p
										class="text-base-content text-opacity-80 pb-2">
										{issuer}
									</p>
									<!-- Modal Open Button -->
									<label
										for="my-modal-2"
										class="btn btn-outline btn-{colors(
											index
										)} btn-sm modal-button"
										>View Certificate</label>
									<!-- Modal toggle -->
									<input
										bind:checked={modalToggle}
										type="checkbox"
										id="my-modal-2"
										class="modal-toggle" />
									<!-- Modal -->
									<div
										class="modal duration-500"
										on:click={leaveModal}
										bind:this={modal}>
										<div
											class="modal-box max-w-3xl duration-500">
											<img
												src="./static/{cert}.png"
												alt="Certificate" />
											<div class="modal-action">
												<a
													href="./static/{cert}.pdf"
													target="_blank"
													for="my-modal-2"
													class="btn btn-primary"
													>View File</a>
												<label
													for="my-modal-2"
													class="btn">Close</label>
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

	.divider::after,
	.divider::before {
		@apply bg-base-100;
	}

	.cert-badge:hover {
		z-index: 10;
		transform: scale(2.5) translate(0.5rem);
	}

	/* .cert-badge {
		transition: all 150ms;
	} */
</style>
