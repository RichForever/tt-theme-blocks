import { __, sprintf } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { BREAKPOINTS, SPACING_OPTIONS } from '@config/constants';
import {
	SelectControl,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';

const StylesControls = ( { attributes, setAttributes } ) => {
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
		<InspectorControls group="styles">
			<ToolsPanel
				label={ __( 'Padding', 'tt-theme-blocks' ) }
				resetAll={ handleResetPadding }
			>
				{ BREAKPOINTS.map( ( { key, label, attribute } ) => (
					<ToolsPanelItem
						key={ key }
						label={ label }
						hasValue={ () => !! padding }
						onDeselect={ () =>
							setAttributes( {
								padding: {
									...( padding || {} ),
									[ attribute ]: '-',
								},
							} )
						}
					>
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
					</ToolsPanelItem>
				) ) }
			</ToolsPanel>
		</InspectorControls>
	);
};

export default StylesControls;
