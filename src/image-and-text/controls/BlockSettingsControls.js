// eslint-disable-next-line import/no-extraneous-dependencies
import FlexControl from '@controls/Flex/FlexControl';
import HtmlTagControl from '@controls/HtmlTagControl';
import { BlockSettingsControlContext } from '@utils';
import CustomCssControl from '@controls/CustomCssControl';
import BackgroundControl from '@controls/BackgroundControl';
import { InspectorControls } from '@wordpress/block-editor';
import PaddingControl from '@controls/Padding/PaddingControl';
import SpacingControl from '@controls/Spacing/SpacingControl';

import ImageControl from './ImageControl';

const BlockSettingsControls = ( { attributes, setAttributes } ) => {
	const {
		customImage,
		customHtmlTag,
		customBackground,
		customFlex,
		customPadding,
		customSpacing,
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
					parentAttribute={ customPadding || {} }
					horizontalAttributeName="customPadding.horizontal"
					verticalAttributeName="customPadding.vertical"
				/>
				<SpacingControl
					parentAttribute={ customSpacing || {} }
					horizontalAttributeName="customSpacing.horizontal"
					verticalAttributeName="customSpacing.vertical"
				/>
				<HtmlTagControl
					attribute={ customHtmlTag }
					attributeName={ 'customHtmlTag' }
				/>
				<ImageControl
					attribute={ customImage }
					attributeName={ 'customImage' }
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
