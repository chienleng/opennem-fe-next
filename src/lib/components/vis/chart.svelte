<script>
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import 'chartjs-adapter-date-fns';

	/** @type {number[]} */
	export let chartData = [];
	/** @type {number[]} */
	export let chartLabels = [];
	export let label = 'Flow';

	/** @type {CanvasRenderingContext2D | null} */
	let ctx;
	/** @type {HTMLCanvasElement} */
	let chartCanvas;
	/** @type {Chart} */
	let chart;

	$: if (chart) {
		chart.data.labels = chartLabels;
		chart.data.datasets[0].data = chartData;
		chart.update('none');
	}

	onMount(() => {
		ctx = chartCanvas.getContext('2d');
		if (ctx) {
			chart = new Chart(ctx, {
				type: 'line',
				options: {
					maintainAspectRatio: false,
					// events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
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
		}
	});
</script>

<canvas bind:this={chartCanvas} />
