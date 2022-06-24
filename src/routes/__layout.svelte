<script lang="ts">
	import '../app.css';
</script>

<svelte:head>
	<style>
		body {
			line-height: 1.44;
			font-size: 1.15em;
		}
	</style>
</svelte:head>
<header class="mr-auto ml-auto pr-2 pl-2 max-w-3xl">
	<h1 class="mb-3 mt-3 text-3xl">
		<a class="border-b-2 border-slate-300 hover:border-slate-700" href="/">Medium Mashup</a>
	</h1>
</header>

<main class="mr-auto ml-auto pr-2 pl-2 max-w-3xl">
	<slot />
</main>

<footer class="mt-5 mr-auto ml-auto pr-2 pl-2 max-w-3xl">
	<p class="mb-3">
		Code available <a
			class="border-b-2 border-slate-300 hover:border-slate-700"
			href="https://github.com/jessmartin/medium-mashup">on GitHub</a
		>. Contributions welcome!
	</p>
	<p class="mb-3">
		A project by <a
			class="border-b-2 border-slate-300 hover:border-slate-700"
			href="https://jessmart.in">Jess Martin</a
		>.
	</p>
</footer>
