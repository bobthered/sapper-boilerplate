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

<section class="min-h-screen min-w-screen flex items-center justify-center">
  <div class="absolute top-0 right-0 p-4">
    <Button on:click={clearLocalStorage}>Clear</Button>
  </div>
  <div class="container p-4 mx-auto flex flex-wrap">
    <div class="flex flex-wrap w-full">
      <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6 space-y-8">
        {#each steps as { complete, text }}
          <Checkbox {complete} {text} on:change={updateSteps} />
        {/each}
      </div>
      <img class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://dummyimage.com/1200x500" alt="step">
    </div>
  </div>
</section>