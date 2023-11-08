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

<button class="fixed left-2 bottom-2 p-2 bg-[#8c8c8c] bg-opacity-90 shadow-xl text-white rounded-sm" on:click={showPreferences}>Datenschutzeinstellungen</button>