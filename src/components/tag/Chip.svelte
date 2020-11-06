<script>
  import Fa from 'svelte-fa'
  import { faFlag } from '@fortawesome/free-solid-svg-icons'

  export let size = '';
  export let color = '';
  export let textColor = '';

  const TEXT_WHITE_COLORS = ['primary','secondary','error','success','alert','dark'];
</script>
<style>
  span {
    @apply px-4 py-2 ml-1 mb-1 rounded-full;

    display: inline-block;
  }
</style>
<span
  {...$$restProps}
  class="{[size, color, textColor, $$restProps.class].join(' ').trim()}"
  class:bg-primary={!TEXT_WHITE_COLORS.includes(color) || color === TEXT_WHITE_COLORS[0]}
  class:bg-secondary={color === 'secondary'}
  class:bg-error={color === 'error'}
  class:bg-success={color === 'success'}
  class:bg-alert={color === 'alert'}
  class:bg-dark={color === 'dark'}
  class:text-white={!color || TEXT_WHITE_COLORS.includes(color)}
  class:text-xs={size === 'xs'}
  class:text-sm={size === 'sm'}
  class:text-2xl={size === 'lg'}
  class:text-4xl={size === 'xl'}
><Fa icon={faFlag} /> <slot/></span>
