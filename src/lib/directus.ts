import { createDirectus, rest } from '@directus/sdk';

function getDirectusInstance(fetch?: typeof globalThis.fetch) {
	const options = fetch ? { globals: { fetch } } : {};
	const directus = createDirectus('http://localhost:8055/', options).with(rest());
	return directus;
}

export default getDirectusInstance;
