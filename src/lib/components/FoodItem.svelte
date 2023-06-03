<script setup>
	/** @type {App.Food} */
	export let food;

	let expanded = false;

	function translateIndicator(/** @type {App.Food["level"]} */ level) {
		const x = (level - 1) * 100 + 50;
		return `translate(${x} 10)`;
	}

	function generateIndicatorText(/** @type {App.Food["level"]} */ level) {
		const levels = ['Avoid', 'Caution', 'Okay', 'Good', 'Great'];
		return levels[level - 1];
	}

	function expand() {
		expanded = true;
	}

	function toggleExpanded(/** @type {MouseEvent | KeyboardEvent} */ e) {
		expanded = !expanded;
		e.stopPropagation();
	}
</script>

<div on:click={expand} on:keydown={expand}>
	<div class="flex flex-col gap-3">
		<h2 class="text-xl cursor-pointer" on:click={toggleExpanded} on:keydown={toggleExpanded}>
			{food.displayName}
		</h2>

		<div class="max-w-md">
			<svg viewBox="0 0 500 40">
				<defs>
					<linearGradient id="redGreen">
						<stop offset="20%" stop-color="#cf597e" />
						<stop offset="35%" stop-color="#eeb479" />
						<stop offset="50%" stop-color="#e9e29c" />
						<stop offset="65%" stop-color="#9ccb86" />
						<stop offset="80%" stop-color="#009392" />
					</linearGradient>
				</defs>

				<rect width="500" height="10" rx="3" ry="3" fill="url(#redGreen)" />
				<g transform={translateIndicator(food.level)}>
					<path d="M 5 0 L 10 10 L 0 10 Z" />
					<text x="5" y="25" text-anchor="middle">{generateIndicatorText(food.level)}</text>
				</g>
			</svg>
		</div>

		{#if expanded && food.explanation}
			<div>
				<h3 class="font-bold">Explanation</h3>
				<p>{food.explanation}</p>
			</div>
		{/if}

		{#if expanded && food.suggestions}
			<div>
				<h3 class="font-bold">Suggestions</h3>
				<p>{food.suggestions}</p>
			</div>
		{/if}
	</div>

	{#if !expanded}
		<div class="italic text-gray-500 text-center md:text-left text-sm mt-2 cursor-pointer">
			more info
		</div>
	{/if}
</div>
