<script lang="ts">
	import Layout from './Layout.svelte';
	export let title = '';
	export let description = '';
	export let inventors = '';
	export let year = '';
	export let constraintType = '';
	export let image = '';
	export let exemplars: Array<Exemplar> = [];

	interface Exemplar {
		title: string;
		image: string;
	}
</script>

<Layout {title} {description} {inventors} {year} {constraintType} {image} {exemplars}>
	<slot />
</Layout>
