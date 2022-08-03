<script lang="ts">
	import { ChevronRight } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';

	let email: HTMLInputElement;
	let emailClasses = 'border-base-100';
	let emailLabel = 'Email';
	let name: HTMLInputElement['value'];
	let message: HTMLInputElement['value'];

	const validateEmail = () => {
		const isValid =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				email.value
			);

		emailClasses = isValid ? 'border-base-100' : 'input-error';
		emailLabel = isValid ? 'Email' : 'Email - Invalid!';

		return isValid;
	};

	const validateForm = (e: Event) => {
		const isValid = validateEmail() && name.length && message.length;
		if (!isValid) {
			e.preventDefault();
			window.history.back();
		}
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
							<div class="form-control flex-1 relative">
								<input
									type="text"
									name="name"
									placeholder="Name"
									class="input input-bordered input-info border-base-100 peer placeholder-transparent"
									bind:value={name}
								/>
								<label
									class="label pointer-events-none absolute -mt-8 peer-placeholder-shown:p-0 peer-placeholder-shown:mt-[0.875rem] peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base duration-[250ms]"
									for="name"
								>
									<span class="label-text">Name</span>
								</label>
							</div>
							<div class="form-control flex-1 relative">
								<input
									type="text"
									name="_replyto"
									placeholder="Email"
									class="w-full input input-bordered input-info {emailClasses} peer placeholder-transparent"
									bind:this={email}
									on:blur={validateEmail}
								/>
								<label
									class="label pointer-events-none absolute -mt-8 peer-placeholder-shown:p-0 peer-placeholder-shown:mt-[0.875rem] peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base duration-[250ms]"
									for="_replyto"
								>
									<span class="label-text">{emailLabel}</span>
								</label>
							</div>
						</div>
						<div class="form-control relative mt-8 sm:mt-8">
							<textarea
								name="message"
								class="textarea h-24 textarea-bordered textarea-info border-base-100 peer placeholder-transparent"
								placeholder="Message"
								bind:value={message}
							/>
							<label
								class="label pointer-events-none absolute -mt-8 peer-placeholder-shown:p-0 peer-placeholder-shown:mt-[0.875rem] peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base duration-[250ms]"
								for="message"
							>
								<span class="label-text">Your Message</span>
							</label>
						</div>
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

<style>
	.divider::after,
	.divider::before {
		@apply bg-base-100;
	}

	input,
	textarea {
		@apply bg-base-200;
	}
</style>
