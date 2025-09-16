<script>
	/** @type {import('./$types').PageData} */ '';

	import { toggleSheet } from '$lib/ui/Sheet';
	export let data;
	import TextLimit from '$lib/components/TextLimit.svelte';
	const products = data.items;
	const colors = ['bg-blue-500/20', 'bg-green-500/20', 'bg-orange-400'];
</script>

<main class="relative h-[100vh]">
	<div class="main fixed -z-20 h-[100vh] w-full"></div>

	<nav class="flex h-20 w-full items-center justify-between px-8">
		<a href="/" aria-label="Back to home"
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
	<div class="gradient-text mx-4 mt-10 text-left font-radon text-5xl text-nowrap">
		Premium Collection
	</div>

	<div class="mt-8 grid w-full grid-cols-2 gap-4 p-4">
		{#each products as product, i}
			<div class="grid h-full grid-cols-2">
				<div class={`aspect-[3/4] w-full overflow-hidden rounded-md`}>
					<img
						src={`http://localhost:8055/assets/${product.card_image}`}
						alt={product.name}
						class="h-full w-full object-cover"
					/>
				</div>
				<div>
					<div
						class={`aspect-[3/4] w-full rounded-md ${colors[i % colors.length]} flex flex-col items-center justify-between px-4 py-8`}
					>
						<div class="col-span-2 flex flex-col px-2">
							<div class="flex w-full items-center justify-center">
								<h2 class="text-center font-radon text-3xl">{product.name}</h2>
							</div>
							<div class="flex justify-center gap-4 font-radon text-xl">
								<p class="font-semibold">${product.price}</p>
								<p class="text-zinc-300 line-through">${product.markup_price}</p>
							</div>
							<div class="mx-6 my-8 text-sm text-zinc-300">
								<TextLimit text={product.description}></TextLimit>
							</div>
						</div>
						<a
							href="/shop/{product.slug}"
							class="font-radon text-2xl transition-all duration-200 hover:scale-105"
						>
							View Product
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</main>

<!--
	<div class="mt-8 grid w-full grid-cols-2 gap-2 p-4">
		{#each products as product}
			<a href="/shop/{product.slug}">
				<div
					class="grid grid-cols-3 rounded-md bg-zinc-900/80 p-2 transition-all duration-300 hover:bg-zinc-900/60"
				>
					<div class="relative aspect-square w-full overflow-hidden rounded-md">
						<img
							src={`http://localhost:8055/assets/${product.card_image}`}
							alt={product.name}
							class="absolute z-10 aspect-square w-full object-cover transition-opacity duration-300 hover:opacity-0"
						/>
						<img
							src={`http://localhost:8055/assets/${product.main_image}`}
							alt={product.name}
							class="absolute top-0 aspect-square w-full object-cover"
						/>
					</div>
					<div class="col-span-2 mt-2 flex flex-col px-2">
						<div class="w-full text-base/4">
							<div class="flex w-full items-center justify-between">
								<h2 class="text-md font-semibold sm:text-lg">{product.name}</h2>
							</div>
							<h2 class="sm:text-md text-sm text-zinc-600 dark:text-zinc-300">T Shirt</h2>
							<div class="sm:text-md flex gap-2 text-sm">
								<p class="text-zinc-600 line-through dark:text-zinc-300">${product.markup_price}</p>
								<p class="font-semibold">${product.price}</p>
							</div>
							<p
								class=" mr-10 line-clamp-2 text-zinc-600 sm:line-clamp-none dark:font-light dark:text-zinc-300"
							></p>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>-->

<style>
	.gradient-text {
		background: radial-gradient(circle, rgba(255, 249, 185, 1) 0%, rgba(165, 107, 0, 1) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent; /* for Safari/Chrome */
		background-clip: text;
		color: transparent; /* fallback */
	}

	.main {
		background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/spacebg.jpg');
		background-size: cover;
		background-position: center;
		height: 100vh;
	}
</style>
