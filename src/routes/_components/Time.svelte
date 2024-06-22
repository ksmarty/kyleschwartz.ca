<script lang="ts">
	import { future } from "$lib/utils/utils";
	import { format, parse, sub } from "date-fns";

	export let start: string,
		end: string,
		offsetEnd: boolean = false;

	const subtractMonth = (e: string) =>
		format(sub(parse(e, "MMM yyyy", new Date()), { months: 1 }), "MMM yyyy");
</script>

{start} -
{#if !end || future(end)}
	Present
{:else if offsetEnd}
	{subtractMonth(end)}
{:else}
	{end}
{/if}
