<script>
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
</script>

{#if layout}
<svelte:component this={layout} {segment}><slot /></svelte:component>
{:else}
<main><slot/></main>
{/if}
