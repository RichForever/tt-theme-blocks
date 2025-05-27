// eslint-disable-next-line import/no-extraneous-dependencies
import { __ } from '@wordpress/i18n';
import { useContext } from '@wordpress/element';
import BlockSettingsControlContext from '@utils/context';
import { PanelColorSettings } from '@wordpress/block-editor';
import {
	Panel,
	PanelBody,
	PanelRow,
	__experimentalText as Text,
	ToggleControl,
} from '@wordpress/components';

const ColorBackgroundControl = ( {
	colorAttribute,
	colorAttributeName,
	backgroundAttribute,
	backgroundAttributeName,
	overrideFillAttribute,
	overrideFillAttributeName,
} ) => {
	const setAttributes = useContext( BlockSettingsControlContext );

	const handleOnChangeColor = ( val ) => {
		setAttributes( {
			[ colorAttributeName ]: val,
		} );
	};

	const handleOnChangeBackground = ( val ) => {
		setAttributes( {
			[ backgroundAttributeName ]: val,
		} );
	};

	const handleOnChangeOverrideFill = () => {
		setAttributes( {
			[ overrideFillAttributeName ]: ! overrideFillAttribute,
		} );
	};

	return (
		<Panel>
			<PanelBody
				title={ __( 'Color and Background', 'tt-theme-blocks' ) }
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
							title={ __( 'Icon Colors', 'tt-theme-blocks' ) }
							colorSettings={ [
								{
									value: colorAttribute,
									onChange: ( color ) =>
										handleOnChangeColor( color ),
									label: __( 'Text', 'tt-theme-blocks' ),
								},
								{
									value: backgroundAttribute,
									onChange: ( color ) =>
										handleOnChangeBackground( color ),
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
							checked={ overrideFillAttribute }
							label={ __(
								'Apply icon color to fill',
								'tt-theme-blocks'
							) }
							help={ __(
								'Set the SVG fill value to the chosen icon color. Disable as needed.',
								'tt-theme-blocks'
							) }
							onChange={ handleOnChangeOverrideFill }
						/>
					</div>
				</PanelRow>
			</PanelBody>
		</Panel>
	);
};

export default ColorBackgroundControl;
