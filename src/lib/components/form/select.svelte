<script>
	export let label = '';
	export let selected = '';
	/** @type {string[]} */
	export let options = [];
</script>

<label>
	<span>{label}</span>

	<select bind:value={selected} on:change>
		{#each options as option}
			<option>{option}</option>
		{/each}
	</select>
</label>

<style lang="postcss">
	label {
		@apply block text-sm font-medium leading-6 text-gray-900;
	}
	select {
		@apply mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6;
	}
</style>
