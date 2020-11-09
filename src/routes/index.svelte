<script>
  import { onMount, getContext } from 'svelte';
  import layout from '../store/layout';
  const location = getContext('location');
	onMount(() => {
		layout.set('');
	});
  //$: console.log($location);
</script>

<style>
  article.prose-xl {
    & > * {
      max-width: 50%;
    }
  }

  .goods-list {
    @apply w-full flex flex-wrap justify-around;
  }

  @screen xs {
    .goods-list > article {
      @apply p-1 flex-auto;
    }
  }

  @screen sm {
    .goods-list > article {
      @apply p-1;

      flex: 0 0 50%;
    }
  }

  @screen md {
    .goods-list > article {
      @apply p-2;

      flex: 0 0 33.333333%;
    }
  }

  @screen lg {
    .goods-list > article {
      @apply p-3;

      flex: 0 0 25%;
    }
  }

  @screen xl {
    .goods-list > article {
      @apply p-4;

      flex: 0 0 20%;
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

<section class="goods-list">
  {#each Array(10) as _, i}
  <article>
    <figure class="mx-auto text-center">
      <img alt="Jewelry Name {i+1}" src="https://picsum.photos/seed/{i+1}/256/256" >
      <figcaption>Jewelry Name {i+1}</figcaption>
    </figure>
  </article>
  {/each}
</section>
