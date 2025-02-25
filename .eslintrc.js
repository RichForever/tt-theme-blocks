const defaultConfig = require( '../test-block/node_modules/@wordpress/scripts/config/.eslintrc.js' );
module.exports = {
	...defaultConfig,
	rules: {
		...defaultConfig.rules,
		'@wordpress/no-unsafe-wp-apis': 'off',
	},
};
