<script context="module">
	export async function preload({ params, query }) {
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
<div class="stf-article">
	<h1>{event.title}</h1>

	<div class='content'>
		{@html event.html}
	</div>
</div>
