export const useTailwindClasses = ( prefix, attribute ) => {
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
