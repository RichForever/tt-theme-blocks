// eslint-disable-next-line import/no-extraneous-dependencies
import { __ } from '@wordpress/i18n';
import { useContext } from '@wordpress/element';
import { BlockSettingsControlContext } from '@utils';
import { HTML_ELEMENTS_OPTIONS } from '@config/constants';
import {
	Button,
	Panel,
	PanelBody,
	PanelRow,
	SelectControl,
	__experimentalText as Text,
} from '@wordpress/components';

const DEFAULT_ATTRIBUTE = 'section';

const HtmlTagControl = ( {
	attribute,
	attributeName,
	panelTitle = 'HTML Tag',
} ) => {
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
			<PanelBody title={ panelTitle } initialOpen={ false }>
				<PanelRow>
					<Text variant="muted">
						{ __(
							'Choose the HTML tag that best suits your block. This will impact the structure and accessibility of your content.',
							'tt-theme-blocks'
						) }
					</Text>
				</PanelRow>
				<PanelRow>
					<SelectControl
						label={ __( 'HTML Tag', 'tt-theme-blocks' ) }
						help={ __(
							'Select the HTML tag to use for your block. This determines the semantic meaning and structure of your content.',
							'tt-theme-blocks'
						) }
						value={ attribute }
						options={ HTML_ELEMENTS_OPTIONS }
						__nextHasNoMarginBottom
						onChange={ ( val ) => handleOnChange( val ) }
					/>
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

export default HtmlTagControl;
