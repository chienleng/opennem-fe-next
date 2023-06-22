<script>
	import { formatInTimeZone } from 'date-fns-tz';

	export let tableData = [];

	/**
	 * @param {Date} date
	 */
	function formatDate(date) {
		// Queensland is +10 and has no daylight savings
		return formatInTimeZone(date, 'Australia/Queensland', 'yyyy-MM-dd HH:mm:ss zzz');
	}
</script>

<table class="w-full">
	<tbody>
		{#each tableData as row}
			<tr class="font-mono text-xs hover:bg-stone-200">
				<td class="border-b p-1">{formatDate(row.date)}</td>
				<td class="text-right border-b border-l p-1">{row.value}</td>
			</tr>
		{/each}
	</tbody>
</table>
