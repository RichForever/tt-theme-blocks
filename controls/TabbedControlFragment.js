// eslint-disable-next-line import/no-extraneous-dependencies
import { __, sprintf } from '@wordpress/i18n';
import { BREAKPOINTS, SPACING_OPTIONS } from '@config/constants';
import { Button, PanelRow, SelectControl } from '@wordpress/components';

const DEFAULT_ATTRIBUTE = {
	xs: '-',
	sm: '-',
	md: '-',
	lg: '-',
	xl: '-',
	'2xl': '-',
};

const TabbedControlFragment = ( {
	attribute,
	attributeName,
	setAttributes,
} ) => {
	const handleReset = () => {
		setAttributes( {
			[ attributeName ]: DEFAULT_ATTRIBUTE,
		} );
	};

	const handleOnChange = ( val, viewport ) => {
		setAttributes( {
			[ attributeName ]: {
				...( attribute || {} ),
				[ viewport ]: String( val ),
			},
		} );
	};

	return (
		<div style={ { marginTop: '1rem' } }>
			<PanelRow>
				<div>
					{ BREAKPOINTS.map(
						( {
							key,
							label,
							attribute: viewport,
							description: help,
						} ) => (
							<SelectControl
								key={ key }
								label={ sprintf(
									// translators: %s: %s position
									__( '%s breakpoint', 'tt-theme-blocks' ),
									label
								) }
								help={ help }
								value={
									( attribute && attribute[ viewport ] ) || ''
								}
								options={ SPACING_OPTIONS }
								__nextHasNoMarginBottom
								onChange={ ( newValue ) =>
									handleOnChange( newValue, viewport )
								}
							/>
						)
					) }
				</div>
			</PanelRow>
			<PanelRow>
				<Button isDestructive variant="link" onClick={ handleReset }>
					{ __( 'Reset', 'tt-theme-blocks' ) }
				</Button>
			</PanelRow>
		</div>
	);
};

export default TabbedControlFragment;
