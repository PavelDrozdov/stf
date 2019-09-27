<svelte:head>
	<title>Events</title>
</svelte:head>

<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`event.json`).then(r => r.json()).then(events => {
			return { events };
		});
	}
</script>

<script>
	export let events;
	import Card from '../../components/Card.svelte';
</script>

<div class="stf-article">
	<div class="stf-news-cards-wrapper">
		{#each events as event}
			<Card href={'event/'} item={event}/>
		{/each}
	</div>
</div>