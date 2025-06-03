// eslint-disable-next-line import/no-extraneous-dependencies
import { BlockSettingsControlContext } from '@utils';
import { InspectorControls } from '@wordpress/block-editor';
import PaddingControl from '@controls/Padding/PaddingControl';

import SizeControl from './SizeControl';
import ColorBackgroundControl from './ColorBackgroundControl';

const BlockSettingsControls = ( { attributes, setAttributes } ) => {
	const {
		customSize,
		customColor,
		customBackground,
		customOverrideFill,
		customPadding,
	} = attributes;

	return (
		<>
			<InspectorControls>
				<BlockSettingsControlContext.Provider value={ setAttributes }>
					<ColorBackgroundControl
						colorAttribute={ customColor }
						colorAttributeName={ 'customColor' }
						backgroundAttribute={ customBackground }
						backgroundAttributeName={ 'customBackground' }
						overrideFillAttribute={ customOverrideFill }
						overrideFillAttributeName={ 'customOverrideFill' }
					/>
					<PaddingControl
						parentAttribute={ customPadding || {} }
						horizontalAttributeName="customPadding.horizontal"
						verticalAttributeName="customPadding.vertical"
					/>
					<SizeControl
						attribute={ customSize }
						attributeName={ 'customSize' }
					/>
				</BlockSettingsControlContext.Provider>
			</InspectorControls>
		</>
	);
};

export default BlockSettingsControls;
