<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faUser } from "@fortawesome/free-regular-svg-icons";
  import { faBars } from "@fortawesome/free-solid-svg-icons";

  import ChipStore from "$components/common/ChipStore.svelte";
  import Logo from "$components/Logo.svelte";
</script>

<style>
  nav {
    @apply p-2 m-2 border-b border-primary;
  }

  button {
    padding: 8px;
    font-size: 16px;
    line-height: 1;
    transition-duration: 0.5s;
    transition-property: background-color;

    @apply rounded-full;
  }

  button:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
</style>

<nav class="flex">
  <div>
    <button type="button"><Fa icon={faBars} /></button>
  </div>
  <div class="flex-grow text-center">
    Jewelry
    <Logo width="32" height="32" class="align-middle" />
    Server
  </div>
  <div>
    <button type="button"><Fa icon={faUser} /></button>
  </div>
</nav>
<ChipStore />
<main>
  <slot />
</main>
