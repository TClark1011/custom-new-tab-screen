import { createVar, style } from '@vanilla-extract/css';
import { themeVars } from '../styles/theme.css';

export const backgroundImageVar = createVar();
export const contentWidthVar = createVar();

export const root = style({
	height: '100%',
	width: '100%',
	position: 'relative',
	overflow: 'hidden'
});

export const bgImage = style({
	position: 'absolute',
	top: 0,
	left: 0,
	height: '100%',
	width: '100%',
	objectFit: 'cover',
	backgroundColor: themeVars.colors.primary['200']
});

export const shape = style({
	fill: themeVars.colors.primary['800'],
	position: 'absolute'
});

export const content = style({
	position: 'absolute',
	top: 0,
	left: 0,
	height: '100%',
	width: contentWidthVar,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	fontFamily: themeVars.font.heading,
	color: 'white'
});

export const contentText = style({
	width: '400px'
});

export const time = style({
	fontSize: '80px'
});

export const divider = style({
	width: '100%',
	height: '3px',
	backgroundColor: 'white',
	marginTop: themeVars.spacing.sm,
	marginBottom: themeVars.spacing.sm
});

export const date = style({
	fontSize: '5rem'
});
