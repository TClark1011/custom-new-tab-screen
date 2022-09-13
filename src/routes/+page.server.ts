import type { Load } from '@sveltejs/kit';
import pexels from '$/pexels';
import { randomChance, randomInt, takeRandom, takeRandomUntilSatisfied } from '../utils';
import { F } from '@mobily/ts-belt';
import type { Photo } from 'pexels';
import { WALLPAPER_KEYWORDS } from '../constants';
import type { Palette } from 'palette-by-numbers';
import { generatePalette } from 'palette-by-numbers';

export type PageData = {
	backgroundURL: string;
	colors: Palette;
};

const getRandomPageNumber = () => randomInt(1, 40);

const PAGE_SIZE = 20;

const photoIsLandscape = (photo: Photo) => photo.width > photo.height;
const photoIsLargeEnough = (photo: Photo) => photo.width > 1920 && photo.height > 1080;

const photoCanBeUsedAsWallpaper = F.both(photoIsLandscape, photoIsLargeEnough);

export const load: Load<never, never, never, PageData> = async () => {
	const randomExtraKeyword = takeRandom(WALLPAPER_KEYWORDS);
	const useExtraKeyword = randomChance(0.6);

	const photosResult = await pexels.photos.search({
		query: `wallpaper ${useExtraKeyword ? randomExtraKeyword : ''}`,
		page: getRandomPageNumber(),
		per_page: PAGE_SIZE
	});

	if (pexels.typeCheckers.isError(photosResult)) {
		throw new Error(photosResult.error);
	}

	const selectedPhoto = takeRandomUntilSatisfied(photosResult.photos, photoCanBeUsedAsWallpaper);

	if (!selectedPhoto) {
		throw new Error('No landscape photos found');
	}

	const colors = generatePalette(selectedPhoto.avg_color);

	return {
		backgroundURL: selectedPhoto.src.original,
		colors
	};
};
