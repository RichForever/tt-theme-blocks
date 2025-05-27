// https://aki-hamano.blog/en/2024/10/26/introduce-eslint-to-the-block-development/
const path = require( 'path' );

module.exports = {
	root: true,
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],
	settings: {
		'import/resolver': {
			webpack: {
				config: {
					resolve: {
						alias: {
							'@components': path.resolve(
								__dirname,
								'components'
							),
							'@config': path.resolve( __dirname, 'config' ),
							'@controls': path.resolve( __dirname, 'controls' ),
							'@hooks': path.resolve( __dirname, 'hooks' ),
							'@utils': path.resolve( __dirname, 'utils' ),
							'@icons': path.resolve(
								__dirname,
								'components/icons'
							),
						},
					},
				},
			},
		},
	},
	rules: {
		'@wordpress/no-unsafe-wp-apis': 'off',
		'@wordpress/i18n-text-domain': [
			'error',
			{
				allowedTextDomain: 'tt-theme-blocks',
			},
		],
	},
};
