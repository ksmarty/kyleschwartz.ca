<script lang="ts">
	import { browser } from "$app/environment";

	export let issuer = "",
		index: number,
		cert = "";

	const colors = (i: number) => ["primary", "secondary", "accent"][i % 3];

	let modal: HTMLElement;
	let modalToggle = false;

	// Disable scroll when modal is open

	$: if (browser) {
		document.body.style.overflow = modalToggle ? "hidden" : "auto";
	}

	const leaveModal = (e: Event) => (modalToggle = e.target !== modal && modalToggle);
</script>

<div class="flex flex-col justify-between flex-1">
	<p class="text-base-content text-opacity-80 pb-2">
		{issuer}
	</p>
	<!-- Modal Open Button -->
	<label for="my-modal-{cert}" class="btn btn-outline btn-{colors(index)} btn-sm modal-button">
		View Certificate
	</label>
	<!-- Modal toggle -->
	<input bind:checked={modalToggle} type="checkbox" id="my-modal-{cert}" class="modal-toggle" />

	<!-- Modal -->
	<div
		class="modal duration-[150ms] modal-bottom sm:modal-middle"
		on:click={leaveModal}
		bind:this={modal}
	>
		<div class="modal-box !max-w-3xl duration-[150ms]">
			<img src="./certs/{cert}.webp" alt="Certificate" />
			<div class="modal-action">
				<a href="./certs/{cert}.pdf" target="_blank" for="my-modal-2" class="btn btn-primary">
					View File
				</a>
				<label for="my-modal-2" class="btn" on:click={() => (modalToggle = false)}> Close </label>
			</div>
		</div>
	</div>
</div>

<style>
	.modal {
		transition-property: inherit;
	}
</style>
