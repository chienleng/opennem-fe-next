<script>
	import formatToNemTimeZone from '$lib/utils/formatToNemTimeZone';

	/** @type {import('./row.types').SimpleDataTableRow[]} */
	export let tableData = [];
</script>

<table class="w-full">
	<tbody>
		{#each tableData as row}
			<tr class="font-mono text-xs hover:bg-stone-200">
				<td class="border-b p-1">{formatToNemTimeZone(row.date)}</td>
				<td class="text-right border-b border-l p-1">{row.value}</td>
			</tr>
		{/each}
	</tbody>
</table>
