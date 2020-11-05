<script>
  import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";
  import Default from "./layout/default.svelte";
  import layoutStore from '../store/layout';
  let layout;
  layoutStore.subscribe($l => {
    switch($l) {
      case 'empty': layout = null;break;
      default: layout = Default;break;
    }
  })
  export let segment;
  const location = writable({});
  setContext('location', { subscribe: location.subscribe });
  onMount(() => historyChange({target: window}));
  function historyChange(e) {
    const { href, protocol, host, hostname, port, pathname, search, hash, origin } = e.target.location;
    const parameters = search.split('&').reduce((map, kv) => {
      kv = kv.split('=');
      const k = kv[0], v = kv[1];
      if(k in map) {
        if(v || v === '') {
          if(Array.isArray(map[k])) map[k].push(v);
          else map[k] = [map[k], v];
        }
      } else map[k] = v;
      return map;
    }, {});
    $location = { href, protocol, host, hostname, port, pathname, search, hash, origin, parameters };
  }
</script>
<svelte:window on:history={historyChange} on:popstate={historyChange} />
{#if layout}
<svelte:component this={layout} {segment}><slot /></svelte:component>
{:else}
<main><slot/></main>
{/if}
