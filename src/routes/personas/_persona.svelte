<script>
	import Layout from './PersonaLayout.svelte';
	export let name = '';
	export let workflowGoals = [];
</script>

<Layout {name} {workflowGoals}>
	<slot />
</Layout>
