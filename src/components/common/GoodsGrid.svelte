<script>
  import Goods from '$components/tag/Goods.svelte';

  export let list = [];

  $: {
    if(!Array.isArray(list)) {
      list = [];
    }
  }
</script>
<style>
  .goods-list {
    @apply w-full flex flex-wrap justify-around;
  }
</style>
<section class="goods-list">
  {#each list as info, i}
  <Goods seq="{i+1}" {info} />
  {/each}
</section>
