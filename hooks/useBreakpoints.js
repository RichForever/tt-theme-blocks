import { BREAKPOINTS } from '@config/constants';

/**
 * Provides access to the breakpoints.
 * This hook provides access to the breakpoints defined in config/constants.js.
 * @return {Array} - The breakpoints array.
 */
export const useBreakpoints = () => {
	return BREAKPOINTS;
};
