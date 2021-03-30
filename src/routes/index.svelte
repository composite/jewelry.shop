<script>
  import GoodsGrid from '$components/common/GoodsGrid.svelte';
</script>

<style lang="scss">
  article.prose-xl {
    & > * {
      max-width: 50%;
    }
  }
</style>

<svelte:head>
  <title>Jewery Server</title>
</svelte:head>

<article class="prose-xl max-w-none py-4 bg-blue-200">
  <h2 class="mx-auto">Jewelry</h2>
  <p class="mx-auto">Our jewelry builds on a legacy of over 180 years of craftsmanship with beautifully designed necklaces and pendants, bracelets, rings and more.</p>
</article>

<GoodsGrid list={Array(10)} />
