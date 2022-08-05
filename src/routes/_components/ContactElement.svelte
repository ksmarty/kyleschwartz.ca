<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	/**
	 * Classes to be added to the main element (input / textarea)
	 */
	let classes = '';
	/**
	 * Element to bind to
	 */
	let el: HTMLInputElement | HTMLTextAreaElement;
	/**
	 * False for `input`, True for `textarea`
	 * @default false
	 */
	let ta = false;
	/**
	 * Element title and placeholder
	 */
	let title = '';
	/**
	 * ID to connect input/ta & label
	 *
	 * Default: lower snake case of title
	 */
	let id = title.trim().replaceAll(/\s+/g, '_').toLowerCase();

	const dispatch = createEventDispatcher();

	export { el, ta, title, classes as class, id };
</script>

<div class="form-control {classes}">
	<svelte:element
		this={ta ? 'textarea' : 'input'}
		name={id}
		placeholder={title}
		class={'peer placeholder-transparent bg-base-200 ' +
			(ta
				? 'textarea h-24 textarea-bordered textarea-info border-base-100'
				: 'input input-bordered input-info valid:border-base-100 invalid:input-error')}
		bind:this={el}
		on:input={(e) => dispatch('input', e)}
		on:blur={(e) => dispatch('blur', e)}
	/>
	<label
		class="label pointer-events-none absolute -mt-8 peer-placeholder-shown:p-0 peer-placeholder-shown:mt-[0.875rem] peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base duration-[250ms]"
		for={id}
	>
		<span class="label-text">
			{title}
		</span>
	</label>
</div>
