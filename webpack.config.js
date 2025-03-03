const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,
	resolve: {
		...defaultConfig.resolve,
		alias: {
			...defaultConfig.resolve.alias,
			'@components': path.resolve( __dirname, 'components' ),
			'@config': path.resolve( __dirname, 'config' ),
			'@hooks': path.resolve( __dirname, 'hooks' ),
			'@utils': path.resolve( __dirname, 'utils' ),
			'@icons': path.resolve( __dirname, 'components/icons' ),
		},
	},
};
