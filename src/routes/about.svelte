<script>
  import { onMount } from 'svelte';
  import layout from '../store/layout';

	onMount(() => {
		layout.set('empty');
	});

</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About this site</h1>

<p>This is the 'about' page. There's not much here.</p>
