// eslint-disable-next-line import/no-extraneous-dependencies
import styled from '@emotion/styled';
import { __, sprintf } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { BREAKPOINTS, SPACING_OPTIONS } from '@config/constants';
import {
	SelectControl,
	__experimentalText as Text,
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
	const PanelDescription = styled.div`
		grid-column: span 2;
	`;
	return (
		<InspectorControls group="styles">
			<ToolsPanel
				label={ __( 'Icon padding', 'tt-theme-blocks' ) }
				resetAll={ handleResetPadding }
			>
				<PanelDescription>
					<Text variant="muted">
						{ __(
							'Adjust icon padding for different breakpoints. This allows you to control the spacing around the icon on various screen sizes.',
							'tt-theme-blocks'
						) }
					</Text>
				</PanelDescription>
				{ BREAKPOINTS.map(
					( { key, label, attribute, description: help } ) => (
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
								help={ help }
								value={
									( iconPadding &&
										iconPadding[ attribute ] ) ||
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
					)
				) }
			</ToolsPanel>
			<ToolsPanel
				label={ __( 'Icon size', 'tt-theme-blocks' ) }
				resetAll={ handleResetSize }
			>
				<PanelDescription>
					<Text variant="muted">
						{ __(
							'Adjust the size of the icon for different breakpoints. This allows you to control the appearance of the icon on various screen sizes.',
							'tt-theme-blocks'
						) }
					</Text>
				</PanelDescription>
				{ BREAKPOINTS.map(
					( { key, label, attribute, description: help } ) => (
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
								help={ help }
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
					)
				) }
			</ToolsPanel>
		</InspectorControls>
	);
};

export default StylesControls;
