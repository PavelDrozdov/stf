<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
		background:#fff;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		color: #5b5a59;
		font-size: 18px;
		font-family: Source Sans Pro Semibold,Arial,sans-serif;
	}
	.logo {
		display:flex;
		align-items: center;
		text-decoration: none;
		color: #333;
		font-size: 18px;
		font-family: Source Sans Pro Semibold,Arial,sans-serif;
	}
</style>

<nav>
	<ul>
		<li class="logo">
			<img src="./logo.png" alt="">
			<a href='.'>STORM THE FRONT</a>
		</li>
		<li><a class='{segment === undefined ? "selected" : ""}' href='.'>Главная</a></li>
		<li><a rel=prefetch class='{segment === "event" ? "selected" : ""}' href='event'>Мероприятия</a></li>
		<li><a rel=prefetch class='{segment === "about" ? "selected" : ""}' href='about'>О нас</a></li>
	</ul>
</nav>