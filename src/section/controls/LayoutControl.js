// eslint-disable-next-line import/no-extraneous-dependencies
import { __ } from '@wordpress/i18n';
import { useContext } from '@wordpress/element';
import { BlockSettingsControlContext } from '@utils';
import {
	Button,
	Panel,
	PanelBody,
	PanelRow,
	__experimentalText as Text,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

const DEFAULT_ATTRIBUTE = 'fullwidth';

const LayoutControl = ( { attribute, attributeName } ) => {
	const setAttributes = useContext( BlockSettingsControlContext );

	const handleReset = () => {
		setAttributes( {
			[ attributeName ]: DEFAULT_ATTRIBUTE,
		} );
	};

	const handleOnChange = ( val ) => {
		setAttributes( {
			[ attributeName ]: val,
		} );
	};

	return (
		<Panel>
			<PanelBody
				title={ __( 'Layout', 'tt-theme-blocks' ) }
				initialOpen={ false }
			>
				<PanelRow>
					<Text variant="muted">
						{ __(
							'Configure how your block spans across the page. Choose between full-width layouts that extend to the edges of the screen or boxed layouts that maintain content within a contained area.',
							'tt-theme-blocks'
						) }
					</Text>
				</PanelRow>
				<PanelRow>
					<ToggleGroupControl
						label={ __( 'Layout type', 'tt-theme-blocks' ) }
						help={ __(
							"Select the layout type for your block. 'Full width' spans the entire viewport, while 'Boxed' constrains the block within a container.",
							'tt-theme-blocks'
						) }
						value={ attribute }
						isBlock
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						onChange={ ( val ) => handleOnChange( val ) }
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
						onClick={ handleReset }
					>
						{ __( 'Reset', 'tt-theme-blocks' ) }
					</Button>
				</PanelRow>
			</PanelBody>
		</Panel>
	);
};

export default LayoutControl;
