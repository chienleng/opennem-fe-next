<script>
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import 'chartjs-adapter-date-fns';

	export let chartData = [];
	export let chartLabels = [];
	export let label = 'Flow';

	let ctx;
	let chartCanvas;
	let chart;

	$: if (chart) {
		chart.data.labels = chartLabels;
		chart.data.datasets[0].data = chartData;
		chart.update('none');
	}

	onMount(() => {
		ctx = chartCanvas.getContext('2d');
		chart = new Chart(ctx, {
			type: 'line',
			options: {
				maintainAspectRatio: false,
				scales: {
					x: {
						type: 'timeseries'
					}
				},
				elements: {
					line: {
						borderWidth: 1
					},
					point: {
						radius: 0,
						hoverRadius: 4,
						hoverBorderWidth: 2
					}
				},
				animation: false
			},

			data: {
				labels: chartLabels,
				datasets: [
					{
						label,
						data: chartData,
						borderColor: 'steelblue'
					}
				]
			}
		});
	});
</script>

<canvas bind:this={chartCanvas} />
