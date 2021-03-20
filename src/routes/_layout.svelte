<script>
	// components
	import Header from '@components/Header.svelte';

	// props
	export let segment;
</script>

<main>
	<Header {segment} />
	<slot />
</main>
