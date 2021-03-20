<script>
	// components
	import { Component as Darkmode } from '@components/Darkmode';
	import { Component as Header } from '@components/Header';
	import { Component as Main } from '@components/Main';

	// props
	export let segment;
</script>

<Darkmode>
	<Main>
		<Header {segment} />
		<slot />
	</Main>
</Darkmode>