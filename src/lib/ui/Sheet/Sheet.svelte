<script lang="ts">
	import { closeSheet, isSheetOpen } from './';
	import { fly } from 'svelte/transition';
	import { cart } from '$lib/stores/cart';
	import { updateQty, removeFromCart } from '$lib/stores/cart';

	type Props = {
		allignement?: 'left' | 'right';
		className?: string;
	};

	let { allignement = 'right', className }: Props = $props();
	let total = $state(0);
	$effect(() => {
		total = $cart.reduce((acc: any, item: any) => acc + item.price * item.quantity, 0);
	});
</script>

{#if $isSheetOpen}
	<aside
		transition:fly={{ x: allignement == 'right' ? 200 : -200 }}
		class={`${className} bg-secondary dark:bg-secondary-dark fixed top-0 flex h-[100vh] w-[28rem] flex-col ${allignement == 'left' ? 'left-0' : 'right-0'} z-50 overflow-y-auto rounded-l-lg px-8 shadow-lg`}
	>
		<nav class="bg-primary flex h-20 w-full items-center justify-between">
			<div class="text-lg">Shopping Cart</div>
			<button onclick={closeSheet} aria-label="Close"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
				</svg>
			</button>
		</nav>
		{#if $cart.length > 0}
			<main class=" flex flex-1 flex-col gap-4">
				{#each $cart as product (product.id)}
					<div class="h-[1px] w-full bg-zinc-600"></div>
					<div class="flex items-center justify-between gap-4 rounded-2xl">
						<!-- Left side: product image -->
						<img
							src={`http://localhost:8055/assets/${product.card_image}`}
							alt={product.name}
							class="aspect-square w-30 rounded-lg object-cover"
						/>

						<!-- Middle: product details -->
						<div class="flex w-full flex-col items-start justify-between gap-2">
							<div class="flex flex-1 flex-col">
								<h3 class="font-semibold text-white">{product.name}</h3>
								<p class="text-sm text-zinc-400">₹{product.price}</p>
							</div>

							<!-- Right side: quantity + remove -->
							<div class="flex w-full items-center justify-between gap-2">
								<div class="flex items-center gap-2">
									<button
										class="rounded-lg bg-zinc-800 px-3 py-1 text-white hover:bg-zinc-700"
										onclick={() => updateQty(product.id, product.quantity - 1)}
									>
										−
									</button>
									<span class="w-6 text-center text-white">{product.quantity}</span>
									<button
										class="rounded-lg bg-zinc-800 px-3 py-1 text-white hover:bg-zinc-700"
										onclick={() => updateQty(product.id, product.quantity + 1)}
									>
										+
									</button>
								</div>
								<button
									class="px-4 text-sm text-red-400 hover:text-red-500"
									onclick={() => removeFromCart(product.id)}
								>
									Remove
								</button>
							</div>
						</div>
					</div>
				{/each}
				<div class=" mt-auto mb-10 w-full">
					<div class=" flex items-center justify-between py-4">
						<p class="text-xl font-medium">Total:</p>
						<p class="">Rs<span class="text-xl font-medium">{total}</span></p>
					</div>
					<a
						href="/"
						class=" grid h-12 w-full place-content-center rounded-md bg-white text-lg font-medium text-black hover:bg-zinc-200"
						>Checkout</a
					>
				</div>
			</main>
		{:else}
			<section class="-mt-20 grid h-full w-full place-content-center">
				<p class="text-lg">Your cart is empty.</p>
			</section>
		{/if}
	</aside>
{/if}
