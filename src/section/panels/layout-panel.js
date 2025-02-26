import { __ } from '@wordpress/i18n';
import {
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	SelectControl,
} from '@wordpress/components';
import { HTML_ELEMENTS_OPTIONS } from '../../../config/constants';

export const LayoutPanel = ( { attributes, setAttributes } ) => {
	const { htmlElementType, layoutType } = attributes;

	return (
		<>
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
		</>
	);
};
