<script>
  // components
  import { Component as Header } from '@components/Header';

  // props
  let y;

  // stores
  import { store as header } from '@components/Header';
  import {default as main} from './store';

	$: style = $main.addTopPadding ? `padding-top:${$header.height}px` : ''
  $: $main.y = y;
</script>

<svelte:window bind:scrollY={y} />

<!-- svelte-ignore component-name-lowercase -->
<main class="min-h-screen {$main.classes}" {style}>
	<slot />
</main>