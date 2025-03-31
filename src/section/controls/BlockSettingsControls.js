// eslint-disable-next-line import/no-extraneous-dependencies
import { __, sprintf } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import {
	BREAKPOINTS,
	HTML_ELEMENTS_OPTIONS,
	SPACING_OPTIONS,
} from '@config/constants';
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
				<PanelBody title="Layout" initialOpen={ false }>
					<PanelRow>
						<Text variant="muted">
							{ __(
								'Customize the layout type for your section to adapt to different design requirements.',
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
				<PanelBody title="HTML Element" initialOpen={ false }>
					<PanelRow>
						<Text variant="muted">
							{ __(
								'Customize HTML element for your section to adapt to different design requirements.',
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
				<PanelBody title="Padding" initialOpen={ false }>
					<PanelRow>
						<Text variant="muted">
							{ __(
								'Adjust the vertical padding for different breakpoints. This allows you to control the spacing around the section on various screen sizes.',
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
				<PanelBody title="Spacing" initialOpen={ false }>
					<PanelRow>
						<Text variant="muted">
							{ __(
								'Adjust the vertical padding for different breakpoints. This allows you to control the spacing around the section on various screen sizes.',
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
