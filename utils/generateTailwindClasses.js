/**
 * Generates Tailwind CSS classes based on a prefix and responsive attributes.
 *
 * @param {string} prefix         - The Tailwind class prefix (e.g., 'py', 'px', 'space-y')
 * @param {Object} attribute      - An object containing responsive breakpoint values
 * @param {string} [attribute.xs] - Value for extra small screens (default)
 * @param {string} [attribute.sm] - Value for small screens
 * @param {string} [attribute.md] - Value for medium screens
 * @param {string} [attribute.lg] - Value for large screens
 * @param {string} [attribute.xl] - Value for extra large screens
 * @return {string} Space-separated Tailwind classes
 * @example
 * // Returns "py-4 md:py-6 lg:py-8"
 * generateTailwindClasses('py', { xs: '4', md: '6', lg: '8' })
 */
export const generateTailwindClasses = ( prefix, attribute ) => {
	if ( ! prefix || ! attribute || typeof attribute !== 'object' ) {
		// eslint-disable-next-line no-console
		console.error(
			'Invalid parameters provided to generateTailwindClasses',
			'Prefix:',
			prefix,
			'Attribute:',
			attribute
		);
		return '';
	}

	return (
		Object.entries( attribute )
			// eslint-disable-next-line no-unused-vars
			.filter( ( [ key, value ] ) => value !== '-' ) // Skip "None" values
			.map( ( [ key, value ] ) => {
				return key === 'xs'
					? `${ prefix }-${ value }`
					: `${ key }:${ prefix }-${ value }`;
			} )
			.join( ' ' )
	);
};
