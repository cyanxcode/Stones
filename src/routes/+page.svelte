<script>
	import { onMount } from 'svelte';
	import { toggleSheet } from '$lib/ui/Sheet';
	let scrollY = 0;
	onMount(() => {
		window.addEventListener('scroll', () => {
			scrollY = window.scrollY / 2;
		});
	});
</script>

<main class="relative h-[100vh] w-full">
	<div class="main fixed -z-20 h-[100vh] w-full"></div>
	<img
		src="/Earth.png"
		alt=""
		class="fixed top-[90%] -z-10 w-full scale-140 transition-all duration-100"
		style="transform: rotate({scrollY / 5}deg);"
	/>
	<div class=" h-[400vh] w-full">
		<nav class="absolute flex h-20 w-full items-center justify-between px-8">
			<h2 class="font-radon text-2xl tracking-widest">Purist</h2>
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
		<div class="grid h-screen w-full grid-cols-2">
			<div class=""></div>
			<div class="flex flex-col items-start justify-center gap-6 p-10">
				<div class="gradient-text mt-10 text-left font-radon text-7xl text-nowrap">
					From Veds To <br /> Modern Trends
				</div>
				<p class=" pr-64 font-extralight tracking-wider text-zinc-200">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sunt, enim tempora, quae
					voluptates distinctio laboriosam ad modi minus voluptate iusto vero a omnis alias quo
					eaque. Maiores, ipsa iste!
				</p>
				<a
					href="/shop"
					class="gradient-text group mt-4 mr-64 ml-auto flex h-16 w-84 items-center justify-center gap-2 border border-amber-400 px-10 font-radon text-2xl transition-all duration-300 hover:gap-20"
				>
					<div class="ml-10 text-nowrap transition-all duration-300 hover:ml-0">Discover Now</div>
					<div
						class=" text-amber-200 opacity-0 transition-all duration-300 group-hover:opacity-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
							/>
						</svg>
					</div>
				</a>
			</div>
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
