import { __ } from '@wordpress/i18n';
import { HTML_ELEMENTS_OPTIONS } from '@config/constants';
import { InspectorControls } from '@wordpress/block-editor';
import {
	SelectControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';

const SettingsControls = ( { attributes, setAttributes } ) => {
	const { htmlElementType, layoutType } = attributes;
	const handleResetSettings = () =>
		setAttributes( {
			layoutType: 'fullwidth',
			htmlElementType: 'section',
		} );

	return (
		<InspectorControls group="settings">
			<ToolsPanel
				label={ __( 'Settings', 'tt-theme-blocks' ) }
				resetAll={ handleResetSettings }
			>
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
