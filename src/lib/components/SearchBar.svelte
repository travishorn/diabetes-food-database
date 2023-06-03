<script>
	import MagnifyingGlassIcon from '$lib/components/MagnifyingGlassIcon.svelte';
</script>

<form action="search" class={$$restProps.class}>
	<div class="relative">
		<span class="absolute inset-y-0 left-0 flex items-center pl-2">
			<button class="p-1 focus:outline-none">
				<MagnifyingGlassIcon class="h-5 w-5 text-gray-400" />
			</button>
		</span>
		<!-- svelte-ignore a11y-autofocus -->
		<input
			class="py-2 rounded-lg pl-10 pr-3 border-gray-300 border w-full focus:outline-none"
			name="q"
			type="search"
			placeholder="Search for a food"
			autofocus
		/>
	</div>
</form>
