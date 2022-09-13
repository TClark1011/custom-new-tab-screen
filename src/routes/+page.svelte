<script lang="ts">
	import { primaryColorVars } from '@/styles/theme.css';
	import { assignInlineVars } from '@vanilla-extract/dynamic';

	import type { PageData } from './+page.server';
	import * as styles from './page.css';

	export let data: PageData;
</script>

<div class={styles.root} style={assignInlineVars(primaryColorVars, data.colors).toString()}>
	<!-- svelte-ignore a11y-missing-attribute -->
	<img src={data.backgroundURL} class={styles.bgImage} />
	<!-- <div class={styles.content} style={assign}>Hi</div> -->
</div>
