import { writable } from 'svelte/store';
import io from 'socket.io-client';

export default writable(io());
