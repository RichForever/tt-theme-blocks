import { __, sprintf } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { BREAKPOINTS, SPACING_OPTIONS } from '@config/constants';
import {
	SelectControl,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';

const StylesControls = ( { attributes, setAttributes } ) => {
	const { iconPadding, iconSize } = attributes;
	const handleResetPadding = () => {
		setAttributes( {
			iconPadding: {
				xs: '-',
				sm: '-',
				md: '-',
				lg: '-',
				xl: '-',
				'2xl': '-',
			},
		} );
	};
	const handleResetSize = () => {
		setAttributes( {
			iconSize: {
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
						hasValue={ () => !! iconPadding }
						onDeselect={ () =>
							setAttributes( {
								iconPadding: {
									...( iconPadding || {} ),
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
							value={
								( iconPadding && iconPadding[ attribute ] ) ||
								'-'
							}
							options={ SPACING_OPTIONS }
							__nextHasNoMarginBottom
							onChange={ ( newValue ) =>
								setAttributes( {
									iconPadding: {
										...( iconPadding || {} ),
										[ attribute ]: String( newValue ),
									},
								} )
							}
						/>
					</ToolsPanelItem>
				) ) }
			</ToolsPanel>
			<ToolsPanel
				label={ __( 'Size', 'tt-theme-blocks' ) }
				resetAll={ handleResetSize }
			>
				{ BREAKPOINTS.map( ( { key, label, attribute } ) => (
					<ToolsPanelItem
						key={ key }
						label={ label }
						hasValue={ () => !! iconSize }
						onDeselect={ () =>
							setAttributes( {
								iconSize: {
									...( iconSize || {} ),
									[ attribute ]: '-',
								},
							} )
						}
					>
						<SelectControl
							key={ key }
							label={ sprintf(
								// translators: %s: padding position (e.g., "Top", "Bottom", "Left", "Right")
								__( 'Size %s', 'tt-theme-blocks' ),
								label
							) }
							value={
								( iconSize && iconSize[ attribute ] ) || '-'
							}
							options={ SPACING_OPTIONS }
							__nextHasNoMarginBottom
							onChange={ ( newValue ) =>
								setAttributes( {
									iconSize: {
										...( iconSize || {} ),
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
