import { __ } from '@wordpress/i18n';
import {
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

export const LayoutPanel = ( { attributes, setAttributes } ) => {
	const { layoutType } = attributes;

	return (
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
	);
};
