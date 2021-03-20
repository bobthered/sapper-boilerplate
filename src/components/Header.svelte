<script>
  // components
  import Logo from '@components/Logo.svelte';
  import Nav from '@components/Nav.svelte';

  // props
  export let segment;

  // store
  import { header as height } from '@stores';

  // style
  export let bg = 'bg-white';
  export let display = 'flex';
  export let justify = 'justify-center';
  export let position = 'fixed top-0 left-0';
  export let shadow = 'shadow';
  export let width = 'w-full';
  export let z = 'z-20';

  $: classes = {
    bg,
    display,
    justify,
    position,
    shadow,
    width,
    z
  }
</script>

<header
  class={Object.values(classes).join(' ')}
  bind:clientHeight={$height}>
  <div class="container px-4 flex justify-between">
    <a
      href="./"
      class="flex space-x-2 items-center py-4 transition duration-200 hover:text-primary-500">
      <Logo class="w-12 h-12 md:w-16 md:h-16" />
    </a>
    <div class="flex items-stretch">
      <Nav {segment} />
    </div>
  </div>
</header>