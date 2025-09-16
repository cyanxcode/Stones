<script>
	let { text, limit = 60 } = $props();
	let x = $state(text.lastIndexOf(' ', limit));
	let cutIndex = $derived(x == -1 ? limit : x);
	let firstText = $derived(text.slice(0, cutIndex));
</script>

{#if text.length > limit}
	<p class="text-md">
		{firstText}
	</p>
{:else}
	<p class="text-md">{text}</p>
{/if}
