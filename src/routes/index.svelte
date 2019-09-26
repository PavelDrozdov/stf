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
	import Card from '../components/Card.svelte';
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
.stf-news-cards-wrapper {
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 0.5em;
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

<div class="stf-news-cards-wrapper">
	{#each news as item}
		<Card item={item}/>
	{/each}
</div>
