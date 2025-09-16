<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;
	import { cart, addToCart, updateQty } from '$lib/stores/cart';
	import { toggleSheet } from '$lib/ui/Sheet';
	import type { CartItem } from '$lib/types';
	const product = data.item[0];
</script>

<main class="relative h-[100vh]">
	<div class="main fixed -z-20 h-[100vh] w-full"></div>
	<img
		src="/Full_moon.png"
		alt=""
		class="absolute -top-[20%] left-1/2 -z-10 w-[500px] -translate-x-1/2 rounded-full opacity-60"
	/>
	<nav class="flex h-20 w-full items-center justify-between px-8">
		<a href="/shop" aria-label="Back to shop"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="size-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
			</svg>
		</a>
		<button class="aspect-square w-8" aria-label="Cart" onclick={toggleSheet}
			><svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width={1.5}
				stroke="currentColor"
				class="size-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
				/>
			</svg>
		</button>
	</nav>
	<img src="/flower.png" alt="" class="absolute right-30 -z-10 w-[240px]" />
	<div class="grid w-full grid-cols-3">
		<div class="flex h-[100vh] flex-col items-start justify-center gap-6 pl-10">
			<p class="mb-8 text-xl font-extralight tracking-[7px] text-zinc-400 uppercase">
				{data.category[0].name}
			</p>
			<h1 class="gradient-text font-radon text-5xl text-nowrap">{product.name}</h1>
			<p class="font-extralight tracking-wider text-zinc-300">
				{product.description}
			</p>
			{#if $cart.find((p: CartItem) => p.id === product.id) === undefined}
				<!-- Show Add to Cart if product not in cart -->
				<button
					class="mt-4 w-40 rounded-full bg-zinc-200/10 p-3 font-radon text-lg hover:bg-zinc-200/20"
					onclick={() => addToCart(product)}
				>
					Add to cart
				</button>
			{:else}
				<!-- Show + / - controls if product is in cart -->

				<button
					onclick={() =>
						updateQty(product.id, $cart.find((p: CartItem) => p.id === product.id).quantity - 1)}
					>-</button
				>
				<span>{$cart.find((p: CartItem) => p.id === product.id).quantity}</span>
				<button
					onclick={() =>
						updateQty(product.id, $cart.find((p: CartItem) => p.id === product.id).quantity + 1)}
					>+</button
				>
			{/if}
		</div>
		<div class="grid place-content-center">
			<img
				class="w-[450px] rounded-3xl"
				src={`http://localhost:8055/assets/${product.main_image}`}
				alt={product.name}
			/>
		</div>
		<div class="flex h-[100vh] flex-col items-center justify-center gap-3">
			<div class="gradient flex w-[80%] items-center justify-between">
				<span class="ml-10 font-radon text-3xl text-nowrap">Rs {product.price} /-</span>
				<span class="mr-10 ml-2 font-radon text-xl text-nowrap text-zinc-300 line-through"
					>Rs {product.markup_price}/-</span
				>
			</div>
			<div class="gradient mx-20 flex w-[80%] items-center justify-start gap-10">
				<span class=" mx-10 font-radon text-xl text-zinc-300"> Authentic Stones</span>
			</div>
			<div class="gradient mx-20 flex w-[80%] items-center justify-start gap-10">
				<span class=" mx-10 font-radon text-xl text-zinc-300">6 Months Warranty</span>
			</div>
			<div class="gradient mx-20 flex w-[80%] items-center justify-start gap-10">
				<span class=" mx-10 font-radon text-xl text-zinc-300">24 Premium Stones</span>
			</div>
		</div>
	</div>

	<div class="grid w-full grid-cols-2">
		<div class="flex flex-col gap-10">
			<h2 class="gradient-text mb-8 ml-20 text-left font-radon text-5xl text-nowrap">Stones</h2>
			{#each data.stones as stone}
				<span class=" ml-20 flex w-full items-center justify-start gap-8">
					<img
						class="rounded-3x h-[120px]"
						src={`http://localhost:8055/assets/${stone.image}`}
						alt={stone.name}
					/>
					<div class="flex h-[120px] flex-col justify-start gap-1 p-10">
						<div class="font-radon text-2xl font-semibold text-nowrap">{stone.name}</div>
						<div class="flex gap-4 font-radon text-lg text-nowrap text-zinc-300">
							{#each stone.quality as quality, i}
								<span class="text-zinc-300">{quality}</span>
								{#if i != stone.quality.length - 1}
									|
								{/if}
							{/each}
						</div>
					</div>
				</span>
			{/each}
		</div>
	</div>
</main>

<style>
	.main {
		background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/spacebg.jpg');
		background-size: cover;
		background-position: center;
		height: 100vh;
	}
	.gradient-text {
		background: radial-gradient(circle, rgba(255, 249, 185, 1) 0%, rgba(165, 107, 0, 1) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent; /* for Safari/Chrome */
		background-clip: text;
		color: transparent; /* fallback */
	}
	.gradient {
		background: #ffffff;
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
		padding: 12px;
		clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%);
	}
</style>
