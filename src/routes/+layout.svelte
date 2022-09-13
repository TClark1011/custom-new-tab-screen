<script lang="ts">
	import * as styles from './layout.css';
	import '@/styles/global.css';
	import { assignInlineVars } from '@vanilla-extract/dynamic';
	import { colorStore } from '@/stores/colorStore';
	import { primaryColorVars } from '../styles/theme.css';

	$: extraStyles = $colorStore ? assignInlineVars(primaryColorVars, $colorStore).toString() : '';
</script>

<svelte:head>
	<title>Set in layout</title>
	<link rel="stylesheet" href="node_modules/modern-normalize/modern-normalize.css" />
</svelte:head>

<main class={styles.content} style={extraStyles}>
	<slot />
</main>
