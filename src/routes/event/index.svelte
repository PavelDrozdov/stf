<svelte:head>
	<title>Events</title>
</svelte:head>

<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`event.json`).then(r => r.json()).then(eventList => {
			return { eventList };
		});
	}
</script>

<script>
	export let eventList;
</script>

<ul>
	{#each eventList as event}
		<li><a rel='prefetch' href='event/{event.id}'>{event.title}</a></li>
	{/each}
</ul>