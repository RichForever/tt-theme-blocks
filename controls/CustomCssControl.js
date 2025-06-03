// eslint-disable-next-line import/no-extraneous-dependencies
import { __ } from '@wordpress/i18n';
import { useContext } from '@wordpress/element';
import { BlockSettingsControlContext } from '@utils';

import { css } from '@codemirror/lang-css';
import CodeMirror from '@uiw/react-codemirror';

import {
	Panel,
	PanelBody,
	PanelRow,
	__experimentalText as Text,
} from '@wordpress/components';

const CustomCssControl = ( { attribute, attributeName } ) => {
	const setAttributes = useContext( BlockSettingsControlContext );

	const handleOnChange = ( val ) => {
		setAttributes( {
			[ attributeName ]: val,
		} );
	};

	return (
		<Panel>
			<PanelBody
				title={ __( 'Custom CSS', 'tt-theme-blocks' ) }
				initialOpen={ false }
			>
				<PanelRow>
					<Text variant="muted">
						{ __(
							"Add custom CSS to your block to style it as you need. Use [block] as a placeholder for this block's unique ID.",
							'tt-theme-blocks'
						) }
					</Text>
				</PanelRow>
				<PanelRow>
					<div style={ { width: '100%' } }>
						<CodeMirror
							placeholder={ __(
								'Place your code here…',
								'tt-theme-blocks'
							) }
							height="300px"
							width="100%"
							theme="light"
							extensions={ [ css() ] }
							onChange={ ( val ) => handleOnChange( val ) }
							value={ attribute }
						/>
					</div>
				</PanelRow>
			</PanelBody>
		</Panel>
	);
};

export default CustomCssControl;
