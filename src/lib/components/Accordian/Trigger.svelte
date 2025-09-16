<script>
	import { getContext } from 'svelte';
	let { children, open = false } = $props();
	const id = getContext('item');
	const { toggle } = getContext('accordion');
	if (open) {
		toggle(id);
	}
</script>

<button onclick={() => toggle(id)} class="w-full cursor-pointer text-left font-medium">
	<div class="flex justify-between">
		{@render children()}
		<p class="text-2xl font-semibold">+</p>
	</div>
</button>
