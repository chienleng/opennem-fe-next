<script>
	import parseISO from 'date-fns/parseISO';
	import addMinutes from 'date-fns/addMinutes';

	import Select from '$lib/components/form/select.svelte';
	import Chart from '$lib/components/vis/chart.svelte';

	import Metadata from './metadata.svelte';
	import Table from './table.svelte';

	export let data;

	let version = data.response.version;
	let flowData = data.response.data;
	let selected = '';
	let tableData = [];
	let chartData = [];
	let chartLabels = [];

	$: flowOptions = flowData.map((flow) => flow.code);
	$: if (flowOptions.length > 0) {
		selected = flowOptions[0];
	}
	$: selectedFlow = flowData.find((flow) => flow.code === selected);
	$: if (selectedFlow) {
		const start = selectedFlow.history.start;
		let labels = [];
		let startDate = parseISO(start);

		labels.push(startDate.getTime());
		chartData = selectedFlow.history.data.map((d) => d);
		tableData = selectedFlow.history.data.map(
			/**
			 * @param {number} d
			 * @param {number} i
			 */
			(d, i) => {
				if (i > 0) {
					startDate = addMinutes(startDate, 5);
					labels.push(startDate.getTime());
				}
				return {
					date: startDate,
					value: d
				};
			}
		);

		chartLabels = labels;
	}

	/** @param {Event} event*/
	function handleChange(event) {
		if (event.target) {
			const target = /** @type {HTMLSelectElement} */ (event.target);
			selected = target.value;
		}
	}
</script>

<h1 class="text-2xl font-serif py-2 px-1">Flow ({version})</h1>

<div class="w-full flex gap-2">
	<div class="w-1/3 border rounded bg-white p-3">
		<Select label="Flow" options={flowOptions} {selected} on:change={handleChange} />

		<hr class="my-3" />

		<Metadata
			label="Details"
			list={[
				{ label: 'code', value: selectedFlow.code },
				{ label: 'data_type', value: selectedFlow.data_type },
				{ label: 'units', value: selectedFlow.units }
			]}
		/>

		<hr class="my-3" />

		<Metadata
			label="History"
			list={[
				{ label: 'start', value: selectedFlow.history.start },
				{ label: 'last', value: selectedFlow.history.last },
				{ label: 'interval', value: selectedFlow.history.interval }
			]}
		/>
	</div>

	<div class="h-[400px] w-2/3 overflow-y-auto border border-stone-300 rounded shadow-inner">
		<Table {tableData} />
	</div>
</div>

<div class="w-full h-[400px] border rounded my-2 border-stone-300 shadow-inner">
	<Chart {chartData} {chartLabels} label={selectedFlow.code} />
</div>