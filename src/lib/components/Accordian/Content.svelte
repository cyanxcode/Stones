<script>
	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';
	let { children } = $props();
	const id = getContext('item');
	const { isOpen } = getContext('accordion');
</script>

{#if isOpen(id)}
	<div class="py-2 pb-6" transition:slide>
		{@render children()}
	</div>
{/if}
