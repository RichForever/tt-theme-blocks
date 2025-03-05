import { isEmpty } from 'lodash';

import { parseIcon } from '../utils/parseIcon';

/**
 * Parses an SVG icon and ensures it is valid.
 * This hook parses SVG icons and ensures they are valid.
 * @param {string} icon - The SVG icon string.
 * @return {Object|null} - The parsed icon or null if invalid.
 */
export const useIconParser = ( icon ) => {
	if ( ! icon ) {
		return null;
	}

	const parsedIcon = parseIcon( icon );
	if ( isEmpty( parsedIcon?.props ) ) {
		return null;
	}

	return parsedIcon;
};
