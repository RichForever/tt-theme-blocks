// eslint-disable-next-line import/no-extraneous-dependencies
import { __, sprintf } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { BREAKPOINTS, SPACING_OPTIONS } from '@config/constants';
import {
	SelectControl,
	ToggleControl,
	__experimentalText as Text,
	Panel,
	PanelBody,
	PanelRow,
	Button,
} from '@wordpress/components';

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
					<PanelBody title="Colors" initialOpen={ false }>
						<PanelRow>
							<Text variant="muted">
								{ __(
									'Adjust icon padding for different breakpoints. This allows you to control the spacing around the icon on various screen sizes.',
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
					<PanelBody title="Padding" initialOpen={ false }>
						<PanelRow>
							<Text variant="muted">
								{ __(
									'Adjust icon padding for different breakpoints. This allows you to control the spacing around the icon on various screen sizes.',
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
					<PanelBody title="Size" initialOpen={ false }>
						<PanelRow>
							<Text variant="muted">
								{ __(
									'Adjust the size of the icon for different breakpoints. This allows you to control the appearance of the icon on various screen sizes.',
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
