<script lang="ts">
	import "$lib/css/app.css";

	import Certs from "./_sections/Certs.svelte";
	import Contact from "./_sections/Contact.svelte";
	import Education from "./_sections/Education.svelte";
	import Experience from "./_sections/Experience.svelte";
	import Home from "./_sections/Home.svelte";
	import Portfolio from "./_sections/Portfolio.svelte";
</script>

<div class="flex flex-col gap-y-3 lg:gap-y-5 md:px-12 lg:px-24 xl:px-48 2xl:px-64">
	<Home />
	<Experience />
	<Portfolio />
	<Education />
	<Certs />
	<Contact />
</div>
