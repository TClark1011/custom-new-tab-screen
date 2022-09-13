import { writable } from 'svelte/store';
import type { ShadeKey } from 'coloring-palette';

export const colorStore = writable<Record<Exclude<ShadeKey, `A${string}`>, string> | null>(null);
