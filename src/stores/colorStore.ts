import { writable } from 'svelte/store';
import type { Palette } from 'palette-by-numbers';

export const colorStore = writable<Palette | null>(null);
