<script>
	import SearchBar from '$lib/components/SearchBar.svelte';
	import FoodItem from '$lib/components/FoodItem.svelte';

	/** @type {App.Food} */
	const testFood = {
		displayName: 'Test',
		level: 3,
		explanation: 'Just a test food item.',
		suggestions: "Don't pay too much attention to this."
	};
</script>

<main class="flex flex-col gap-5">
	<a href="/">
		<img
			class="px-28 max-w-md mx-auto mt-5"
			alt="Diabetes Food Database"
			src="/diabetes-food-database-wordmark.svg"
		/>
	</a>

	<SearchBar class="px-5" />

	{#if 1 > 0}
		<div class="bg-gray-50 md:bg-white p-5 flex flex-col gap-5">
			<FoodItem food={testFood} />
		</div>
	{:else}
		<div class="px-5">
			<strong>Sorry!</strong> Your search did not match any food in the database.
		</div>
	{/if}
</main>
