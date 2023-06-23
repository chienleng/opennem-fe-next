<script>
	import GlobeAsiaAustralia from '$lib/components/icons/globe-asia-australia.svelte';
</script>

<div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
	<section>
		<span class="text-stone-50 block mx-auto w-12 h-12 mb-6">
			<GlobeAsiaAustralia classes="w-12 h-12" />
		</span>
		<h2>Yahaha!</h2>
		<p>You found me!</p>
		<!-- <div class="mt-10 flex items-center justify-center gap-x-6">
			<a href="/flow/nem">Flow</a>
		</div> -->
		<svg
			viewBox="0 0 1024 1024"
			class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
			aria-hidden="true"
		>
			<circle cx="512" cy="512" r="512" fill="url(#radial-gradient)" fill-opacity="0.9" />
			<defs>
				<radialGradient id="radial-gradient">
					<stop stop-color="#fb923c" />
					<stop offset="1" stop-color="#c2410c" />
				</radialGradient>
			</defs>
		</svg>
	</section>
</div>

<style lang="postcss">
	section {
		@apply relative isolate overflow-hidden bg-stone-950 px-6 py-24 text-center shadow-2xl shadow-stone-400 rounded-lg sm:rounded-3xl sm:px-16;
	}
	h2 {
		@apply font-serif mx-auto max-w-2xl text-3xl text-white sm:text-4xl;
	}
	a {
		@apply rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white;
	}
	p {
		@apply mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300;
	}
</style>
