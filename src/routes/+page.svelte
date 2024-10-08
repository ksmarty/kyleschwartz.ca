<script lang="ts">
	import "$lib/css/app.css";

	import Certs from "$sections/Certs.svelte";
	import Contact from "$sections/Contact.svelte";
	import Education from "$sections/Education.svelte";
	import Experience from "$sections/Experience.svelte";
	import Home from "$sections/Home.svelte";
	import Portfolio from "$sections/Portfolio.svelte";
</script>

<div class="flex flex-col gap-y-3 lg:gap-y-5 md:px-12 lg:px-24 xl:px-48 2xl:px-64">
	<Home />
	<Experience />
	<Portfolio />
	<Education />
	<Certs />
	<Contact />
</div>
