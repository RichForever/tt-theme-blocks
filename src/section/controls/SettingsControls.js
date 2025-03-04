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
	const { htmlElementType, layoutType } = attributes;
	const handleResetSettings = () =>
		setAttributes( {
			layoutType: 'fullwidth',
			htmlElementType: 'section',
		} );
	const PanelDescription = styled.div`
		grid-column: span 2;
	`;
	return (
		<InspectorControls group="settings">
			<ToolsPanel
				label={ __( 'Settings', 'tt-theme-blocks' ) }
				resetAll={ handleResetSettings }
			>
				<PanelDescription>
					<Text variant="muted">
						{ __(
							'Customize the layout type and HTML element for your section to adapt to different design requirements.',
							'tt-theme-blocks'
						) }
					</Text>
				</PanelDescription>
				<ToolsPanelItem
					label={ __( 'Layout type', 'tt-theme-blocks' ) }
					hasValue={ () => !! layoutType }
					onDeselect={ () =>
						setAttributes( { layoutType: 'fullwidth' } )
					}
				>
					<ToggleGroupControl
						label={ __( 'Layout type', 'tt-theme-blocks' ) }
						value={ layoutType }
						isBlock
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						onChange={ ( val ) =>
							setAttributes( {
								layoutType: val,
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
					hasValue={ () => !! htmlElementType }
					onDeselect={ () =>
						setAttributes( { htmlElementType: 'section' } )
					}
				>
					<SelectControl
						label={ __( 'HTML Element', 'tt-theme-blocks' ) }
						value={ htmlElementType }
						options={ HTML_ELEMENTS_OPTIONS }
						__nextHasNoMarginBottom
						onChange={ ( val ) =>
							setAttributes( {
								htmlElementType: val,
							} )
						}
					/>
				</ToolsPanelItem>
			</ToolsPanel>
		</InspectorControls>
	);
};

export default SettingsControls;
