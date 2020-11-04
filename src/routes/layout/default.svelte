<script>
  import Nav from "../../components/Nav.svelte";
  import Logo from "../../components/Logo.svelte";

  export let segment;
</script>

<nav class="flex">
  <div>
    <Logo width="32" height="32" class="align-middle" />
    Server
  </div>
  <div class="flex-grow"></div>
  <div>
    asd
  </div>
</nav>

<Nav {segment} />

<main>
  <slot />
</main>
