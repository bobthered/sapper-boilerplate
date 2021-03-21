<script>
  // components
  import { Component as Button } from '@components/Button';
  import { Moon, Sun } from '@bobthered/svelte-heroicons/medium';
  import Logo from '@components/Logo.svelte';
  import Nav from '@components/Nav.svelte';

  // handlers
  const toggleDarkMode = e => {
    e.preventDefault();
    $darkmode = !$darkmode;
    if ( $header.classes.bg === 'bg-white' ) {
      $header.classes.bg = 'bg-gray-800';
    } else if ( $header.classes.bg === 'bg-gray-800' ) {
      $header.classes.bg = 'bg-white';
    }
  }

  // props
  export let segment;

  // store
  import { store as darkmode } from '@components/Darkmode';
  import { default as header } from './store';
</script>

<!-- svelte-ignore component-name-lowercase -->
<header
  class="{Object.values($header.classes).join(' ')}"
  bind:clientHeight={$header.height}>
  <div class="container px-4 flex justify-between">
    <a
      href="./"
      class="flex space-x-2 items-center py-4 transition duration-200 hover:text-primary-500">
      <Logo class="w-12 h-12 md:w-16 md:h-16" />
    </a>
    <div class="flex items-center">
      <Nav {segment} />
      <Button color="primary" padding="py-4 px-8" on:click={toggleDarkMode}>
        <svelte:component this={$darkmode ? Moon : Sun} class='w-6 h-6' />
      </Button>
    </div>
  </div>
</header>