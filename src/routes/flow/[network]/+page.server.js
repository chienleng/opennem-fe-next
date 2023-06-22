/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const res = await fetch(`https://api.dev.opennem.org.au/stats/flow/network/${params.network}`);
	const json = await res.json();

	return {
		response: json,
		status: res.status
	};
}
