<script lang="ts">
	import { education } from "./Content.yaml";

	const newEdu = education as {
		timeperiod: string;
		degree: string;
		location: string;
	}[];
</script>

{#each newEdu as { timeperiod, degree, location }}
	<div class="card text-center shadow-2xl">
		<div class="card-body">
			<div class="text-sm mb-2 text-base-content text-opacity-60">
				{timeperiod}
			</div>
			<h2 class="card-title text-2xl text-secondary">{degree}</h2>
			<div>
				{location}
			</div>
		</div>
	</div>
{/each}
