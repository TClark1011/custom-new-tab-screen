import type { Load } from '@sveltejs/kit';
import pexels from '$/pexels';
import { randomInt } from '../utils';
import { A, D, flow, O, pipe } from '@mobily/ts-belt';
import type { ShadeKey } from 'coloring-palette';
import coloringPalette from 'coloring-palette';

export type PageData = {
	backgroundURL: string;
	colors: Record<Exclude<ShadeKey, `A${string}`>, string>;
};

const getRandomPageNumber = () => randomInt(1, 20);

const PAGE_SIZE = 20;

export const load: Load<never, never, never, PageData> = async () => {
	const photosResult = await pexels.photos.search({
		query: 'wallpaper',
		page: getRandomPageNumber(),
		per_page: PAGE_SIZE
	});

	if (pexels.typeCheckers.isError(photosResult)) {
		throw new Error(photosResult.error);
	}

	const selectedPhoto = pipe(photosResult.photos, A.shuffle, A.head, O.getExn);

	const baseColors = D.deleteKeys(coloringPalette(selectedPhoto.avg_color, 'hex'), [
		'A100',
		'A200',
		'A400',
		'A700'
	] as const);

	const colors = D.map(baseColors, flow(D.getUnsafe('color'), String));

	return {
		backgroundURL: selectedPhoto.src.original,
		colors
	};
};
