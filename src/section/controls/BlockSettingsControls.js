// eslint-disable-next-line import/no-extraneous-dependencies
import {
	BREAKPOINTS,
	HTML_ELEMENTS_OPTIONS,
	SPACING_OPTIONS,
} from '@config/constants';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import {
	Button,
	Panel,
	PanelBody,
	PanelRow,
	SelectControl,
	__experimentalText as Text,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';

const BlockSettingsControls = ( { attributes, setAttributes } ) => {
	const {
		sectionHtmlElement,
		sectionLayout,
		sectionPadding,
		sectionSpacing,
		sectionBackground,
	} = attributes;

	const handleResetLayout = () => {
		setAttributes( {
			sectionLayout: 'fullwidth',
		} );
	};

	const handleResetElement = () => {
		setAttributes( {
			sectionHtmlElement: 'section',
		} );
	};

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
		<InspectorControls>
			<Panel>
				<PanelBody
					title={ __( 'Layout', 'tt-theme-blocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<Text variant="muted">
							{ __(
								'Configure how your section spans across the page. Choose between full-width layouts that extend to the edges of the screen or boxed layouts that maintain content within a contained area.',
								'tt-theme-blocks'
							) }
						</Text>
					</PanelRow>
					<PanelRow>
						<ToggleGroupControl
							label={ __( 'Layout type', 'tt-theme-blocks' ) }
							help={ __(
								"Select the layout type for your section. 'Full width' spans the entire viewport, while 'Boxed' constrains the section within a container.",
								'tt-theme-blocks'
							) }
							value={ sectionLayout }
							isBlock
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={ ( val ) =>
								setAttributes( {
									sectionLayout: val,
								} )
							}
						>
							<ToggleGroupControlOption
								value="fullwidth"
								label={ __( 'Full width', 'tt-theme-blocks' ) }
							/>
							<ToggleGroupControlOption
								value="boxed"
								label={ __( 'Boxed', 'tt-theme-blocks' ) }
							/>
						</ToggleGroupControl>
					</PanelRow>
					<PanelRow>
						<Button
							isDestructive
							variant="link"
							onClick={ handleResetLayout }
						>
							{ __( 'Reset', 'tt-theme-blocks' ) }
						</Button>
					</PanelRow>
				</PanelBody>
			</Panel>
			<Panel>
				<PanelBody
					title={ __( 'HTML Element', 'tt-theme-blocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<Text variant="muted">
							{ __(
								'Select the appropriate HTML element for your section to ensure proper semantic structure. Different elements provide different accessibility benefits and styling capabilities.',
								'tt-theme-blocks'
							) }
						</Text>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label={ __( 'HTML Element', 'tt-theme-blocks' ) }
							help={ __(
								'Select the HTML element to use for your section. This determines the semantic meaning and structure of your content.',
								'tt-theme-blocks'
							) }
							value={ sectionHtmlElement }
							options={ HTML_ELEMENTS_OPTIONS }
							__nextHasNoMarginBottom
							onChange={ ( val ) =>
								setAttributes( {
									sectionHtmlElement: val,
								} )
							}
						/>
					</PanelRow>
					<PanelRow>
						<Button
							isDestructive
							variant="link"
							onClick={ handleResetElement }
						>
							{ __( 'Reset', 'tt-theme-blocks' ) }
						</Button>
					</PanelRow>
				</PanelBody>
			</Panel>
			<Panel>
				<PanelBody
					title={ __( 'Colors', 'tt-theme-blocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<Text variant="muted">
							{ __(
								"Customize the background color of your section to create visual separation between content areas or to match your site's color scheme.",
								'tt-theme-blocks'
							) }
						</Text>
					</PanelRow>
					<PanelRow>
						<div className="w-full">
							<PanelColorSettings
								// @ts-ignore
								className="!p-0 !border-none"
								__experimentalIsRenderedInSidebar
								title={ __(
									'Section Background',
									'tt-theme-blocks'
								) }
								colorSettings={ [
									{
										value: sectionBackground,
										onChange: ( color ) =>
											setAttributes( {
												sectionBackground: color,
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
								"Adjust the internal spacing of your section for each screen size. Proper padding ensures content doesn't feel cramped and maintains visual hierarchy across devices.",
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
												'%s breakpoint',
												'tt-theme-blocks'
											),
											label
										) }
										help={ help }
										value={
											( sectionPadding &&
												sectionPadding[ attribute ] ) ||
											''
										}
										options={ SPACING_OPTIONS }
										__nextHasNoMarginBottom
										onChange={ ( newValue ) =>
											setAttributes( {
												sectionPadding: {
													...( sectionPadding || {} ),
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
								handleResetAttributes( 'sectionPadding' )
							}
						>
							{ __( 'Reset', 'tt-theme-blocks' ) }
						</Button>
					</PanelRow>
				</PanelBody>
			</Panel>
			<Panel>
				<PanelBody
					title={ __( 'Spacing', 'tt-theme-blocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<Text variant="muted">
							{ __(
								'Control the vertical spacing between this section and adjacent content. This helps create rhythm in your page layout and improves readability across different devices.',
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
												'%s breakpoint',
												'tt-theme-blocks'
											),
											label
										) }
										help={ help }
										value={
											( sectionSpacing &&
												sectionSpacing[ attribute ] ) ||
											''
										}
										options={ SPACING_OPTIONS }
										__nextHasNoMarginBottom
										onChange={ ( newValue ) =>
											setAttributes( {
												sectionSpacing: {
													...( sectionSpacing || {} ),
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
								handleResetAttributes( 'sectionSpacing' )
							}
						>
							{ __( 'Reset', 'tt-theme-blocks' ) }
						</Button>
					</PanelRow>
				</PanelBody>
			</Panel>
		</InspectorControls>
	);
};

export default BlockSettingsControls;
