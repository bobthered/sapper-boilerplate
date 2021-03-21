<script>
  // components
  import Button from '@components/Button';
  import Checkbox from '@components/Checkbox';

  // handlers
  const clearLocalStorage = e => {
    e.preventDefault();
    localStorage.clear();
  }
  const updateSteps = () => localStorage.setItem('siteInit', JSON.stringify({steps}))

  // libraries
  import { onMount } from 'svelte';

  // props
  let steps = [
    {complete: false, text: 'Create .env file'},
    {complete: false, text: 'Set MONGO_DB value in .env'},
    {complete: false, text: 'Set MONGO_URL value in .env'},
    {complete: false, text: 'Update "nav" in site.config.js'},
    {complete: false, text: 'Update "theme" in site.config.js'},
  ];

  // stores
  import { store as header } from '@components/Header';

  // site specific settings
  $header.classes.display = 'hidden';

  // onMount
  onMount(() => {
    if ( localStorage.getItem('siteInit') === null ) updateSteps();
    const siteInit = JSON.parse(localStorage.getItem('siteInit'));
    steps = siteInit.steps;
  });
</script>

<section class="min-h-screen min-w-screen flex flex-col items-center justify-center">
  <div class="fixed bottom-0 right-0 p-4 md:bottom-auto md:top-0">
    <Button on:click={clearLocalStorage}>Clear</Button>
  </div>
  <div class="p-4 flex flex-col w-full flex-grow space-y-8 md:flex-grow-0 md:w-auto">
    {#each steps as { complete, text }}
      <Checkbox bind:complete {text} on:change={updateSteps} />
    {/each}
  </div>
</section>