<script>
	import SearchBar from '$lib/components/SearchBar.svelte';
</script>

<svelte:head>
	<title>Diabetes Food Database</title>
</svelte:head>

<main class="flex flex-col grow justify-center gap-3 max-w-xl mx-auto w-full -mt-20">
	<h1>
		<img class="px-20" alt="Diabetes Food Database" src="/diabetes-food-database-wordmark.svg" />
	</h1>
	<div class="mx-5"><SearchBar /></div>
</main>
