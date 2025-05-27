// eslint-disable-next-line import/no-extraneous-dependencies
import { __ } from '@wordpress/i18n';
import { useContext } from '@wordpress/element';
import BlockSettingsControlContext from '@utils/context';
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

const HtmlTagControl = ( { attribute, attributeName } ) => {
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
				title={ __( 'HTML Tag', 'tt-theme-blocks' ) }
				initialOpen={ false }
			>
				<PanelRow>
					<Text variant="muted">
						{ __(
							'Select the appropriate HTML element for your block to ensure proper semantic structure. Different elements provide different accessibility benefits and styling capabilities.',
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
