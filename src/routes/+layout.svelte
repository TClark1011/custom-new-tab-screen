<script lang="ts">
	import * as styles from './layout.css';
	import '@/styles/global.css';
</script>

<svelte:head>
	<title>Set in layout</title>
</svelte:head>

<main class={styles.content}>
	<slot />
</main>
