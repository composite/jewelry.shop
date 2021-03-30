<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faHeart as heartOff } from "@fortawesome/free-regular-svg-icons";
  import {
    faHeart as heartOn,
    faCartPlus,
  } from "@fortawesome/free-solid-svg-icons";

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

    @apply flex-auto m-1 rounded-md relative cursor-pointer;
  }

  article > span {
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.25s;
    line-height: 1;

    @apply opacity-0 block absolute top-0 left-0 m-2 p-1 text-white cursor-default;
  }

  article:hover > span {
    @apply opacity-100;
  }

  article > button {
    font-size: 0.85rem;
    background-color: rgba(0, 0, 0, 0.5);
    line-height: 1;
    transition-duration: 0.5s;
    transition-property: background-color, color;

    @apply rounded-full absolute right-0 m-2 p-2 text-white;
  }

  article > button:hover {
    background-color: rgba(255, 255, 255, 0.5);

    @apply text-black;
  }

  article > div {
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.25s;

    @apply opacity-0 block absolute bottom-0 left-0 right-0 h-0 px-2 py-4 text-white overflow-hidden cursor-auto;
  }

  article:hover > div {
    @apply opacity-100 h-auto;
  }

  article > div > button {
    border: 1px solid white;
    font-size: 0.85rem;
    line-height: 1;

    @apply rounded-full text-white float-right m-2 p-2;
  }

  article > div > h4 {
    text-overflow: ellipsis;
  }

  @screen ln {
    article {
      @apply flex-default;
    }
  }
</style>

<article
  style="background-image: url(https://loremflickr.com/240/320/diamond,ring/all?lock={seq})">
  <span>&dollar; 123.45</span>
  <button type="button"><Fa icon={heartOff} /></button>
  <div>
    <button type="button"><Fa icon={faCartPlus} /></button>
    <h4 class="text-xl font-bold">Jewelry Name {seq}</h4>
    <h5 class="text-sm">asd</h5>
  </div>
</article>
