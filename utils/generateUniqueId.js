/**
 * Generates a random string of specified length using lowercase letters and numbers.
 *
 * @param {number} [length=12] - The length of the string to generate
 * @return {string} A random string containing only lowercase letters and numbers
 * @example
 * generateUniqueId() // returns something like "a1b2c3d4e5f6"
 * generateUniqueId(8) // returns something like "a1b2c3d4"
 */
export const generateUniqueId = ( length = 12 ) => {
	const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	for ( let i = 0; i < length; i++ ) {
		result += chars.charAt( Math.floor( Math.random() * chars.length ) );
	}
	return result;
};
