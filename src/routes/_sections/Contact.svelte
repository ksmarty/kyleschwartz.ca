<script lang="ts">
	import { ChevronRight } from "@steeze-ui/heroicons";
	import { Icon } from "@steeze-ui/svelte-icon";
	import ContactElement from "../_components/ContactElement.svelte";

	let email: HTMLInputElement;
	let name: HTMLInputElement;
	let message: HTMLTextAreaElement;
	let isValid = true;

	const validateEmail = (e: Event | undefined) => {
		const localValid =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				email.value
			);

		if (e?.type === "input" && !localValid) return;

		email.setCustomValidity(localValid ? "" : "Invalid email!");
		isValid = localValid;
		return localValid;
	};

	const validateForm = (e: Event) => {
		const valid = validateEmail(undefined) && name?.value.length > 0 && message?.value.length > 0;
		if (!valid) e.preventDefault();
	};
</script>

<div id="Contact">
	<div class="divider text-3xl mb-8">Contact Me</div>
	<div class="flex flex-wrap -mx-2 overflow-hidden md:-mx-3">
		<div class="my-2 px-2 w-full overflow-hidden md:my-3 md:px-3">
			<div class="card text-center border-2 border-base-100 h-full">
				<div class="card-body my-auto">
					<form action="https://formspree.io/f/mdobnybv" method="POST" on:submit={validateForm}>
						<div
							class="form-row flex flex-wrap flex-col sm:flex-row sm:space-x-4 space-y-8 sm:space-y-0"
						>
							<ContactElement title="Name" class="flex-1 relative" bind:el={name} />
							<ContactElement
								id="_replyto"
								class="flex-1 relative"
								bind:el={email}
								on:blur={validateEmail}
								on:input={validateEmail}
								title={isValid ? "Email" : "Email - Invalid!"}
							/>
						</div>
						<ContactElement ta class="relative mt-8 sm:mt-8" title="Message" bind:el={message} />
						<div class="form-control mt-6">
							<button class="btn bg-base-200 hover:bg-info hover:text-info-content" type="submit">
								<span> Send </span>
								<div class="w-8 h-8">
									<Icon src={ChevronRight} />
								</div>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
