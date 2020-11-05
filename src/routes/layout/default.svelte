<script>
  import Nav from "../../components/Nav.svelte";
  import Logo from "../../components/Logo.svelte";
  import {
    Button,
    Icon
  } from "smelte";
  export let segment;
</script>
<style>
  nav {
    @apply p-2 m-2 border-b border-primary-500;
  }
</style>
<nav class="flex">
  <div>
    <Logo width="32" height="32" class="align-middle" />
    Server
  </div>
  <div class="flex-grow"></div>
  <div>
    <Button>Button</Button>
  </div>
</nav>

<Nav {segment} />

<main>
  <slot />
</main>
