<script>
  import Fa from 'svelte-fa'
  import { faHeart } from '@fortawesome/free-regular-svg-icons'

  export let seq;
  export let info;
</script>
<style>
  article {
    --goods-width: 240px;

    width: var(--goods-width);
    height: calc(var(--goods-width) * 3 / 2);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @apply flex-auto m-1 rounded-md relative;
  }

  article > :global(svg) {
    border: 1px solid white;
  }

  @screen ln {
    article {
      @apply flex-default;
    }
  }
</style>
<article style="background-image: url(https://loremflickr.com/240/320/diamond,ring/all?lock={seq})">
  <Fa icon={faHeart} />
  Jewelry Name {seq}
</article>
