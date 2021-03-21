<script>
  // components
  import { Check } from '@bobthered/svelte-heroicons/small';

  // props
  export let complete = false;
  export let text = '';
</script>

<label class="flex relative cursor-pointer group items-center">
  <input type="checkbox" class="w-0 h-0 opacity-0 absolute top-0 left-0" bind:checked={complete} on:change />
  <div class="w-7 h-7 p-1 mr-4 rounded-md transition-all duration-200 text-white ring-2 ring-transparent ring-offset-1 {complete ? 'bg-primary-500 ring-offset-primary-500' : 'bg-gray-100 ring-offset-gray-200'} group-hover:ring-offset-primary-500">
    <Check class="w-full h-full transition duration-200 transform {complete ? 'scale-100':'scale-0'}" />
  </div>
  <div>{text}</div>
</label>