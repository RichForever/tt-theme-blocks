// eslint-disable-next-line import/no-extraneous-dependencies
import { BlockSettingsControlContext } from '@utils';

import { TabPanel } from '@wordpress/components';
import FlexControl from '@controls/Flex/FlexControl';
import HtmlTagControl from '@controls/HtmlTagControl';
import CustomCssControl from '@controls/CustomCssControl';
import BackgroundControl from '@controls/BackgroundControl';
import { InspectorControls } from '@wordpress/block-editor';
import PaddingControl from '@controls/PaddingControl';
import SpacingControl from '@controls/Spacing/SpacingControl';

import ImageControl from './ImageControl';

const BlockSettingsControls = ( { attributes, setAttributes } ) => {
	const {
		customImage,
		customHtmlTag,
		customContentBackground,
		customBackground,
		customFlex,
		customContentPadding,
		customPadding,
		customContentSpacing,
		customCss,
	} = attributes;

	const TABS = [
		{
			title: 'General',
			name: 'General',
			component: (
				<>
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
					<ImageControl
						attribute={ customImage }
						attributeName={ 'customImage' }
					/>
					<CustomCssControl
						attribute={ customCss }
						attributeName={ 'customCss' }
					/>
				</>
			),
		},
		{
			title: 'Content',
			name: 'Content',
			component: (
				<>
					<BackgroundControl
						attribute={ customContentBackground }
						attributeName={ 'customContentBackground' }
					/>
					<PaddingControl
						attribute={ customContentPadding }
						attributeName={ 'customContentPadding' }
					/>
					<SpacingControl
						parentAttribute={ customContentSpacing || {} }
						horizontalAttributeName="customContentSpacing.horizontal"
						verticalAttributeName="customContentSpacing.vertical"
					/>
				</>
			),
		},
	];

	return (
		<InspectorControls>
			<BlockSettingsControlContext.Provider value={ setAttributes }>
				<TabPanel tabs={ TABS }>{ ( tab ) => tab.component }</TabPanel>
			</BlockSettingsControlContext.Provider>
		</InspectorControls>
	);
};

export default BlockSettingsControls;
