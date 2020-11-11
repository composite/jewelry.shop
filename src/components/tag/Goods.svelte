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
    height: calc(var(--goods-width) * 4 / 3);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @apply flex-auto m-1 rounded-md relative;
  }

  article > button {
    font-size: 0.85rem;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.5rem 0.6rem;

    @apply rounded-full absolute right-0 m-2 text-white;
  }

  @screen ln {
    article {
      @apply flex-default;
    }
  }
</style>
<article style="background-image: url(https://loremflickr.com/240/320/diamond,ring/all?lock={seq})">
  <button><Fa icon={faHeart} /></button>
  Jewelry Name {seq}
</article>
