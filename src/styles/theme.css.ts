import { createTheme, createThemeContract, createVar } from '@vanilla-extract/css';
import type { MaterialColorPalette } from '../lib/material-dynamic-colors';

export const primaryColorVars = createThemeContract({
	50: null,
	100: null,
	200: null,
	300: null,
	400: null,
	500: null,
	600: null,
	700: null,
	800: null,
	900: null
});

export const theme = createTheme({
	colors: {
		primary: primaryColorVars,
		gray: {
			'50': '#CCD2DA',
			'100': '#C0C8D2',
			'200': '#A9B3C1',
			'300': '#919EB0',
			'400': '#79899F',
			'500': '#64748B',
			'600': '#4D596A',
			'700': '#353E4A',
			'800': '#1E2229',
			'900': '#060708'
		}
	}
});
