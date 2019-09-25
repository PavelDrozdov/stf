<script context="module">
	export function preload() {
		return this.fetch(`/news.json`)
			.then(r => r.json())
			.then(news => {
				return { news };
			});
	}
</script>

<script>
	export let news; 
</script>

<style>
h1 {
	text-align: center;
	margin: 0 auto;
	font-size: 2.8em;
	text-transform: uppercase;
	font-weight: 700;
	margin: 0 0 0.5em 0;
}
@media (min-width: 480px) {
	h1 {
		font-size: 4em;
	}
}
</style>

<svelte:head>
	<title>Главная</title>
</svelte:head>

<h1>Great success!</h1>	


<ul>
	{#each news as item}
		<li><a rel='prefetch' href='news/{item.id}'>{item.title}</a></li>
	{/each}
</ul>