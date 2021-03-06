<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		const constraints = await fetch('/api/constraints.json');
		const allConstraints = await constraints.json();
		const personas = await fetch('/api/personas.json');
		const allPersonas = await personas.json();

		return {
			props: {
				constraints: allConstraints,
				personas: allPersonas
			}
		};
	};
</script>

<script lang="ts">
	export let constraints: any;
	export let personas: any;
</script>

<svelte:head>
	<title>Medium Mashup: An Innovation Game</title>
	<meta property="og:title" content="Medium Mashup: An Innovation Game" />
</svelte:head>

<h3 class="text-2xl mb-3">Welcome to Medium Mashup!</h3>
<p class="mb-3">
	Medium Mashup is an Innovation Game where you invent a new tool to solve a specific persona's
	problem using randomly selected mediums and notations. The purpose of Medium Mashup is to help you
	move beyond features of a software tool to the underlying Mediums and Notations. Medium Mashup is
	an Innovation Game where you invent a new tool to solve a specific persona's problem using
	randomly selected Mediums and Notations.
</p>
<p class="mb-3">
	The purpose of Medium Mashup is to help you move beyond features of a software tool to the
	underlying Mediums and Notations.
</p>

<h2 class="mb-3 text-3xl">The Setup</h2>
<p class="mb-3">
	You're a toolsmith. You specialize in building bespoke tools for specialized use cases with
	arbitrary constraints. You operate as a team under tight timelines, and you (almost) always
	deliver. I hope you're up for today's challenge!
</p>
<ol class="mb-3 list-decimal pl-10">
	<li>
		<strong>Gather materials.</strong> You'll need the typical paper prototyping materials: unlined and
		grid paper, multi-colored sharpies, sticky notes, scissors, tape, highlighters, rulers.
	</li>
	<li>
		<strong>Form a team.</strong> We recommend a team of 3-5 persons.
	</li>
	<li>
		<strong>Discover the constraints.</strong> Draw 3 Medium and/or Notation cards from the Constraints
		deck. If you want to make it a bit easier, draw 4 cards and discard 1.
	</li>
	<li><strong>Get to know the client.</strong> Draw a Persona card. Read their background.</li>
	<li>
		<strong>Choose a Workflow Goal.</strong> Read the client's Workflow Goals aloud together and discuss.
		Choose one of the Workflow Goals that your team will build a tool for.
	</li>
	<li>
		<strong>Start building!</strong> You and your team have 90 minutes to design a new Tool that satisfies
		one of your Client's Workflow Goals while utilizing all of the Constraints.
	</li>
	<li>
		<strong>Present the solution.</strong> Give a brief (5-10 minutes?) presentation walking through
		the tool that your team came up with. Describe the workflow in detail.
	</li>
</ol>

<h2 class="mb-3 text-3xl">Advice for Presenting The Solution</h2>
<p class="mb-3">Here are some questions you might want to answer:</p>
<ul class="mb-3 pl-10 list-disc">
	<li>What did you choose to include and why?</li>
	<li>What did you leave out?</li>
	<li>
		What did you learn about the interactions of the constraints you were given (the mediums and/or
		notations)?
	</li>
</ul>

<h2 class="mb-3 text-3xl">The Constraint Deck</h2>
<p class="mb-3">
	The Constraint deck consists of Mediums and Notations that must be used in the tool you design for
	the Client.
</p>

<ul class="mb-3 pl-10 list-disc">
	{#each constraints as constraint}
		<li>
			<span
				><a class="border-b-2 border-slate-300 hover:border-slate-700" href={constraint.path}
					>{constraint.meta.title}</a
				></span
			>
		</li>
	{/each}
	<li><span>More coming soon...</span></li>
</ul>

<h2 class="mb-3 text-3xl">The Persona Deck</h2>
<p class="mb-3">
	The Persona deck consists of clients with specific Workflow Goals that you must build a tool for.
</p>
<ul class="mb-3 pl-10 list-disc">
	{#each personas as persona}
		<li>
			<span
				><a class="border-b-2 border-slate-300 hover:border-slate-700" href={persona.path}
					>{persona.meta.name}</a
				></span
			>
		</li>
	{/each}
</ul>
