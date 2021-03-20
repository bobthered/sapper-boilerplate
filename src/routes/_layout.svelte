<script>
	// components
	import Header from '@components/Header.svelte';

	// props
	export let segment;

	// stores
	import { header as height} from '@stores';
</script>

<main style="padding-top:{$height}px">
	<Header {segment} />
	<slot />
</main>
