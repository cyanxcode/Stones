import { writable } from 'svelte/store';

export const isSheetOpen = writable(false);

export function openSheet() {
	isSheetOpen.update(() => true);
}
export function closeSheet() {
	isSheetOpen.update(() => false);
}
export function toggleSheet() {
	isSheetOpen.update((s) => !s);
}

export { default as Sheet } from './Sheet.svelte';
