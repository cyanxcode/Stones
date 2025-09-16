import { writable } from 'svelte/store';

import type { CartItem, Product } from '$lib/types';
let initialCart = [];

if (typeof window !== 'undefined') {
	const savedCart = localStorage.getItem('cart');
	initialCart = savedCart ? JSON.parse(savedCart) : [];
}

// Create a writable store with the initial cart
export const cart = writable(initialCart);

if (typeof window !== 'undefined') {
	cart.subscribe((value) => {
		localStorage.setItem('cart', JSON.stringify(value));
	});
}

// ✅ Add item to cart (merge if exists)
export function addToCart(product: Product) {
	cart.update((items) => {
		const existing = items.find((p: Product) => p.id === product.id);
		if (existing) {
			return items.map((p: CartItem) =>
				p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
			);
		}
		return [...items, { ...product, quantity: 1 }];
	});
}

// ✅ Update quantity (can be + or -)
export function updateQty(productId: string, qty: number) {
	cart.update((items) => {
		return items
			.map((p: CartItem) => (p.id === productId ? { ...p, quantity: Math.max(0, qty) } : p))
			.filter((p: CartItem) => p.quantity > 0); // remove if qty = 0
	});
}

// ✅ Remove item completely
export function removeFromCart(productId: string) {
	cart.update((items) => items.filter((p: CartItem) => p.id !== productId));
}

// ✅ Clear cart
export function clearCart() {
	cart.set([]);
}
