export const get = async () => {
	const allPersonaFiles = import.meta.glob('../personas/*.md');
	const iterablePersonaFiles = Object.entries(allPersonaFiles);

	const allPersonas = await Promise.all(
		iterablePersonaFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const personaPath = path.slice(2, -3);

			return {
				meta: metadata,
				path: personaPath
			};
		})
	);

	return {
		body: allPersonas
	};
};
