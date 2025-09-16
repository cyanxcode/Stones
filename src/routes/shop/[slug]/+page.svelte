<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;
	import { cart, addToCart, updateQty } from '$lib/stores/cart';
	import { toggleSheet } from '$lib/ui/Sheet';
	import type { CartItem } from '$lib/types';
	import Accordian from '$lib/components/Accordian/Accordian.svelte';
	import AccordianItem from '$lib/components/Accordian/AccordianItem.svelte';
	import Trigger from '$lib/components/Accordian/Trigger.svelte';
	import Content from '$lib/components/Accordian/Content.svelte';
	const product = data.item[0];
	console.log(product.stones);
	console.log(data.stones);
	console.log(data.pstones);
	const productStones = data.pstones
		.filter((pstone: any) => pstone.Product_id === product.id)
		.map((pstone: any) => {
			const stoneDetails = data.stones.find((s: any) => s.id === pstone.Stones_id);

			// Return a combined object with details and the correct quantity
			return {
				...stoneDetails,
				quantity: pstone.stone_number
			};
		})
		.filter((stone: any) => stone.id);
</script>

<main class="relative h-[100vh]">
	<div class="main fixed -z-20 h-[100vh] w-full"></div>
	<img
		src="/Full_moon.png"
		alt=""
		class="absolute -top-[20%] left-1/2 -z-10 w-[500px] -translate-x-1/2 rounded-full opacity-60"
	/>
	<nav class="absolute flex h-20 w-full items-center justify-between px-8">
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
	<div class="grid w-full grid-cols-3">
		<div class="flex h-[100vh] flex-col gap-6 pl-10">
			<div
				class="mt-[50vh] flex w-[80%] -translate-y-1/2 flex-col items-start justify-between gap-8"
			>
				<div class="flex items-end gap-4">
					<span class="ml-10 font-radon text-3xl text-nowrap">Rs {product.price} /-</span>
					<span class="mr-10 ml-2 font-radon text-xl text-nowrap text-zinc-300 line-through"
						>Rs {product.markup_price}/-</span
					>
				</div>
				<div class="flex flex-col gap-4">
					<span class=" mx-10 font-radon text-xl text-zinc-300"
						><span class="mr-2 font-karantina text-2xl">&gt</span> Authentic Stones</span
					>

					<span class=" mx-10 font-radon text-xl text-zinc-300"
						><span class="mr-2 font-karantina text-2xl">&gt</span> 6 Months Warranty</span
					>

					<span class=" mx-10 font-radon text-xl text-zinc-300"
						><span class="mr-2 font-karantina text-2xl">&gt</span> 24 Premium Stones</span
					>
				</div>
			</div>
			{#if $cart.find((p: CartItem) => p.id === product.id) === undefined}
				<!-- Show Add to Cart if product not in cart -->
				<button
					class="-mt-10 w-[70%] rounded-xl border-2 border-amber-600 bg-black/40 p-3 font-radon text-xl transition-all duration-200 hover:scale-105"
					onclick={() => addToCart(product)}
				>
					Add to cart
				</button>
			{:else}
				<!-- Show + / - controls if product is in cart -->

				<div class="-mt-10 grid w-[70%] grid-cols-3 items-center gap-2 p-3">
					<button
						class="rounded-lg border-2 border-amber-600 bg-black/40 px-3 py-1 font-radon text-xl text-white transition-all duration-200 hover:scale-105"
						onclick={() =>
							updateQty(product.id, $cart.find((p: CartItem) => p.id === product.id).quantity - 1)}
					>
						−
					</button>

					<span class="w-full text-center font-radon text-xl text-white">
						{$cart.find((p: CartItem) => p.id === product.id).quantity}
					</span>

					<button
						class="rounded-lg border-2 border-amber-600 bg-black/40 px-3 py-1 font-radon text-xl text-white transition-all duration-200 hover:scale-105"
						onclick={() =>
							updateQty(product.id, $cart.find((p: CartItem) => p.id === product.id).quantity + 1)}
					>
						+
					</button>
				</div>
			{/if}
		</div>
		<div class="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
			<img
				class="w-[450px] rounded-3xl"
				src={`http://localhost:8055/assets/${product.main_image}`}
				alt={product.name}
			/>
		</div>
		<div class="col-span-2 flex h-[100vh] flex-col items-center justify-start">
			<h1
				class="-my-10 w-full pr-16 text-right font-karantina text-[18rem] font-medium text-nowrap uppercase"
			>
				{product.name}
			</h1>

			<div class="grid grid-cols-2">
				<div class=""></div>
				<div class="flex flex-col gap-10">
					<p class="px-16 font-extralight tracking-wider text-zinc-200">
						{product.description}
					</p>
					{#if productStones.length > 0}
						<div class="flex flex-col gap-6">
							<h2 class="gradient-text ml-16 text-left font-radon text-4xl text-nowrap">Stones</h2>
							{#each productStones as stone}
								<span class="ml-20 flex w-full items-center justify-start gap-4">
									<p class="mr-8 w-8 text-xl font-light text-zinc-200">
										{stone.quantity}<span class="mx-4">x</span>
									</p>
									<img
										class="aspect-square h-[50px] w-[50px] rounded-full object-cover"
										src={`http://localhost:8055/assets/${stone.image}`}
										alt={stone.name}
									/>
									<div class="flex flex-col justify-start gap-1 pl-6">
										<div class="font-radon text-xl font-semibold text-nowrap text-white">
											{stone.name}
										</div>
										<div class="flex gap-3 font-radon text-nowrap text-zinc-300">
											{#each stone.quality as quality, i}
												<span>{quality}</span>
												{#if i < stone.quality.length - 1}
													<span class="text-zinc-500">|</span>
												{/if}
											{/each}
										</div>
									</div>
								</span>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>

	<div class="grid w-full grid-cols-2">
		<div class="h-screen w-full">
			<h4 class="mx-16 font-karantina text-7xl font-medium text-nowrap uppercase">
				Additional Info
			</h4>
			<div class="grid grid-cols-2 gap-4 p-16">
				<img
					class="w-full rounded-3xl"
					src={`http://localhost:8055/assets/${product.card_image}`}
					alt={product.name}
				/>
				<img
					class="w-full rounded-3xl"
					src={`http://localhost:8055/assets/${product.card_image}`}
					alt={product.name}
				/>
				<img
					class=" col-span-2 w-full rounded-3xl"
					src={`http://localhost:8055/assets/${product.card_image}`}
					alt={product.name}
				/>
			</div>
		</div>
		<div class="p-16">
			<Accordian>
				{#each product.additional_info as info, i}
					<AccordianItem>
						<Trigger open={i == 0 ? true : false}
							><div class="py-2 font-radon text-3xl">{info.heading}</div></Trigger
						>
						{#if info.content.length > 1}
							<Content>
								<ul class="list-inside list-disc px-4 text-lg font-light text-zinc-200">
									{#each info.content as _, i}
										<li>{info.content[i]}</li>
									{/each}
								</ul>
							</Content>
						{:else}
							<Content
								><p class="px-2 text-lg font-light text-zinc-200">{info.content[0]}</p></Content
							>
						{/if}
					</AccordianItem>
				{/each}
			</Accordian>
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
</style>
