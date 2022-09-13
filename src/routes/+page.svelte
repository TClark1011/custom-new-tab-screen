<script lang="ts">
	import { onMount } from 'svelte';
	import { colorStore } from '@/stores/colorStore';
	import type { PageData } from './+page.server';
	import * as styles from './page.css';
	import dayjs from 'dayjs';
	import { assignInlineVars } from '@vanilla-extract/dynamic';

	export let data: PageData;
	let time = dayjs();

	onMount(() => {
		colorStore.set(data.colors);
		setInterval(() => {
			time = dayjs();
		}, 1000);
	});

	let polygonRef: SVGPolygonElement;
	$: contentWidth = (polygonRef?.getBoundingClientRect?.()?.width ?? 0) * 0.9;
</script>

<div class={styles.root}>
	<!-- svelte-ignore a11y-missing-attribute -->
	<img src={data.backgroundURL} class={styles.bgImage} />
	<svg viewBox="0 0 100 100" preserveAspectRatio="none" class={styles.shape}>
		<polygon points="0,0 40,0 30,100 0,100" bind:this={polygonRef} />
	</svg>
	<div
		class={styles.content}
		style={assignInlineVars({ [styles.contentWidthVar]: `${contentWidth}px` }).toString()}
	>
		<div class={styles.contentText}>
			<div class={styles.time}>{time.format('HH:mm:ss')}</div>
			<div class={styles.divider} />
			<div class={styles.date}>{time.format('MMMM DD')}</div>
		</div>
	</div>
</div>
