<script>
  import ChipStore from "../../components/common/ChipStore.svelte";
  import Logo from "../../components/Logo.svelte";
</script>
<style>
  nav {
    @apply p-2 m-2 border-b border-primary;
  }
</style>
<nav class="flex">
  <div>
    <Logo width="32" height="32" class="align-middle" />
    Server
  </div>
  <div class="flex-grow"></div>
  <div>
  </div>
</nav>
<ChipStore />
<main>
  <slot />
</main>
