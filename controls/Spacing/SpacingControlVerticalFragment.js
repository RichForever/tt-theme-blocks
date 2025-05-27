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

const SpacingControlVerticalFragment = ( {
	parentAttribute = {},
	attributeName,
	setAttributes,
} ) => {
	const [ parentKey, childKey ] = attributeName.split( '.' );

	const currentValues = {
		...DEFAULT_ATTRIBUTE,
		...( parentAttribute[ childKey ] || {} ),
	};

	const handleReset = () => {
		const resetState = {
			...parentAttribute, // Preserve all other properties
			[ childKey ]: DEFAULT_ATTRIBUTE, // Reset current control
		};

		// Clean up any root-level breakpoints
		BREAKPOINTS.forEach( ( { attribute: viewport } ) => {
			if ( resetState[ viewport ] !== undefined ) {
				delete resetState[ viewport ];
			}
		} );

		setAttributes( {
			[ parentKey ]: resetState,
		} );
	};

	const handleOnChange = ( val, viewport ) => {
		const updatedValues = {
			...currentValues,
			[ viewport ]: val === '' ? '-' : String( val ),
		};

		setAttributes( {
			[ parentKey ]: {
				...parentAttribute,
				[ childKey ]: updatedValues,
			},
		} );
	};

	// Get the current direction values

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
									// translators: %s: padding position (e.g., "Top", "Bottom", "Left", "Right")
									__( '%s breakpoint', 'tt-theme-blocks' ),
									label
								) }
								help={ help }
								value={
									currentValues[ viewport ] === '-'
										? ''
										: currentValues[ viewport ]
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

export default SpacingControlVerticalFragment;
