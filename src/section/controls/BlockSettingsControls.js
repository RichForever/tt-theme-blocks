// eslint-disable-next-line import/no-extraneous-dependencies
import HtmlTagControl from '@controls/HtmlTagControl';
import { BlockSettingsControlContext } from '@utils';
import CustomCssControl from '@controls/CustomCssControl';
import BackgroundControl from '@controls/BackgroundControl';
import { InspectorControls } from '@wordpress/block-editor';
import PaddingControl from '@controls/Padding/PaddingControl';
import SpacingControl from '@controls/Spacing/SpacingControl';

import LayoutControl from './LayoutControl';

const BlockSettingsControls = ( { attributes, setAttributes } ) => {
	const {
		customHtmlTag,
		customLayout,
		customBackground,
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
				<HtmlTagControl
					attribute={ customHtmlTag }
					attributeName={ 'customHtmlTag' }
				/>
				<LayoutControl
					attribute={ customLayout }
					attributeName={ 'customLayout' }
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
				<CustomCssControl
					attribute={ customCss }
					attributeName={ 'customCss' }
				/>
			</BlockSettingsControlContext.Provider>
		</InspectorControls>
	);
};

export default BlockSettingsControls;
