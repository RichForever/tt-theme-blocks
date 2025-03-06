// eslint-disable-next-line import/no-extraneous-dependencies
import styled from '@emotion/styled';
import { __, sprintf } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { BREAKPOINTS, SPACING_OPTIONS } from '@config/constants';
import {
	SelectControl,
	ToggleControl,
	__experimentalText as Text,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';

const StylesControls = ( { attributes, setAttributes } ) => {
	const {
		iconPadding,
		iconSize,
		iconColor,
		iconBackground,
		iconOverriddeFill,
	} = attributes;

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

	const ControlWrapper = styled.div`
		grid-column: span 2;
	`;

	return (
		<>
			<InspectorControls group="styles">
				<PanelColorSettings
					// @ts-ignore
					__experimentalIsRenderedInSidebar
					title={ __( 'Color', 'tt-theme-blocks' ) }
					colorSettings={ [
						{
							value: iconColor,
							onChange: ( color ) =>
								setAttributes( { iconColor: color } ),
							label: __( 'Text', 'tt-theme-blocks' ),
						},
						{
							value: iconBackground,
							onChange: ( color ) =>
								setAttributes( { iconBackground: color } ),
							label: __( 'Background', 'tt-theme-blocks' ),
						},
					] }
				/>
				<div className="p-4 pt-0 space-y-4">
					<Text variant="muted">
						{ __(
							'Any color or fill values in the SVG icon itself will take precedent over the chosen color.',
							'tt-theme-blocks'
						) }
					</Text>
					<ToggleControl
						__nextHasNoMarginBottom
						checked={ iconOverriddeFill }
						label={ __(
							'Apply icon color to fill',
							'tt-theme-blocks'
						) }
						help={ __(
							'Set the SVG fill value to the chosen icon color. Disable as needed.',
							'tt-theme-blocks'
						) }
						onChange={ () =>
							setAttributes( {
								iconOverriddeFill: ! iconOverriddeFill,
							} )
						}
					/>
				</div>
			</InspectorControls>
			<InspectorControls group="styles">
				<ToolsPanel
					label={ __( 'Padding', 'tt-theme-blocks' ) }
					resetAll={ handleResetPadding }
				>
					<ControlWrapper>
						<Text variant="muted">
							{ __(
								'Adjust icon padding for different breakpoints. This allows you to control the spacing around the icon on various screen sizes.',
								'tt-theme-blocks'
							) }
						</Text>
					</ControlWrapper>
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
												[ attribute ]:
													String( newValue ),
											},
										} )
									}
								/>
							</ToolsPanelItem>
						)
					) }
				</ToolsPanel>
				<ToolsPanel
					label={ __( 'Size', 'tt-theme-blocks' ) }
					resetAll={ handleResetSize }
				>
					<ControlWrapper>
						<Text variant="muted">
							{ __(
								'Adjust the size of the icon for different breakpoints. This allows you to control the appearance of the icon on various screen sizes.',
								'tt-theme-blocks'
							) }
						</Text>
					</ControlWrapper>
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
										( iconSize && iconSize[ attribute ] ) ||
										'-'
									}
									options={ SPACING_OPTIONS }
									__nextHasNoMarginBottom
									onChange={ ( newValue ) =>
										setAttributes( {
											iconSize: {
												...( iconSize || {} ),
												[ attribute ]:
													String( newValue ),
											},
										} )
									}
								/>
							</ToolsPanelItem>
						)
					) }
				</ToolsPanel>
			</InspectorControls>
		</>
	);
};

export default StylesControls;
