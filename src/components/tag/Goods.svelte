<script>
  export let seq;
</script>
<style>
  @screen xs {
    article {
      @apply p-1 flex-auto;
    }
  }

  @screen sm {
    article {
      @apply p-1;

      flex: 0 0 50%;
    }
  }

  @screen md {
    article {
      @apply p-2;

      flex: 0 0 33.333333%;
    }
  }

  @screen lg {
    article {
      @apply p-3;

      flex: 0 0 25%;
    }
  }

  @screen xl {
    article {
      @apply p-4;

      flex: 0 0 20%;
    }
  }
</style>
<article>
  <figure class="mx-auto text-center">
    <img alt="Jewelry Name {seq}" src="https://picsum.photos/seed/{seq}/256/256" >
    <figcaption>Jewelry Name {seq}</figcaption>
  </figure>
</article>
