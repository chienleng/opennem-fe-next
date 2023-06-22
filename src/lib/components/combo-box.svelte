<script>
	import CheckMark from '$lib/components/icons/check-mark.svelte';
	import ChevronUpDown from '$lib/components/icons/chevron-up-down.svelte';

	export let label = 'Assigned to';
	export let selected = '';
</script>

<div>
	<label for="combobox" class="block text-sm font-medium leading-6 text-gray-900">{label}</label>

	<div class="relative mt-2">
		<input type="text" role="combobox" aria-controls="options" aria-expanded="false" />
		<button
			type="button"
			class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
		>
			<ChevronUpDown />
		</button>

		<ul
			class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
			id="options"
			role="listbox"
		>
			<!--
        Combobox option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

        Active: "text-white bg-indigo-600", Not Active: "text-gray-900"
      -->
			<li
				class="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
				role="option"
				aria-selected={selected === 'Leslie Alexander'}
				tabindex="-1"
			>
				<!-- Selected: "font-semibold" -->
				<span class="block truncate">Leslie Alexander</span>

				<!--
          Checkmark, only display for selected option.

          Active: "text-white", Not Active: "text-indigo-600"
        -->
				<span class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
					<CheckMark />
				</span>
			</li>

			<!-- More items... -->
		</ul>
	</div>
</div>
```

<style lang="postcss">
	input {
		@apply w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6;
	}
</style>
