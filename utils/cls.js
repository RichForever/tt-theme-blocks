import { SPACING_OPTIONS, BREAKPOINTS } from '../config/constants';

export const PADDING_CLASSES = SPACING_OPTIONS.reduce( ( acc, { value } ) => {
	// Skip the "None" option
	if ( value === '-' ) {
		return acc;
	}

	acc[ value ] = BREAKPOINTS.reduce( ( classes, { key } ) => {
		classes[ key ] =
			key === 'xs' ? `py-${ value }` : `${ key }:py-${ value }`;
		return classes;
	}, {} );
	return acc;
}, {} );
