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

<style lang="scss" global>
  @import "./styles/common.scss";
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

{#if layout}
<svelte:component this={layout} {segment}><slot /></svelte:component>
{:else}
<main><slot/></main>
{/if}
