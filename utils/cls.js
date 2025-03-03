import { BREAKPOINTS, SPACING_OPTIONS } from '@config/constants';

const generateTailwindClasses = ( prefix, options, breakpoints ) => {
	if (
		! prefix ||
		! Array.isArray( options ) ||
		! Array.isArray( breakpoints )
	) {
		// eslint-disable-next-line no-console
		console.error(
			'Invalid parameters provided to generateTailwindClasses'
		);
		return {};
	}

	return options.reduce( ( acc, { value } ) => {
		// eslint-disable-next-line curly
		if ( value === '-' ) return acc; // Skip "None" option

		try {
			acc[ value ] = breakpoints.reduce( ( classes, { key } ) => {
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

// Generate Tailwind classes for padding, size, etc.
export const PADDING_CLASSES = generateTailwindClasses(
	'p',
	SPACING_OPTIONS,
	BREAKPOINTS
);
export const VERTICAL_PADDING_CLASSES = generateTailwindClasses(
	'py',
	SPACING_OPTIONS,
	BREAKPOINTS
);
export const HORIZONTAL_PADDING_CLASSES = generateTailwindClasses(
	'px',
	SPACING_OPTIONS,
	BREAKPOINTS
);
export const SIZE_CLASSES = generateTailwindClasses(
	'size',
	SPACING_OPTIONS,
	BREAKPOINTS
);
