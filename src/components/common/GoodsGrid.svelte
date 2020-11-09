<script>
  import Goods from '../tag/Goods.svelte';
</script>
<style>
  .goods-list {
    @apply w-full flex flex-wrap justify-around;
  }
</style>
<section class="goods-list">
  {#each Array(10) as _, i}
  <Goods seq="{i+1}" />
  {/each}
</section>
