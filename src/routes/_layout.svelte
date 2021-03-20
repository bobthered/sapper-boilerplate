<script>
	// components
	import Header from '@components/Header/Header.svelte';

	// props
	export let segment;

	// stores
	import headerHeight from '@components/Header/Header.store.js';
</script>

<main style="padding-top:{$headerHeight}px">
	<Header {segment} />
	<slot />
</main>
