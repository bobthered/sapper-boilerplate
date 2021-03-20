// library
import { writable } from 'svelte/store';

export default writable({
  addTopPadding: true,
  classes: 'font-overpass dark:bg-gray-800 dark:text-white',
  y: 0,
});
