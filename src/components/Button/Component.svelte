<script>
  // components
  import Button from '@bobthered/svelte-button';

  // props
  export let color = 'primary';
  export let classes = {
    fontSize : 'text-xl',
    padding : 'py-3 px-10',
    rounded : 'rounded-full',
    textTransform : ''
  };

  $: if ( color === 'primary' ) {
    classes.bg = 'bg-primary-500 hover:bg-primary-600';
    classes.textColor = 'text-white';
  } else if ( color === 'gray' ) {
    classes.bg = 'bg-black bg-opacity-10 hover:bg-opacity-20 dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20';
    classes.textColor = 'text-gray-700 dark:text-white';
  }
</script>

<Button {...classes}><slot/></Button>