<!-- 
  Layout component needed due to lack of TypeScript support in mdsvex layouts.
  See [this comment](https://github.com/pngwn/MDsveX/issues/116#issuecomment-1008363113) for more info.
-->
<script type="ts">
	export let title: any;
	export let description: any;
	export let inventors: any;
	export let year: any;
	export let constraintType: any;
	export let image: any;
	export let exemplars: Array<Exemplar>;

	interface Exemplar {
		title: string;
		image: string;
	}
</script>

<div class="mt-5 md:w-2xl md:h-96 rounded-md shadow-lg">
	<div class="w-56 h-96 float-left rounded-l-md border-r-2">
		<img src="/{image}" alt={title} class="h-full w-full object-cover" />
	</div>
	<div class="ml-56 p-3">
		<span
			class="text-slate-200 bg-slate-800 uppercase text-sm font-semibold float-right p-2 rounded-md"
			>{constraintType}</span
		>
		<h1 class="text-3xl uppercase font-semibold">{title}</h1>

		<p class="text-lg">👥 {inventors}</p>
		<p class="text-lg">⏳ {year}</p>
		<p class="text-xl">{description}</p>

		<article>
			<slot />
		</article>

		<ul class="flex flex-wrap">
			{#each exemplars as exemplar}
				<li class="flex-shrink-0 w-32 h-32 bg-slate-800">{exemplar.title}</li>
			{/each}
		</ul>
	</div>
</div>
