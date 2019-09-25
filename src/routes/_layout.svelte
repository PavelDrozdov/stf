<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
.stf-wrapper {
	display: table;
	height: 100%;
	width: 100%;
	overflow: scroll;
}
main {
	margin: auto;
	max-width: 56em;
	background-color: white;
	padding: 2em;
	padding-bottom: 90px;
	margin: 0 auto;
	box-sizing: border-box;
}
</style>

<Nav {segment}/>
<div class="stf-wrapper">
	<main>
		<slot></slot>
	</main>
	<Footer />
</div>