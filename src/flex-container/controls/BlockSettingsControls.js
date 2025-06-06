// eslint-disable-next-line import/no-extraneous-dependencies
import { BlockSettingsControlContext } from '@utils';

import FlexControl from '@controls/Flex/FlexControl';
import HtmlTagControl from '@controls/HtmlTagControl';
import CustomCssControl from '@controls/CustomCssControl';
import BackgroundControl from '@controls/BackgroundControl';
import { InspectorControls } from '@wordpress/block-editor';
import PaddingControl from '@controls/PaddingControl';

const BlockSettingsControls = ( { attributes, setAttributes } ) => {
	const {
		customHtmlTag,
		customBackground,
		customFlex,
		customPadding,
		customCss,
	} = attributes;

	return (
		<InspectorControls>
			<BlockSettingsControlContext.Provider value={ setAttributes }>
				<BackgroundControl
					attribute={ customBackground }
					attributeName={ 'customBackground' }
				/>
				<FlexControl
					parentAttribute={ customFlex || {} }
					directionAttributeName="customFlex.direction"
					gapAttributeName="customFlex.gap"
				/>
				<PaddingControl
					attribute={ customPadding }
					attributeName={ 'customPadding' }
				/>
				<HtmlTagControl
					attribute={ customHtmlTag }
					attributeName={ 'customHtmlTag' }
				/>
				<CustomCssControl
					attribute={ customCss }
					attributeName={ 'customCss' }
				/>
			</BlockSettingsControlContext.Provider>
		</InspectorControls>
	);
};

export default BlockSettingsControls;
