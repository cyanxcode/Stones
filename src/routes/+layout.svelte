<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	import Sheet from '$lib/ui/Sheet/Sheet.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<Sheet className="bg-zinc-900"></Sheet>
