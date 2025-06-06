/**
 * Generates Tailwind CSS padding classes based on the provided attribute object.
 * The function processes padding values for different breakpoints and sides (top, right, bottom, left)
 * and generates appropriate Tailwind classes (p-, px-, py-, pt-, pr-, pb-, pl-).
 *
 * @param {Object} attribute                   - An object containing padding configurations for different breakpoints
 * @param {Object} attribute.breakpoint        - Configuration for each breakpoint (xs, sm, md, lg, xl, 2xl)
 * @param {string} attribute.breakpoint.top    - Top padding value (format: "var:preset|padding-xs|value")
 * @param {string} attribute.breakpoint.right  - Right padding value (format: "var:preset|padding-xs|value")
 * @param {string} attribute.breakpoint.bottom - Bottom padding value (format: "var:preset|padding-xs|value")
 * @param {string} attribute.breakpoint.left   - Left padding value (format: "var:preset|padding-xs|value")
 * @return {string} Space-separated string of Tailwind padding classes
 * @example
 * // Returns "p-36 md:px-48 md:py-36"
 * generateTailwindPaddingClasses({
 *   xs: {
 *     top: "var:preset|padding-xs|36",
 *     right: "var:preset|padding-xs|36",
 *     bottom: "var:preset|padding-xs|36",
 *     left: "var:preset|padding-xs|36"
 *   },
 *   md: {
 *     top: "var:preset|padding-xs|36",
 *     right: "var:preset|padding-xs|48",
 *     bottom: "var:preset|padding-xs|36",
 *     left: "var:preset|padding-xs|48"
 *   }
 * })
 */
export const generateTailwindPaddingClasses = ( attribute ) => {
	// Early return if attribute is invalid
	if ( ! attribute || typeof attribute !== 'object' ) {
		return '';
	}

	/**
	 * Extracts the actual padding value from the raw input string.
	 * The input format is expected to be "|value" where value is the padding size.
	 * Returns null for "None" or "-" values, indicating no padding.
	 *
	 * @param {string|null} raw - The raw padding value string in format "|value"
	 * @return {string|null} The extracted padding value or null if invalid
	 */
	const extractValue = ( raw ) => {
		const match = raw?.match( /\|([^|]+)$/ ); // Gets value after last pipe
		const value = match ? match[ 1 ] : null;
		return value === 'None' || value === '-' ? null : value;
	};

	// Process each breakpoint and generate appropriate classes
	return Object.entries( attribute )
		.flatMap( ( [ breakpoint, sides ] ) => {
			// Extract padding values for each side
			const top = extractValue( sides.top );
			const right = extractValue( sides.right );
			const bottom = extractValue( sides.bottom );
			const left = extractValue( sides.left );

			// Skip if no padding values are set for this breakpoint
			if ( ! top && ! right && ! bottom && ! left ) {
				return [];
			}

			// For xs breakpoint, no prefix is needed. For others, add breakpoint prefix (e.g., "md:")
			const prefix = breakpoint === 'xs' ? '' : `${ breakpoint }:`;
			const classes = [];

			// Case 1: All sides have the same padding value
			// Example: top: "|4", right: "|4", bottom: "|4", left: "|4" → "p-4"
			if ( top && top === right && top === bottom && top === left ) {
				classes.push( `${ prefix }p-${ top }` );
				return classes;
			}

			// Case 2: Handle vertical padding (top and bottom)
			// If top and bottom are the same, use py- prefix
			// Otherwise, use pt- and pb- separately
			if ( top && bottom && top === bottom ) {
				classes.push( `${ prefix }py-${ top }` );
			} else {
				if ( top ) {
					classes.push( `${ prefix }pt-${ top }` );
				}
				if ( bottom ) {
					classes.push( `${ prefix }pb-${ bottom }` );
				}
			}

			// Case 3: Handle horizontal padding (left and right)
			// If left and right are the same, use px- prefix
			// Otherwise, use pl- and pr- separately
			if ( left && right && left === right ) {
				classes.push( `${ prefix }px-${ left }` );
			} else {
				if ( left ) {
					classes.push( `${ prefix }pl-${ left }` );
				}
				if ( right ) {
					classes.push( `${ prefix }pr-${ right }` );
				}
			}

			return classes;
		} )
		.join( ' ' ); // Join all classes with spaces
};
