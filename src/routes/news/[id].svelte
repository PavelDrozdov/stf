<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`news/${params.id}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { event: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let event;
</script>


<svelte:head>
	<title>{event.title}</title>
</svelte:head>

<h1>{event.title}</h1>

<div class='content'>
	{event.description}
</div>