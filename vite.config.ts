import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

const config: UserConfig = {
	plugins: [sveltekit(), vanillaExtractPlugin()],
	ssr: {
		noExternal: ['@mobily/ts-belt', 'coloring-palette', 'pexels']
	}
};

export default config;
