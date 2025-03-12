import { BREAKPOINTS, SPACING_OPTIONS } from '@config/constants';

/**
 * Generates Tailwind classes for a given prefix and attributes.
 * @param {string} prefix     - The Tailwind prefix (e.g., 'p', 'py', 'space-y').
 * @param {Object} attributes - The block attributes containing values for each breakpoint.
 * @return {string} - A string of Tailwind classes.
 */

export const generateTailwindClasses = ( prefix ) => {
	if (
		! prefix ||
		! Array.isArray( SPACING_OPTIONS ) ||
		! Array.isArray( BREAKPOINTS )
	) {
		// eslint-disable-next-line no-console
		console.error(
			'Invalid parameters provided to generateTailwindClasses'
		);
		return {};
	}

	return SPACING_OPTIONS.reduce( ( acc, { value } ) => {
		if ( value === '-' ) {
			return acc;
		} // Skip "None" option

		try {
			acc[ value ] = BREAKPOINTS.reduce( ( classes, { key } ) => {
				classes[ key ] =
					key === 'xs'
						? `${ prefix }-${ value }`
						: `${ key }:${ prefix }-${ value }`;
				return classes;
			}, {} );
			return acc;
		} catch ( error ) {
			// eslint-disable-next-line no-console
			console.error(
				`Error generating classes for ${ prefix }-${ value }:`,
				error
			);
			return acc;
		}
	}, {} );
};
