<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		const constraints = await fetch('/api/constraints.json');
		const allConstraints = await constraints.json();

		return {
			props: {
				constraints: allConstraints
			}
		};
	};
</script>

<script lang="ts">
	export let constraints: any;
</script>

<svelte:head>
	<title>Medium Mashup: An Innovation Game</title>
	<meta property="og:title" content="Medium Mashup: An Innovation Game" />
</svelte:head>

<h3>Welcome to Medium Mashup!</h3>
<p>
	Medium Mashup is an Innovation Game where you invent a new tool to solve a specific persona's
	problem using randomly selected mediums and notations. The purpose of Medium Mashup is to help you
	move beyond features of a software tool to the underlying Mediums and Notations. Medium Mashup is
	an Innovation Game where you invent a new tool to solve a specific persona's problem using
	randomly selected Mediums and Notations. The purpose of Medium Mashup is to help you move beyond
	features of a software tool to the underlying Mediums and Notations.
</p>

<h2>The Setup</h2>
<p>
	You're a toolsmith. You specialize in building bespoke tools for specialized use cases with
	arbitrary constraints. You operate as a team under tight timelines, and you (almost) always
	deliver. I hope you're up for today's challenge!
</p>
<ul>
	<ol>
		<strong>Gather materials.</strong> You'll need the typical paper prototyping materials: unlined and
		grid paper, multi-colored sharpies, sticky notes, scissors, tape, highlighters, rulers.
	</ol>
	<ol>
		<strong>Form a team.</strong> We recommend a team of 3-5 persons.
	</ol>
	<ol>
		<strong>Discover the constraints.</strong> Draw 3 Medium and/or Notation cards from the Constraints
		deck. If you want to make it a bit easier, draw 4 cards and discard 1.
	</ol>
	<ol><strong>Get to know the client.</strong> Draw a Persona card. Read their background.</ol>
	<ol>
		<strong>Choose a Workflow Goal.</strong> Read the client's Workflow Goals aloud together and discuss.
		Choose one of the Workflow Goals that your team will build a tool for.
	</ol>
	<ol>
		<strong>Start building!</strong> You and your team have 90 minutes to design a new Tool that satisfies
		one of your Client's Workflow Goals while utilizing all of the Constraints.
	</ol>
	<ol>
		<strong>Present the solution.</strong> Give a brief (5-10 minutes?) presentation walking through
		the tool that your team came up with. Describe the workflow in detail.
	</ol>
</ul>

<h2>Advice for Presenting The Solution</h2>
<p>Here are some questions you might want to answer:</p>
<ul>
	<li>What did you choose to include and why?</li>
	<li>What did you leave out?</li>
	<li>
		What did you learn about the interactions of the constraints you were given (the mediums and/or
		notations)?
	</li>
</ul>

<h2>The Constraint Deck</h2>
<p>
	The Constraint deck consists of Mediums and Notations that must be used in the tool you design for
	the Client.
</p>

<ul>
	{#each constraints as constraint}
		<li>
			<span><a href={constraint.path}>{constraint.meta.title}</a></span>
		</li>
	{/each}
	<li><span>More coming soon...</span></li>
</ul>

<h2>The Persona Deck</h2>
<p>
	The Persona deck consists of clients with specific Workflow Goals that you must build a tool for.
</p>
<ul>
	<li><span>Historical Fiction Author</span></li>
	<li><span>Video Game Maker</span></li>
	<li><span>Construction Project Manager</span></li>
	<li><span>Children's Museum Curator</span></li>
	<li><span>More coming soon...</span></li>
</ul>
