<script>
	import { setContext } from 'svelte';
	let { children } = $props();
	let id = crypto.randomUUID();
	setContext('item', id);
</script>

<div class="px-2 py-4">
	{@render children()}
</div>
