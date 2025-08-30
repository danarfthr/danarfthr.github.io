<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

{@render children?.()}

<style>
	:global(html) {
		height: 100%;
	}
	
	:global(body) {
		min-height: 100%;
		margin: 0;
		padding: 0;
	}
</style>
