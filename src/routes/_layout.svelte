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
	margin: 0;
}
</style>

<Nav {segment}/>
<div class="stf-wrapper">
	<main>
		<slot></slot>
	</main>
	<Footer />
</div>