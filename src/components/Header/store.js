// libraries
import { writable } from 'svelte/store';

export default writable({
  classes: {
    bg: 'bg-white',
    display: 'flex',
    justify: 'justify-center',
    position: 'fixed top-0 left-0',
    shadow: 'shadow',
    width: 'w-full',
    z: 'z-20',
  },
  height: 0,
});
