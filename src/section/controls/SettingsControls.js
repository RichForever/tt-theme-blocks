import { HTML_ELEMENTS_OPTIONS } from '@config/constants';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from '@emotion/styled';
import { InspectorControls } from '@wordpress/block-editor';
import {
	SelectControl,
	__experimentalText as Text,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const SettingsControls = ( { attributes, setAttributes } ) => {
	const { sectionHtmlElement, sectionLayout } = attributes;

	const handleResetSettings = () =>
		setAttributes( {
			sectionLayout: 'fullwidth',
			sectionHtmlElement: 'section',
		} );

	const ControlWrapper = styled.div`
		grid-column: span 2;
	`;
	return (
		<InspectorControls group="settings">
			<ToolsPanel
				label={ __( 'Settings', 'tt-theme-blocks' ) }
				resetAll={ handleResetSettings }
			>
				<ControlWrapper>
					<Text variant="muted">
						{ __(
							'Customize the layout type and HTML element for your section to adapt to different design requirements.',
							'tt-theme-blocks'
						) }
					</Text>
				</ControlWrapper>
				<ToolsPanelItem
					label={ __( 'Layout type', 'tt-theme-blocks' ) }
					hasValue={ () => !! sectionLayout }
					onDeselect={ () =>
						setAttributes( { sectionLayout: 'fullwidth' } )
					}
				>
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
				</ToolsPanelItem>
				<ToolsPanelItem
					label={ __( 'HTML Element', 'tt-theme-blocks' ) }
					hasValue={ () => !! sectionHtmlElement }
					onDeselect={ () =>
						setAttributes( { sectionHtmlElement: 'section' } )
					}
				>
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
				</ToolsPanelItem>
			</ToolsPanel>
		</InspectorControls>
	);
};

export default SettingsControls;
