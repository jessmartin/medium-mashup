export const get = async () => {
	const allConstraintFiles = import.meta.glob('../constraints/*.md');
	const iterableConstraintFiles = Object.entries(allConstraintFiles);

	const allConstraints = await Promise.all(
		iterableConstraintFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const constraintPath = path.slice(2, -3);

			return {
				meta: metadata,
				path: constraintPath
			};
		})
	);

	return {
		body: allConstraints
	};
};
