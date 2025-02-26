import { __, sprintf } from '@wordpress/i18n';
import { Button, SelectControl } from '@wordpress/components';
import { BREAKPOINTS, SPACING_OPTIONS } from '../../../config/constants';

export const StylePanel = ( { attributes, setAttributes } ) => {
	const { padding } = attributes;

	const handleResetPadding = () => {
		setAttributes( {
			padding: {
				xs: '-',
				sm: '-',
				md: '-',
				lg: '-',
				xl: '-',
				'2xl': '-',
			},
		} );
	};

	return (
		<>
			{ BREAKPOINTS.map( ( { key, label, attribute } ) => (
				<SelectControl
					key={ key }
					label={ sprintf(
						// translators: %s: padding position (e.g., "Top", "Bottom", "Left", "Right")
						__( 'Padding %s', 'tt-theme-blocks' ),
						label
					) }
					value={ ( padding && padding[ attribute ] ) || '' }
					options={ SPACING_OPTIONS }
					__nextHasNoMarginBottom
					onChange={ ( newValue ) =>
						setAttributes( {
							padding: {
								...( padding || {} ),
								[ attribute ]: String( newValue ),
							},
						} )
					}
				/>
			) ) }
			<Button isDestructive variant="link" onClick={ handleResetPadding }>
				{ __( 'Reset to defaults', 'tt-theme-blocks' ) }
			</Button>
		</>
	);
};
