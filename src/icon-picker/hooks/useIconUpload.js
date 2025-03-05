import { useCallback } from '@wordpress/element';
import { useDisplayMessage } from './useDisplayMessage';

/**
 * Custom hook to handle SVG uploads and set block attributes.
 *
 * @param {Object}   attributes    The current block attributes.
 * @param {Function} setAttributes Function to update block attributes.
 * @return {Function} Function to handle the uploaded media.
 */
export const useIconUpload = ( attributes, setAttributes ) => {
	const displayMessage = useDisplayMessage();

	const handleDropdownMediaSelect = useCallback(
		( media ) => {
			if ( ! media.url?.endsWith( '.svg' ) ) {
				displayMessage( 'fileTypeSelect' );
				return;
			}

			fetch( media.url )
				.then( ( response ) => response.text() )
				.then( ( rawString ) => {
					const svgString = sanitizeRawSVGString( rawString );

					if ( ! svgString ) {
						displayMessage( 'fileTypeError' );
						return;
					}

					setAttributes( {
						icon: svgString,
					} );
				} )
				.catch( () => displayMessage( 'fileTypeError' ) );
		},
		[ displayMessage, setAttributes ]
	);

	return handleDropdownMediaSelect;
};

/**
 * Sanitize the raw SVG string.
 *
 * @param {string} rawString The raw string from the uploaded SVG file.
 * @return {string} The sanitized SVG string or an empty string if invalid.
 */
function sanitizeRawSVGString( rawString ) {
	const svgDoc = new window.DOMParser().parseFromString(
		rawString,
		'image/svg+xml'
	);
	let svgString = '';

	if (
		svgDoc.childNodes.length === 1 &&
		svgDoc.firstChild.nodeName === 'svg'
	) {
		svgString = new window.XMLSerializer().serializeToString(
			svgDoc.documentElement
		);
	}

	return svgString;
}
