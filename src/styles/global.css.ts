import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
	margin: 0,
	padding: 0,
	fontSize: '1rem'
});

globalStyle('ul, ol', {
	listStyle: 'none'
});
