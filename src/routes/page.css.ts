import { createVar, style } from '@vanilla-extract/css';

export const backgroundImageVar = createVar();

export const root = style({
	height: '100%',
	width: '100%',
	position: 'relative'
});

export const bgImage = style({
	position: 'absolute',
	top: 0,
	right: 0,
	height: '100%',
	width: '100%',
	objectFit: 'cover'
});

export const content = style({
	position: 'absolute',
	top: 0,
	right: 0,
	height: '100%',
	width: '100%'
});
