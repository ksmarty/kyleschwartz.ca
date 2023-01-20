<script lang="ts">
	import { future } from "$lib/utils/utils";

	export let start: string, end: string;
</script>

{start} -
{#if future(end)}
	Present
{:else}
	{end}
{/if}
