<script>
	import { onMount } from 'svelte';
	import { run, showPreferences } from 'vanilla-cookieconsent';
	import config from '$lib/cookieconsent-config';
	import 'vanilla-cookieconsent/dist/cookieconsent.css';

	/**
	 * Only run plugin on the client side
	 */
	onMount(() => {
		run(config);
	});
</script>

<button on:click={showPreferences}>Datenschutzeinstellungen</button>