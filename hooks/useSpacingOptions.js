import { SPACING_OPTIONS } from '@config/constants';

/**
 * Provides access to the spacing options.
 * This hook provides access to the spacing options defined in config/constants.js
 * @return {Array} - The spacing options array.
 */
export const useSpacingOptions = () => {
	return SPACING_OPTIONS;
};
