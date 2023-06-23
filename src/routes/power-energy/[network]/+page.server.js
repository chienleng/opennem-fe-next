/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const res = await fetch(
		`https://data.dev.opennem.org.au/v3/stats/au/${params.network.toUpperCase()}/power/7d.json`
	);
	const json = await res.json();

	return {
		response: json,
		status: res.status
	};
}

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return [{ network: 'nem' }];
}

export const prerender = true;
