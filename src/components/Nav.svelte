<script>
  // components
  import { Menu, X } from '@bobthered/svelte-heroicons/medium'

  // data
  import { nav as items } from '../../site.config.js';

  // handlers
  const menuClickHandler = () => show = !show;

  // props
  export let segment;
  let show = false;
  let y;
</script>

<svelte:window bind:scrollY={y} />

<nav class="flex">
  <div class="absolute top-0 right-0 h-full w-14 z-30 md:hidden">
    <a
			href="./menu"
			on:click|preventDefault={menuClickHandler}
			class="absolute transition duration-200 top-0 left-0 py-7 px-4 w-14 {!show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}">
			<Menu />
		</a>
		<a
			href="./close"
			on:click|preventDefault={menuClickHandler}
			class="absolute transition duration-200 top-0 left-0 py-7 px-4 w-14 {show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}">
			<X />
		</a>
	</div>
	<div class="fixed flex flex-col p-4 w-screen h-screen top-0 left-0 transition duration-200 z-10 bg-white {show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} md:bg-transparent md:relative md:flex-row md:w-auto md:h-auto md:opacity-100 md:pointer-events-auto">
		{#each items as { text, href, ...item }}
			<a
				{href}
				class="uppercase py-4 transition duration-200 text-xl hover:text-primary-500 md:py-8 md:px-8 md:text-base">
				{text}
			</a>
		{/each}
	</div>
</nav>