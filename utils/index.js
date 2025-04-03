/**
 * Generates Tailwind classes from a prefix and attribute object
 * @param {string} prefix    - The Tailwind class prefix (e.g., 'p' for padding)
 * @param {Object} attribute - Breakpoint values (e.g., { xs: '4', md: '6' })
 * @return {string} Generated Tailwind classes
 */
export const generateTailwindClasses = ( prefix, attribute ) => {
	if ( ! prefix || ! attribute || typeof attribute !== 'object' ) {
		// eslint-disable-next-line no-console
		console.error(
			'Invalid parameters provided to generateTailwindClasses'
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
