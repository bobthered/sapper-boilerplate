<script>
	// components
	import Darkmode from '@components/Darkmode';
	import Header from '@components/Header';
	import Main from '@components/Main';

	// props
	export let segment;
</script>

<Darkmode>
	<Main>
		<Header {segment} />
		<slot />
	</Main>
</Darkmode>