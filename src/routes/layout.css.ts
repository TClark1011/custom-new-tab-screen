import { style } from '@vanilla-extract/css';
import { themeClass } from '@/styles/theme.css';

export const content = style([
	themeClass,
	{
		height: '100vh',
		width: '100vw'
	}
]);
