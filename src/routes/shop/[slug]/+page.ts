/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';

export async function load({ fetch, params }) {
	const { slug } = params;
	const directus = getDirectusInstance(fetch);
	const item = await directus.request(
		readItems('Product', {
			filter: {
				slug: { _eq: slug } // match where slug equals value
			}
		})
	);
	const category = await directus.request(
		readItems('Categories', {
			filter: {
				id: { _eq: item[0].category } // match where slug equals value
			}
		})
	);
	const stones = await directus.request(
		readItems('Stones', {
			filter: {
				Product_id: { _eq: item[0].stones[0].id } // match where slug equals value
			}
		})
	);

	const pstones = await directus.request(
		readItems('Product_Stones', {
			filter: {
				Product_id: { _eq: item[0].id } // match where slug equals value
			}
		})
	);
	return { item, category, stones, pstones };
}
