import { writable } from 'svelte/store';
export default writable('default', set => () => set('default'));
