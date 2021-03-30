<script>
  import simplebar from '$utils/front/simplebar';

  import Chip from "$components/tag/Chip.svelte";

</script>
<style lang="scss">
  .wrapper {
    @apply flex mx-2 pb-2;

    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    &::-webkit-scrollbar { display: none; }
  }
</style>
<nav class="wrapper" use:simplebar>
  <Chip>Rings</Chip>
  <Chip>Earrings</Chip>
  <Chip>Bracelets</Chip>
  <Chip>Necklaces</Chip>
  <Chip>Watches</Chip>
  <Chip>Jewelry Sets</Chip>
  <Chip>Jewelry Accessories</Chip>
  <Chip>Jewelry Sale</Chip>
  <Chip>Men's Jewelry</Chip>
  <Chip>Kid's Jewelry</Chip>
</nav>

