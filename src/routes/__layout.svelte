<svelte:head>
	<style>
		body {
			max-width: 800px;
			margin: 0 auto;
			line-height: 1.44;
			font-size: 1.15em;
		}
	</style>
</svelte:head>
<header><h1><a href="/">Medium Mashup</a></h1></header>

<main>
	<slot />
</main>

<footer>
	<p>
		Code available <a href="https://github.com/jessmartin/medium-mashup">on GitHub</a>.
		Contributions welcome!
	</p>
	<p>A project by <a href="https://jessmart.in">Jess Martin</a>.</p>
</footer>
