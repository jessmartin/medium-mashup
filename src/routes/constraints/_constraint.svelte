<script>
	import Layout from './Layout.svelte';
	export let title = '';
	export let description = '';
	export let inventors = '';
	export let year = '';
	export let constraintType = '';
	export let image = '';
</script>

<Layout {title} {description} {inventors} {year} {constraintType} {image}>
	<slot />
</Layout>
