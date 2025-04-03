// eslint-disable-next-line import/no-extraneous-dependencies
import { BREAKPOINTS, SPACING_OPTIONS } from '@config/constants';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import {
	Button,
	Panel,
	PanelBody,
	PanelRow,
	SelectControl,
	__experimentalText as Text,
	ToggleControl,
} from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';

const BlockSettingsControls = ( { attributes, setAttributes } ) => {
	const {
		iconPadding,
		iconSize,
		iconColor,
		iconBackground,
		iconOverriddeFill,
	} = attributes;

	const handleResetAttributes = ( atttributeName ) => {
		setAttributes( {
			[ atttributeName ]: {
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
			<InspectorControls>
				<Panel>
					<PanelBody
						title={ __( 'Colors', 'tt-theme-blocks' ) }
						initialOpen={ false }
					>
						<PanelRow>
							<Text variant="muted">
								{ __(
									"Customize the icon's appearance by setting its color and background. This helps integrate the icon with your site's design language and improves visual consistency.",
									'tt-theme-blocks'
								) }
							</Text>
						</PanelRow>
						<PanelRow>
							<div className="w-full">
								<PanelColorSettings
									// @ts-ignore
									__experimentalIsRenderedInSidebar
									className="!p-0 !border-none"
									title={ __(
										'Icon Colors',
										'tt-theme-blocks'
									) }
									colorSettings={ [
										{
											value: iconColor,
											onChange: ( color ) =>
												setAttributes( {
													iconColor: color,
												} ),
											label: __(
												'Text',
												'tt-theme-blocks'
											),
										},
										{
											value: iconBackground,
											onChange: ( color ) =>
												setAttributes( {
													iconBackground: color,
												} ),
											label: __(
												'Background',
												'tt-theme-blocks'
											),
										},
									] }
								/>
							</div>
						</PanelRow>
						<PanelRow>
							<div className="space-y-4">
								<Text variant="muted">
									{ __(
										'SVG icons may contain their own color definitions. Enable this option to override those colors with your selected color settings for better design consistency.',
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
											iconOverriddeFill:
												! iconOverriddeFill,
										} )
									}
								/>
							</div>
						</PanelRow>
					</PanelBody>
				</Panel>
				<Panel>
					<PanelBody
						title={ __( 'Padding', 'tt-theme-blocks' ) }
						initialOpen={ false }
					>
						<PanelRow>
							<Text variant="muted">
								{ __(
									'Adjust the space around your icon for each screen size. Proper padding ensures the icon has enough breathing room and maintains visual balance within your layout.',
									'tt-theme-blocks'
								) }
							</Text>
						</PanelRow>
						<PanelRow>
							<div>
								{ BREAKPOINTS.map(
									( {
										key,
										label,
										attribute,
										description: help,
									} ) => (
										<SelectControl
											key={ key }
											label={ sprintf(
												// translators: %s: padding position (e.g., "Top", "Bottom", "Left", "Right")
												__(
													'Padding %s',
													'tt-theme-blocks'
												),
												label
											) }
											help={ help }
											value={
												( iconPadding &&
													iconPadding[
														attribute
													] ) ||
												'-'
											}
											options={ SPACING_OPTIONS }
											__nextHasNoMarginBottom
											onChange={ ( newValue ) =>
												setAttributes( {
													iconPadding: {
														...( iconPadding ||
															{} ),
														[ attribute ]:
															String( newValue ),
													},
												} )
											}
										/>
									)
								) }
							</div>
						</PanelRow>
						<PanelRow>
							<Button
								isDestructive
								variant="link"
								onClick={ () =>
									handleResetAttributes( 'iconPadding' )
								}
							>
								{ __( 'Reset', 'tt-theme-blocks' ) }
							</Button>
						</PanelRow>
					</PanelBody>
				</Panel>
				<Panel>
					<PanelBody
						title={ __( 'Size', 'tt-theme-blocks' ) }
						initialOpen={ false }
					>
						<PanelRow>
							<Text variant="muted">
								{ __(
									'Control the dimensions of your icon across different devices. Responsive sizing ensures your icon remains proportional and visually appropriate at all screen sizes.',
									'tt-theme-blocks'
								) }
							</Text>
						</PanelRow>
						<PanelRow>
							<div>
								{ BREAKPOINTS.map(
									( {
										key,
										label,
										attribute,
										description: help,
									} ) => (
										<SelectControl
											key={ key }
											label={ sprintf(
												// translators: %s: padding position (e.g., "Top", "Bottom", "Left", "Right")
												__(
													'Size %s',
													'tt-theme-blocks'
												),
												label
											) }
											help={ help }
											value={
												( iconSize &&
													iconSize[ attribute ] ) ||
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
									)
								) }
							</div>
						</PanelRow>
						<PanelRow>
							<Button
								isDestructive
								variant="link"
								onClick={ () =>
									handleResetAttributes( 'iconSize' )
								}
							>
								{ __( 'Reset', 'tt-theme-blocks' ) }
							</Button>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
		</>
	);
};

export default BlockSettingsControls;
