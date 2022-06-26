<!-- 
  Layout component needed due to lack of TypeScript support in mdsvex layouts.
  See [this comment](https://github.com/pngwn/MDsveX/issues/116#issuecomment-1008363113) for more info.
-->
<script lang="ts">
	export let name: any;
	export let workflowGoals: Array<String>;
</script>

<h1 class="text-3xl uppercase font-semibold mb-3">{name}</h1>

<h2 class="mb-3 text-2xl font-semibold">Workflow Goals</h2>
<ul class="mb-3 pl-10 list-disc">
	{#each workflowGoals as workflowGoal}
		<li>{workflowGoal}</li>
	{/each}
</ul>

<article>
	<slot />
</article>
