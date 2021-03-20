<script>
  // stores
  import store from './store';
  
  $: classes = store ? 'dark' : '';
</script>

<div class={classes}>
  <slot/>
</div>