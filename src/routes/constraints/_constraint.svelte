<script lang="ts">
	import Layout from './Layout.svelte';
	export let title = '';
	export let description = '';
	export let inventors = '';
	export let year = '';
</script>

<Layout {title} {description} {inventors} {year}>
	<slot />
</Layout>
