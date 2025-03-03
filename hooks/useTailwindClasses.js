import { BREAKPOINTS } from '@config/constants';
import { PADDING_CLASSES, SIZE_CLASSES } from '@utils/cls';

/**
 * Generates Tailwind classes for padding and size based on attributes.
 * @param {Object}  attributes            - The block attributes.
 * @param {Object}  options               - Options for class generation.
 * @param {string}  options.paddingPrefix - Prefix for padding classes (e.g., 'p' or 'py').
 * @param {boolean} options.includeSize   - Whether to include size classes.
 * @return {Object} - An object containing classes based on the options provided.
 */
export const useTailwindClasses = (
	attributes,
	options = { paddingPrefix: '', includeSize: false }
) => {
	const { padding = attributes.iconPadding, iconSize } = attributes;
	const { paddingPrefix = 'p', includeSize = false } = options;

	const paddingClasses = BREAKPOINTS.reduce( ( classes, { key } ) => {
		const value = padding?.[ key ];
		if ( value && PADDING_CLASSES[ value ]?.[ key ] ) {
			classes.push(
				PADDING_CLASSES[ value ][ key ].replace(
					'p-',
					`${ paddingPrefix }-`
				)
			);
		}
		return classes;
	}, [] ).join( ' ' );

	const sizeClasses = includeSize
		? BREAKPOINTS.reduce( ( classes, { key } ) => {
				const value = iconSize?.[ key ];
				if ( value && SIZE_CLASSES[ value ]?.[ key ] ) {
					classes.push( SIZE_CLASSES[ value ][ key ] );
				}
				return classes;
		  }, [] ).join( ' ' )
		: '';

	return includeSize
		? { iconPaddingClasses: paddingClasses, iconSizeClasses: sizeClasses }
		: { paddingClasses };
};
