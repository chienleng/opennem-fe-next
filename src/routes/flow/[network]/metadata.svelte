<script>
	export let label = '';
	/** @type {{ label: string, value: string | string }[]} */
	export let list = [];
</script>

<h5>{label}</h5>
<ul>
	{#each list as { label, value }}
		<li><strong>{label}:</strong> {value}</li>
	{/each}
</ul>

<style lang="postcss">
	h5 {
		@apply font-serif text-sm font-bold mb-2 text-stone-400;
	}
	ul li {
		@apply font-mono text-xs flex justify-between;
	}
</style>
