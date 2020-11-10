<script>
  export let seq;
</script>
<style>
  article {
    @apply flex-auto m-1;
  }

  @screen ln {
    article {
      @apply flex-default;
    }
  }
</style>
<article>
  <figure class="mx-auto text-center">
    <img alt="Jewelry Name {seq}" src="https://loremflickr.com/240/320/diamond,ring/all?lock={seq}" width="100%" height="100%" >
    <figcaption>Jewelry Name {seq}</figcaption>
  </figure>
</article>
