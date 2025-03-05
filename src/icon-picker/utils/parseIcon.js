/**
 * External dependencies
 */
import parse, { attributesToProps, domToReact } from 'html-react-parser';

/**
 * Parse the style attributes separately.
 *
 * @param {string} stylesString All styles in a string.
 * @return {Object}             All styles in object form.
 */
export const parseStyles = ( stylesString ) => {
	if ( typeof stylesString !== 'string' ) {
		return {};
	}

	return stylesString.split( ';' ).reduce( ( allStyles, style ) => {
		const [ property, value ] = style.split( ':' ).map( ( s ) => s.trim() );
		if ( ! property || ! value ) {
			return allStyles;
		}

		const camelCaseProperty = property
			.replace( /^-ms-/, 'ms-' )
			.replace( /^-/, '' )
			.replace( /-./g, ( c ) => c.substr( 1 ).toUpperCase() );

		return { ...allStyles, [ camelCaseProperty ]: value };
	}, {} );
};

/**
 * Parse the icon string into a React object.
 *
 * @param {string} icon The HTML icon.
 * @return {Object}     The icons as a React object.
 */
export const parseIcon = ( icon ) => {
	if ( ! icon || typeof icon !== 'string' ) {
		// eslint-disable-next-line no-console
		console.error( 'Invalid icon provided:', icon );
		return null;
	}

	const newIcon = icon.trim();
	if ( ! newIcon.startsWith( '<svg' ) || ! newIcon.endsWith( '</svg>' ) ) {
		// eslint-disable-next-line no-console
		console.error( 'Icon is not a valid SVG:', newIcon );
		return null;
	}

	const parseOptions = {
		trim: true,
		replace: ( { attribs, children, name, parent, type } ) => {
			// Allow text but only within text elements.
			if ( type === 'text' && parent && parent.name === 'text' ) {
				return;
			}

			// Skip invalid elements.
			if (
				( type !== 'tag' && type !== 'style' ) || // Allow svg and style tags.
				( ! parent && name !== 'svg' ) || // The only root-level element can be an svg.
				! name
			) {
				return <></>;
			}

			const Tag = `${ name }`;

			// Handle style tags differently.
			if (
				type === 'style' &&
				name === 'style' &&
				children?.[ 0 ]?.data
			) {
				return (
					<Tag { ...attributesToProps( attribs ) }>
						{ children[ 0 ].data }
					</Tag>
				);
			}
			// Handle other elements.
			return (
				<Tag
					{ ...attributesToProps( attribs ) }
					style={ parseStyles( attribs?.style ) }
				>
					{ domToReact( children, parseOptions ) }
				</Tag>
			);
		},
	};

	try {
		return parse( newIcon, parseOptions );
	} catch ( error ) {
		// eslint-disable-next-line no-console
		console.error( 'Error parsing icon:', error );
		return null;
	}
};
